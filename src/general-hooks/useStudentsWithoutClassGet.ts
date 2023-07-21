import usePaginationWrapper from '@safsims/general-hooks/usePaginationWrapper';
import { StudentDto, StudentRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

const useStudentsWithoutClassGet = ({ termId }) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [students, setStudents] = useState<StudentDto[]>([]);
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
    setTotalElements,
  } = usePaginationWrapper();

  const getStudents = async () => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        StudentRestControllerService.getAllStudentsWithoutClassUsingGet({
          limit,
          offset,
          search: debouncedSearchText,
          termId,
        }),
      );

      setPageable(data);
      setStudents(data.content || []);
      stopLoading();
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  useEffect(() => {
    if (termId) getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, limit, termId]);

  return {
    loading,
    getStudents,
    students,
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
    setTotalElements,
  };
};

export default useStudentsWithoutClassGet;
