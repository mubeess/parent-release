import { SubjectDto, SubjectRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useCallback, useEffect, useState } from 'react';

interface IProps {
  classLevelId: string;
}

const useSubjectsByClassLevelsFetch = ({ classLevelId }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [subjects, setSubjects] = useState<SubjectDto[]>([]);

  const fetchSubjects = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        SubjectRestControllerService.getClassSubjectsUsingGet({
          classLevelId,
        }),
      );
      setSubjects(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  }, [classLevelId]);

  useEffect(() => {
    fetchSubjects();
  }, [fetchSubjects]);

  return {
    loadingSubjects: loading,
    fetchSubjects,
    subjects,
  };
};

export default useSubjectsByClassLevelsFetch;
