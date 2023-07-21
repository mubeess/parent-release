import { GradeGroupDto, GradingRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

interface IProps {
  termId?: string;
}

const useGradingTermlySettingsGet = ({ termId }: IProps) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [gradeSettings, setGradeSettings] = useState<GradeGroupDto[]>([]);

  const fetchSettings = async (termId: string) => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        GradingRestControllerService.getTermGradingConfigurationUsingGet({
          termId,
        }),
      );
      stopLoading();
      setGradeSettings(data);
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  useEffect(() => {
    if (termId) {
      fetchSettings(termId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termId]);

  return {
    gradeSettings,
    loading,
  };
};

export default useGradingTermlySettingsGet;
