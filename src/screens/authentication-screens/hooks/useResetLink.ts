import { useNavigation } from '@react-navigation/native';
import httpClient from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import Toast from 'react-native-toast-message';
const useResetLink = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const navigation = useNavigation();

  const sendPasswordResetLink = async (email: string) => {
    startLoading();
    try {
      await httpClient.post('/auth/password/reset-request', {
        username: email,
      });
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Check your email and proceed!',
      });
      stopLoading();
      navigation.goBack();
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  return {
    loading,
    sendPasswordResetLink,
  };
};

export default useResetLink;
