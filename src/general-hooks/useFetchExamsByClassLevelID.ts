import { ExamDto, ExamRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useCallback, useEffect, useState } from 'react';

interface IProps {
  classLevelId: string;
}

const useExamsByClassLevelsFetch = ({ classLevelId }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [exams, setExams] = useState<ExamDto[]>([]);

  const fetchExams = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        ExamRestControllerService.getClassLevelExamsLiteUsingGet({
          classLevelId,
        }),
      );
      setExams(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  }, [classLevelId]);

  useEffect(() => {
    if (classLevelId) fetchExams();
  }, [fetchExams, classLevelId]);

  return {
    loadingExams: loading,
    fetchExams,
    exams,
    setExams,
  };
};

export default useExamsByClassLevelsFetch;
