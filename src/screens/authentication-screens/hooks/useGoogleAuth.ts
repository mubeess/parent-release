import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import PUBLIC_URL from '@safsims/utils/publicUrl';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';

const useGoogleAuth = () => {
  const handle = useLoading();
  const startGoogleLogin = async () => {
    const schoolId = (await AsyncStorage.getItem('school_id')) || '';
    handle.startLoading();
    const callbackUrl = `https://${schoolId}.${PUBLIC_URL}/auth?loginMode=mobileapp`;
    console.log(callbackUrl);
    try {
      const data = await apiWrapper(() =>
        AuthenticationRestControllerService.googleLoginUsingGet({
          callbackUrl,
          xTenantId: schoolId,
        }),
      );
      handle.stopLoading();
      return data;
    } catch (error) {
      handleError(error);
      handle.stopLoading();
    }
  };
  return {
    startGoogleLogin,
    loading: handle.loading,
  };
};

export default useGoogleAuth;
