import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateAppPrivilegeState } from '@safsims/redux/privileges/actions';
import {
  setActiveUserType,
  setLoginAttempts,
  setUserTypes,
  updateAppUserState,
  userLoginSuccess,
} from '@safsims/redux/users/actions';
import { UserTypesEnum } from '@safsims/utils/constants';
import httpClient from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { ADMIN_ROLE, DIRECTOR_ROLE, ONBOARDING_ROLE, handleError } from '@safsims/utils/utils';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface IProps {
  username?: string;
  password?: string;
  code?: string;
  callback?: () => void;
}

interface Props {
  transfer_code?: string;
}

const useLogin = ({ transfer_code }: Props) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const dispatch = useDispatch();

  const loginUser = async ({ username, password, code, callback }: IProps) => {
    startLoading();
    const url = code ? `/auth/google/transfer` : '/auth/login';
    const payload = code ? { code } : { username, password };
    try {
      const { data: ref } = await httpClient.post(url, payload);

      const ums = ref.ums_login_response;
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
      const userTypes = (ref.user_types || [])?.map((item) => ({
        user_type: item.toLowerCase(),
        ...ref[item.toLowerCase()],
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
            parent: ref?.parent,
          }),
        );
        dispatch(setLoginAttempts(0));
      }

      callback?.();
      stopLoading();
    } catch (error) {
      handleError(error, { code: 401, message: error.response.data.message }, true, true);
      stopLoading();
    }
  };

  useEffect(() => {
    if (transfer_code) {
      loginUser({ code: transfer_code });
    }
  }, [transfer_code]);

  return {
    loading,
    loginUser,
  };
};

export default useLogin;
