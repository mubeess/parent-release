import {
  InitiateBulkPaymentRequest,
  SchoolFeesPaymentsRestControllerService,
} from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';

const useMakeBulkPayment = () => {
  const { loading, startLoading, stopLoading } = useLoading();

  const startPaymentProcess = async (payload: InitiateBulkPaymentRequest, callback) => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        SchoolFeesPaymentsRestControllerService.initOnlineBulkPaymentUsingPost({
          request: { ...payload, web: true, latest_version: true },
        }),
      );
      console.log(data);
      if (payload.payment_method === 'PAYSTACK') {
        const configObj = {
          splitCode: data?.split_code,
          splitId: data?.split_id,
          reference: data?.safsims_transaction_ref,
          subaccounts: data?.fees_payments.map((item) => ({
            subaccount: item.subaccount_ref,
            share: parseInt(item.amount) * 100,
          })),
        };
        callback?.(configObj);
      }
      if (payload.payment_method === 'FLUTTERWAVE') {
        const configObj = {
          reference: data?.safsims_transaction_ref,
          splitCode: data?.splitCode,
          subaccounts: data?.fees_payments.map((item) => ({
            id: item.subaccount_ref,
            transaction_charge_type: 'flat_subaccount',
            transaction_charge: Number(parseFloat(`${item.amount}`)) * 100,
          })),
        };
        console.log('configObj: ', configObj?.subaccounts);
        callback?.(configObj);
      }
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

export default useMakeBulkPayment;
