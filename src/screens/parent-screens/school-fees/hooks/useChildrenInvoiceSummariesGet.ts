import {
  StudentInvoiceSummaryRestControllerService,
  StudentTermInvoiceSummaryDto,
} from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

interface IProps {
  studentIds: string[];
}

const useChildrenInvoiceSummariesGet = ({ studentIds }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [invoiceSummaries, setInvoiceSummaries] = useState<StudentTermInvoiceSummaryDto[]>([]);
  const [fetch, setFetch] = useState<number>(0);
  const refetch = () => setFetch(fetch + 1);

  const fetchSummaries = async (studentIds: string[]) => {
    setLoading(true);
    try {
      const result = await Promise.all(
        studentIds.map(async (studentId) => {
          const data = await apiWrapper(() =>
            StudentInvoiceSummaryRestControllerService.getStudentInvoiceSummaryUsingGet({
              studentId,
            }),
          );
          return data;
        }),
      );
      setLoading(false);
      setInvoiceSummaries(result.flat());
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  useEffect(() => {
    if (studentIds.length) {
      fetchSummaries(studentIds);
    }
  }, [fetch, studentIds]);

  return {
    loading,
    invoiceSummaries,
    refetchSummaries: refetch,
  };
};

export default useChildrenInvoiceSummariesGet;
