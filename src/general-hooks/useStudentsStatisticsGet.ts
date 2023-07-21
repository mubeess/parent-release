import { StudentDashboardStats, StudentRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

const useStudentsStatisticsGet = () => {
  const { startLoading, stopLoading, loading } = useLoading();
  const [studentsStats, setStudentStats] = useState<StudentDashboardStats | undefined>(undefined);

  const fetchStudentsStats = async () => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        StudentRestControllerService.getStudentsStatisticsUsingGet(),
      );
      stopLoading();
      setStudentStats(data);
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  useEffect(() => {
    fetchStudentsStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    studentsStats,
    loadingStats: loading,
  };
};

export default useStudentsStatisticsGet;
