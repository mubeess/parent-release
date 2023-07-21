import { PaymentReceiptDto, SchoolFeesPaymentsRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

interface IProps {
  studentId?: string;
  sessionId?: string | null;
}

const useReceiptsGet = ({ studentId, sessionId }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [receipts, setReceipts] = useState<PaymentReceiptDto[]>([]);
  const [fetch, setFetch] = useState<number>(0);
  const refetch = () => setFetch(fetch + 1);

  const fetchLogs = async (studentId, sessionId) => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        SchoolFeesPaymentsRestControllerService.getPaymentReceiptUsingGet1({
          studentId,
          sessionId,
        }),
      );
      setReceipts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  useEffect(() => {
    if (studentId && sessionId) {
      fetchLogs(studentId, sessionId);
    }
  }, [studentId, sessionId, fetch]);

  return {
    receipts,
    loadingReceipts: loading,
    refetchReceipts: refetch,
  };
};

export default useReceiptsGet;
