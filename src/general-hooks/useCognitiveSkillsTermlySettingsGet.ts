import { CognitiveSkillRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

interface IProps {
  termId?: string;
}

const useCognitiveSkillsTermlySettingsGet = ({ termId }: IProps) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [cognitiveSkills, setCognitiveSkills] = useState<any[]>([]);

  const fetchSettings = async (termId: string) => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        CognitiveSkillRestControllerService.getSkillGroupConfigurationUsingGet({
          termId,
        }),
      );
      stopLoading();
      setCognitiveSkills(data.skill_configurations || []);
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
    cognitiveSkillSettings: cognitiveSkills,
    loading,
  };
};

export default useCognitiveSkillsTermlySettingsGet;
