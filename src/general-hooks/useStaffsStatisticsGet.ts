import { StaffDashboardStats, StaffRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

const useStaffsStatisticsGet = () => {
  const { startLoading, stopLoading, loading } = useLoading();
  const [staffsStats, setStaffStats] = useState<StaffDashboardStats | undefined>(undefined);

  const fetchStaffsStats = async () => {
    startLoading();
    try {
      const data = await apiWrapper(() => StaffRestControllerService.getStaffStatisticsUsingGet());
      stopLoading();
      setStaffStats(data);
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  useEffect(() => {
    fetchStaffsStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    staffsStats,
    loadingStats: loading,
  };
};

export default useStaffsStatisticsGet;
