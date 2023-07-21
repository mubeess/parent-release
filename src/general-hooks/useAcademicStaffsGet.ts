import { StaffDto, StaffRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

const useAcademicStaffsGet = () => {
  const { startLoading, stopLoading, loading } = useLoading();
  const [staffs, setStaffs] = useState<StaffDto[]>([]);

  const fetchStaffs = async () => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        StaffRestControllerService.fetchAllAcademicStaffUsingGet(),
      );
      setStaffs(data);
      stopLoading();
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  useEffect(() => {
    fetchStaffs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    staffs,
    loading,
  };
};

export default useAcademicStaffsGet;
