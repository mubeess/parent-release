import {
  SchoolFeesPaymentsRestControllerService,
  VerifySchoolFeesPaymentResponse,
} from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

const useVerifyPayment = ({ safsimsTransactionRef }) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [paymentResponse, setPaymentResponse] = useState<
    VerifySchoolFeesPaymentResponse | undefined
  >(undefined);

  const verifyPayment = async (safsimsTransactionRef) => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        SchoolFeesPaymentsRestControllerService.verifyPaymentUsingGet({
          safsimsTransactionRef,
        }),
      );
      setPaymentResponse(data[0]);
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  useEffect(() => {
    if (safsimsTransactionRef) {
      verifyPayment(safsimsTransactionRef);
    }
  }, [safsimsTransactionRef]);

  return {
    loading,
    paymentResponse,
  };
};

export default useVerifyPayment;
