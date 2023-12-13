import {
  AttendanceRestControllerService,
  StudentClassAttendanceResponse,
} from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import moment from 'moment';
import { useState } from 'react';

const useGetClassAttendance = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [classAttendance, setAttendance] = useState<StudentClassAttendanceResponse[] | []>([]);
  const today = moment();

  const getClassAttendance = async ({ armId, studentId, classLevelId, month = 0 }) => {
    const currentYear = moment(today).year();
    const endMonth = () => {
      switch (month) {
        case 3:
        case 5:
        case 8:
        case 10:
          return 30;
        case 1:
          return 28;

        default:
          return 31;
      }
    };

    const startDate = `${currentYear}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-01`;
    const endDate = `${currentYear}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-${endMonth()}`;

    startLoading();
    try {
      const data: StudentClassAttendanceResponse[] = await apiWrapper(() =>
        AttendanceRestControllerService.getStudentClassLevelAttendanceUsingGet({
          studentId,
          armId,
          classLevelId,
          startDate,
          endDate,
        }),
      );

      setAttendance(data);
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  return {
    loadingClassAttendance: loading,
    classAttendance,
    getClassAttendance,
  };
};

export default useGetClassAttendance;
