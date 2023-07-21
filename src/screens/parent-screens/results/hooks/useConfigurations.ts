import {
  ResultGenerationConfigDto,
  ResultGenerationConfigRestControllerService,
} from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

type configurationsProps = {
  report_template_id: any;
  id: string;
  config_name: string;
  active: boolean;
};

const useConfigurations = ({ level_id }) => {
  const [loading, setLoading] = useState(false);

  const [configurations, setConfigurations] = useState<ResultGenerationConfigDto[]>([]);

  const fetchConfigurations = async () => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        ResultGenerationConfigRestControllerService.getClassLevelConfigsUsingGet({
          classLevelId: level_id,
        }),
      );
      setConfigurations(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  useEffect(() => {
    fetchConfigurations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level_id]);

  return {
    configurations,
    loading,
  };
};

export default useConfigurations;
