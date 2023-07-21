import { TermCommentDto, TermCommentRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';

interface IProps {
  termId?: string;
  studentId?: string;
}

const useStudentCommentsGet = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [comments, setComments] = useState<TermCommentDto[]>([]);

  const getComments = async ({ termId, studentId }) => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        TermCommentRestControllerService.getStudentEotCommentsUsingGet({
          studentId,
          termId,
        }),
      );
      setComments(data);
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  return {
    loading,
    studentComments: comments,
    getComments,
  };
};

export default useStudentCommentsGet;
