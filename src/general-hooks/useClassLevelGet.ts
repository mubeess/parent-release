import { ClassLevelDto, ClassLevelRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

interface IProps {
  id: string;
}

const useClassLevelGet = ({ id }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [classLevel, setClassLevel] = useState<ClassLevelDto | undefined>();

  const fetchClassLevel = async () => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        ClassLevelRestControllerService.getClassLevelUsingGet({ id }),
      );
      setClassLevel(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchClassLevel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    loadingClassLevel: loading,
    fetchClassLevel,
    classLevel,
  };
};

export default useClassLevelGet;
