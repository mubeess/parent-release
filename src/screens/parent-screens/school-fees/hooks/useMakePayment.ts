import {
  InitiatePaymentRequest,
  SchoolFeesPaymentsRestControllerService,
} from '@safsims/generated';
import { school_id } from '@safsims/utils/constants';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';

const useMakePayment = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [paymentData, setPaymentData] = useState<any>();

  const startPaymentProcess = async (payload: InitiatePaymentRequest, callback) => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        SchoolFeesPaymentsRestControllerService.initOnlinePaymentUsingPost({
          request: { ...payload, web: true, latest_version: true },
          xTenantId: school_id,
        }),
      );

      const configObj = {
        reference: data?.data?.safsims_transaction_ref,
        subaccount: data?.data?.subaccount_ref,
        splitCode: data?.split_code,
        splitId: data?.split_id,
      };
      callback?.(configObj);
      stopLoading();
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  return {
    loading,
    startPaymentProcess,
  };
};

export default useMakePayment;
