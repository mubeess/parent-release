import { StudentDto, StudentRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';
import usePaginationWrapper from './usePaginationWrapper';

const useAllStudentsGet = () => {
  const [students, setStudents] = useState<StudentDto[]>([]);
  const { loading, startLoading, stopLoading } = useLoading();

  const {
    limit,
    offset,
    setOffset,
    setLimit,
    lastPage,
    firstPage,
    totalElements,
    totalPages,
    numberOfElements,
    setPageable,
    page,
    setPage,
    pageOptions,
    debouncedSearchText,
    searchText,
    setSearchText,
  } = usePaginationWrapper();

  const fetchStudents = async () => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        StudentRestControllerService.getAllStudentsUsingGet1({
          limit,
          offset,
          search: debouncedSearchText,
        }),
      );
      setStudents(data?.content || []);
      setPageable(data);
      stopLoading();
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  useEffect(() => {
    fetchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, limit]);

  return {
    students,
    loadingStudents: loading,
    limit,
    offset,
    setOffset,
    setLimit,
    lastPage,
    firstPage,
    totalElements,
    totalPages,
    numberOfElements,
    setPageable,
    page,
    setPage,
    pageOptions,
    setSearchText,
    searchText,
  };
};

export default useAllStudentsGet;
