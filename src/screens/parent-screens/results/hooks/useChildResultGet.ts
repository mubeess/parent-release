import { StudentResultRestControllerService, TermResultAndAssessmentDef } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';

interface IProps {
  termId?: string;
  studentId?: string;
}

const useChildResultGet = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [childResult, setChildResult] = useState<TermResultAndAssessmentDef | undefined>(undefined);

  const getChildResult = async ({ termId, studentId, resultConfigId }) => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        StudentResultRestControllerService.generateStudentResultUsingGet({
          studentId,
          termId,
          resultConfigId,
        }),
      );
      setChildResult(data);
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  return {
    loading,
    childResult,
    getChildResult,
  };
};

export default useChildResultGet;
