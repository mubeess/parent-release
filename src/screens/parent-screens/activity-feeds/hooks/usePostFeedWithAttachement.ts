import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import httpClient from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import Toast from 'react-native-toast-message';

const usePostFeedWithAttachement = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const token = useAppSelector((user) => user.user.access_token);
  const postFeed = async (formdata, callback) => {
    startLoading();
    try {
      await httpClient.post('/activity-feed/feeds', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + token,
        },
      });
      stopLoading();

      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Posted successfully.',
      });
      callback?.();
    } catch (error) {
      console.log('err: ', error?.response);
      stopLoading();
      handleError(error);
    }
  };

  return {
    posting: loading,
    postFeed,
  };
};

export default usePostFeedWithAttachement;
