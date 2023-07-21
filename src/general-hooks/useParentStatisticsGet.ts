import { ParentDashboardStats, ParentRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

const useParentStatisticsGet = () => {
  const { startLoading, stopLoading, loading } = useLoading();
  const [parentStats, setParentStats] = useState<ParentDashboardStats | undefined>(undefined);

  const fetchParentStats = async () => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        ParentRestControllerService.getParentStatisticsUsingGet(),
      );
      stopLoading();
      setParentStats(data);
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  useEffect(() => {
    fetchParentStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    parentStats,
    loadingStats: loading,
  };
};

export default useParentStatisticsGet;
