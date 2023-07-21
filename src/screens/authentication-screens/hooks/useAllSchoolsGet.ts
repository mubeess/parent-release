import usePaginationWrapper from '@safsims/general-hooks/usePaginationWrapper';
import {
  BasicSchoolInformationDto,
  BasicSchoolInformationRestControllerService,
} from '@safsims/generated';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect } from 'react';

const useAllSchoolsGet = () => {
  const { loading, startLoading, stopLoading } = useLoading();

  const {
    limit,
    offset,
    setPageable,
    infiniteScrollCallback,
    debouncedSearchText,
    searchText,
    setSearchText,
    content,
  } = usePaginationWrapper();

  const getSchools = async () => {
    startLoading();
    try {
      const data =
        await BasicSchoolInformationRestControllerService.getAllSchoolInformationUsingGet({
          search: debouncedSearchText,
          limit,
          offset,
        });
      setPageable(data);
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  useEffect(() => {
    getSchools();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchText, offset, limit]);

  return {
    loading,
    schools: content as BasicSchoolInformationDto[],
    searchText,
    setSearchText,
    infiniteScrollCallback,
  };
};

export default useAllSchoolsGet;
