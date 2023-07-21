import { ClassLevelDto, ClassLevelRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useCallback, useEffect, useState } from 'react';

interface IProps {
  termId: string;
  fetch?: boolean;
}

const useClassLevelsWithArmsFetch = ({ termId, fetch = true }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [classLevels, setClassLevels] = useState<ClassLevelDto[]>([]);

  const fetchClassLevelsWithArms = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        ClassLevelRestControllerService.getClassesWithArmInfosUsingGet({
          termId,
        }),
      );
      setClassLevels(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  }, [termId]);

  useEffect(() => {
    if (termId && fetch) {
      fetchClassLevelsWithArms();
    }
  }, [fetchClassLevelsWithArms, termId, fetch]);

  return {
    loadingClassLevels: loading,
    fetchClassLevelsWithArms,
    classLevelsWithArms: classLevels,
  };
};

export default useClassLevelsWithArmsFetch;
