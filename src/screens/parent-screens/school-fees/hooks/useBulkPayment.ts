import { CheckoutRestControllerService, SchoolFeesCheckoutResponse } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

interface IProps {
  studentIds?: string[];
  termId?: string;
}

const useBulkPayment = ({ studentIds, termId }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [checkout, setCheckout] = useState<SchoolFeesCheckoutResponse[]>([]);
  const [fetch, setFetch] = useState<number>(0);
  const refetch = () => setFetch(fetch + 1);

  const getBulkPaymentInfo = async (studentIds, termId) => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        CheckoutRestControllerService.getInvoiceBreakDownUsingPost1({
          request: {
            student_ids: studentIds,
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
    if (studentIds && studentIds?.length && termId) {
      getBulkPaymentInfo(studentIds, termId);
    }
  }, [studentIds, termId, fetch]);

  return {
    bulkCheckout: checkout,
    loading,
    refetch,
  };
};

export default useBulkPayment;
