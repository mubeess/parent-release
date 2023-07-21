import { StudentDto, StudentRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

interface IProps {
  id?: string;
}

const useStudentGet = ({ id }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [student, setStudent] = useState<StudentDto>();

  const fetchStudent = async (id: string) => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        StudentRestControllerService.getStudentUsingGet({
          id,
        }),
      );
      setStudent(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchStudent(id);
    }
  }, [id]);

  return {
    student,
    loadingStudent: loading,
  };
};

export default useStudentGet;
