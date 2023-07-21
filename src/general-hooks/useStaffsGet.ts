import { StaffDto, StaffRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';
import usePaginationWrapper from './usePaginationWrapper';

export type StaffType = 'ACADEMIC' | 'NON_ACADEMIC' | undefined;

const useStaffsGet = () => {
  const { startLoading, stopLoading, loading } = useLoading();
  const [staffs, setStaffs] = useState<StaffDto[]>([]);
  const [staffType, setStaffType] = useState<StaffType>(undefined);
  const {
    limit,
    offset,
    setOffset,
    setLimit,
    totalElements,
    setPageable,
    page,
    pageOptions,
    searchText,
    debouncedSearchText,
    setSearchText,
  } = usePaginationWrapper();

  const fetchStaffs = async () => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        StaffRestControllerService.getAllStaffUsingGet({
          offset,
          limit,
          search: debouncedSearchText,
          staffType,
        }),
      );
      setStaffs(data.content || []);
      setPageable(data);
      stopLoading();
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  useEffect(() => {
    fetchStaffs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, offset, staffType]);

  return {
    staffs,
    loading,
    setOffset,
    setLimit,
    totalElements,
    page,
    pageOptions,
    staffType,
    searchText,
    setSearchText,
    setStaffType,
    limit,
  };
};

export default useStaffsGet;
