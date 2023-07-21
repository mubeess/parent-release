import {
  AssessmentConfigurationDto,
  AssessmentConfigurationRestControllerService,
} from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

interface IProps {
  termId?: string;
}

const useAssessmentTermlySettingsGet = ({ termId }: IProps) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [assessmentSettings, setAssessmentSettings] = useState<AssessmentConfigurationDto[]>([]);

  const fetchSettings = async (termId: string) => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        AssessmentConfigurationRestControllerService.getTermAssessmentFormatsUsingGet({
          termId,
        }),
      );
      stopLoading();
      setAssessmentSettings(data);
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
    assessmentSettings,
    loading,
  };
};

export default useAssessmentTermlySettingsGet;
