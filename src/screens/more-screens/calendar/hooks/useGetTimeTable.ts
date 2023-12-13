import { TimeTableDto, TimeTableRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';

const useGetTimeTable = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [timeTabel, setTimeTable] = useState<TimeTableDto | undefined>(undefined);

  const getTimeTable = async ({ termId, studentId }) => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        TimeTableRestControllerService.getTimeTableForStudentUsingGet({
          studentId,
          termId,
        }),
      );

      setTimeTable(data);
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  return {
    loading,
    timeTabel,
    getTimeTable,
  };
};

export default useGetTimeTable;
