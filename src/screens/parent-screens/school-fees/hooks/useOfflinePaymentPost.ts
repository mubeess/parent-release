import httpClient from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import Toast from 'react-native-toast-message';

const useOfflinePaymentPost = () => {
  const { loading, startLoading, stopLoading } = useLoading();

  const postPayment = async (formdata, callback) => {
    startLoading();
    try {
      await httpClient.post('/parent-offline-payment', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      stopLoading();

      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Payment submitted successfully.',
      });
      callback?.();
    } catch (error) {
      console.log("err: ", error?.response)
      stopLoading();
      handleError(error);
    }
  };

  return {
    posting: loading,
    postPayment,
  };
};

export default useOfflinePaymentPost;
