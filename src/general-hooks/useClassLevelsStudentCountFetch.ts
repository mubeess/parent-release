import { ClassLevelDto, ClassLevelRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useCallback, useEffect, useState } from 'react';

interface IProps {
  termId: string;
}

const useClassLevelsStudentCountFetch = ({ termId }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [classLevelsWithStudentCount, setLevels] = useState<ClassLevelDto[]>([]);

  const fetchClassLevels = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        ClassLevelRestControllerService.getClassesWithStudentCountUsingGet({
          termId,
        }),
      );
      setLevels(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  }, [termId]);

  useEffect(() => {
    fetchClassLevels();
  }, [fetchClassLevels]);

  return {
    classLevelsWithStudentCount,
    loading,
  };
};

export default useClassLevelsStudentCountFetch;
