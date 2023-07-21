import { ClassLevelDto, ClassLevelRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useCallback, useEffect, useState } from 'react';

const useClassLevelsFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [classLevels, setClassLevels] = useState<ClassLevelDto[]>([]);

  const fetchClassLevels = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        ClassLevelRestControllerService.getAllClassLevelsUsingGet(),
      );
      setClassLevels(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  }, []);

  useEffect(() => {
    fetchClassLevels();
  }, [fetchClassLevels]);

  return {
    loadingClassLevels: loading,
    fetchClassLevels,
    classLevels,
  };
};

export default useClassLevelsFetch;
