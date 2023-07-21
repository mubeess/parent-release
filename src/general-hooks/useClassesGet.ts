import { ClassInformationDto, ClassInformationRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

interface IProps {
  armId?: string;
  classLevelId?: string;
  termId?: string;
}

const useClassesGet = ({ armId, termId, classLevelId }: IProps) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [classes, setClasses] = useState<ClassInformationDto[]>([]);

  const fetchClasses = async () => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        ClassInformationRestControllerService.getClassInformationByParamsUsingGet({
          classLevelId,
          armId,
          termId,
        }),
      );
      stopLoading();
      setClasses(data);
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  useEffect(() => {
    fetchClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [armId, classLevelId, termId]);

  return {
    loading,
    classes,
  };
};

export default useClassesGet;
