import usePaginationWrapper from '@safsims/general-hooks/usePaginationWrapper';
import { SubjectDto, SubjectRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

const useGetPaginatedSubjects = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [subjects, setSubject] = useState<SubjectDto[]>([]);
  const {
    limit,
    offset,
    setOffset,
    setLimit,
    totalElements,
    setPageable,
    page,
    setPage,
    pageOptions,
    searchText,
    setSearchText,
    debouncedSearchText,
  } = usePaginationWrapper();

  const getAllSubjects = async () => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        SubjectRestControllerService.getAllSubjectsUsingGet1({
          limit,
          offset,
          search: debouncedSearchText,
        }),
      );

      setPageable(data);
      setSubject(data.content || []);
      stopLoading();
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  useEffect(() => {
    getAllSubjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, limit]);

  return {
    loading,
    getAllSubjects,
    subjects,
    setSearchText,
    searchText,
    limit,
    offset,
    setOffset,
    setLimit,
    totalElements,
    setPageable,
    page,
    setPage,
    pageOptions,
  };
};

export default useGetPaginatedSubjects;
