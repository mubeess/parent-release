import {
  AttendanceRestControllerService,
  StudentAttendanceSummaryResponse,
} from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';

interface IProps {
  termId?: string;
  studentId?: string;
}

const useChildAttendanceSummaryGet = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [attendanceSummary, setAttendanceSummary] = useState<
    StudentAttendanceSummaryResponse | undefined
  >(undefined);

  const getAttendanceSummary = async ({ termId, studentId }) => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        AttendanceRestControllerService.getStudentAttendanceSummaryUsingGet({
          studentId,
          termId,
        }),
      );
      setAttendanceSummary(data);
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  return {
    loading,
    attendanceSummary,
    getAttendanceSummary,
  };
};

export default useChildAttendanceSummaryGet;
