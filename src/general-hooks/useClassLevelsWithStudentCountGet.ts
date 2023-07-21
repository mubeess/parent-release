import { ClassLevelDto, ClassLevelRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useCallback, useEffect, useState } from 'react';

interface IProps {
  termId?: string;
}

const useClassLevelsWithStudentCountGet = ({ termId }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [classLevels, setClassLevels] = useState<ClassLevelDto[]>([]);

  const fetchClassLevels = useCallback(async (termId: string) => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        ClassLevelRestControllerService.getClassesWithStudentCountUsingGet({
          termId,
        }),
      );
      setClassLevels(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  }, []);

  useEffect(() => {
    if (termId) {
      fetchClassLevels(termId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termId]);

  return {
    loadingClassLevels: loading,
    fetchClassLevels,
    classLevels,
  };
};

export default useClassLevelsWithStudentCountGet;
