import { ParentSignupRequest, ParentSignupRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import Toast from 'react-native-toast-message';

const useParentSignup = () => {
  const { startLoading, loading, stopLoading } = useLoading();

  const startSignUp = async (request: ParentSignupRequest, callback = () => {}) => {
    startLoading();
    try {
      await apiWrapper(() =>
        ParentSignupRestControllerService.createParentUsingPost1({
          request,
        }),
      );
      stopLoading();

      Toast.show({
        type: 'success',
        text1: 'Your request has been submitted successfully',
        text2: 'It will be reviewed by a school admin shortly.',
      });
      callback?.();
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  return {
    loading,
    startSignUp,
  };
};

export default useParentSignup;
