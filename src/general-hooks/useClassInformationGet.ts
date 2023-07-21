import { ClassInformationDto, ClassInformationRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

interface IProps {
  classLevelId?: string;
  armId?: string;
  termId?: string;
}

const useClassInformationGet = ({ classLevelId, armId, termId }: IProps) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [classInfo, setClassInfo] = useState<ClassInformationDto | undefined>(undefined);
  const [classInformationList, setClassInformationList] = useState<ClassInformationDto[]>([]);

  const fetchClassInfo = async ({ classLevelId, armId, termId, callback = () => {} }) => {
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
      if (classLevelId && armId && termId) {
        setClassInfo(data.length ? data[0] : undefined);
      }
      setClassInformationList(data);
      callback();
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  useEffect(() => {
    fetchClassInfo({
      classLevelId,
      armId,
      termId,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classLevelId, armId, termId]);

  return {
    loading,
    classInfo,
    fetchClassInfo,
    classInformationList,
    setClassInformationList,
  };
};

export default useClassInformationGet;
