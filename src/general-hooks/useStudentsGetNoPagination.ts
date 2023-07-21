import { StudentLiteDto, StudentRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

const useStudentsGetNoPagination = () => {
  const [students, setStudents] = useState<StudentLiteDto[]>([]);
  const { loading, startLoading, stopLoading } = useLoading();

  const fetchStudents = async () => {
    startLoading();
    try {
      const data = await apiWrapper(() => StudentRestControllerService.getAllStudentsUsingGet());
      setStudents(data);
      stopLoading();
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  useEffect(() => {
    fetchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    students,
    loadingStudents: loading,
  };
};

export default useStudentsGetNoPagination;
