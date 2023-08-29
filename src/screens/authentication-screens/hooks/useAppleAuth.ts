import appleAuth from '@invertase/react-native-apple-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationRestControllerService, LoginToUmsResponse } from '@safsims/generated';
import { updateAppPrivilegeState } from '@safsims/redux/privileges/actions';
import {
  setActiveUserType,
  setLoginAttempts,
  setUserTypes,
  updateAppUserState,
  userLoginSuccess,
} from '@safsims/redux/users/actions';
import { UserTypesEnum } from '@safsims/utils/constants';
import httpClient, { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { ADMIN_ROLE, DIRECTOR_ROLE, ONBOARDING_ROLE, handleError } from '@safsims/utils/utils';
import { useDispatch } from 'react-redux';

const useAppleAuth = () => {
  const handle = useLoading();
  const dispatch = useDispatch();
  const startAppleLogin = async () => {
    const schoolId = (await AsyncStorage.getItem('school_id')) || '';

    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });

    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );

    if (credentialState === appleAuth.State.AUTHORIZED) {
      handle.startLoading();
      try {
        console.log(schoolId);
        handle.startLoading();
        const data: LoginToUmsResponse = await apiWrapper(() =>
          AuthenticationRestControllerService.appleSigninUsingPost({
            appleSigninRequest: {
              authorization_code: appleAuthRequestResponse.authorizationCode || '',
              organization: schoolId,
            },
          }),
        );
        handle.stopLoading();
        const ums = data.ums_login_response;
        const roles = ums?.user?.roles;
        const isSuperAdmin = !!roles?.find((item) => item.role?.name === ONBOARDING_ROLE);
        const isAdmin = !!roles?.find((item) => item.role?.name === ADMIN_ROLE);
        const isDirector = !!roles?.find((item) => item.role?.name === DIRECTOR_ROLE);
        dispatch(
          updateAppPrivilegeState({
            isSuperAdmin,
            isAdmin,
            isDirector,
          }),
        );
        const userTypes = (data.user_types || [])?.map((item) => ({
          user_type: item.toLowerCase(),
          ...data[item.toLowerCase()],
        }));
        dispatch(setUserTypes(userTypes));
        dispatch(
          updateAppUserState({
            access_token: ums?.access_token,
          }),
        );
        await AsyncStorage.setItem('access_token', ums?.access_token || '');
        await AsyncStorage.setItem('refresh_token', ums?.refresh_token || '');
        httpClient.defaults.headers.common.Authorization = `Bearer ${ums?.access_token}`;
        const parent = userTypes.find((item) => item.user_type === UserTypesEnum.PARENT);
        if (parent) {
          dispatch(setActiveUserType(UserTypesEnum.PARENT));
          dispatch(userLoginSuccess(parent));
          dispatch(
            updateAppUserState({
              parent: data?.parent,
            }),
          );
          dispatch(setLoginAttempts(0));
        }
        handle.stopLoading();
      } catch (error) {
        console.log(error);
        handleError(error);
        handle.stopLoading();
      }
    }
  };
  return {
    startAppleLogin,
    loading: handle.loading,
  };
};

export default useAppleAuth;
