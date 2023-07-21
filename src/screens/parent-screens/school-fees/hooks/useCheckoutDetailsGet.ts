import { CheckoutRestControllerService, SchoolFeesCheckoutResponse } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

interface IProps {
  studentId?: string;
  sessionId?: string;
  termId?: string;
}

const useCheckoutDetailsGet = ({ studentId, termId }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [checkout, setCheckout] = useState<SchoolFeesCheckoutResponse>();
  const [fetch, setFetch] = useState<number>(0);
  const refetch = () => setFetch(fetch + 1);

  const getCheckoutDetails = async (studentId, termId) => {
    setLoading(true);
    try {
      const data: SchoolFeesCheckoutResponse = await apiWrapper(() =>
        CheckoutRestControllerService.getInvoiceBreakDownUsingPost({
          request: {
            student_id: studentId,
            term_id: termId,
          },
        }),
      );
      setCheckout(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  useEffect(() => {
    if (studentId && termId) {
      getCheckoutDetails(studentId, termId);
    }
  }, [studentId, termId, fetch]);

  return {
    checkout,
    loadingCheckout: loading,
    refetchCheckout: refetch,
  };
};

export default useCheckoutDetailsGet;
