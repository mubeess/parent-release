import AsyncStorage from '@react-native-async-storage/async-storage';
import { clearPrivileges } from '@safsims/redux/privileges/actions';
import { logoutUser, setAccessToken, setCurrentStaffSubjects } from '@safsims/redux/users/actions';
import config from '@safsims/utils/config';
import axios from 'axios';

const { API_BASE_URL } = config;

const httpClient = axios.create({
  baseURL: API_BASE_URL,
});

const refreshExpiredToken = async (refreshToken) => {
  try {
    const { data } = await httpClient.post(`/token`, { refresh_token: refreshToken });
    await AsyncStorage.setItem('access_token', data.access_token);
    return data;
  } catch (error) {
    return undefined;
  }
};

let isRefreshingToken = false;

export const instanceInterceptors = async (store) => {
  httpClient.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      const originalRequest = error.config;
      const refreshToken = await AsyncStorage.getItem('refresh_token');
      if (refreshToken && error.response?.status === 401 && !originalRequest._retry) {
        if (!isRefreshingToken) {
          isRefreshingToken = true;
          originalRequest._retry = true;
          delete httpClient.defaults.headers.common.Authorization;
          const res = await refreshExpiredToken(refreshToken);
          if (res) {
            store.dispatch(setAccessToken(res.access_token));
            await AsyncStorage.setItem('access_token', res.access_token);
            isRefreshingToken = false;
            httpClient.defaults.headers.common.Authorization = `Bearer ${res.access_token}`;
            originalRequest.headers.Authorization = `Bearer ${res.access_token}`;
            return httpClient(originalRequest);
          } else {
            store.dispatch(clearPrivileges());
            store.dispatch(setCurrentStaffSubjects([]));
            store.dispatch(logoutUser());
          }
        } else {
          setTimeout(async () => {
            const access_token: any = await AsyncStorage.getItem('access_token');
            // @ts-ignore
            originalRequest.headers.Authorization = `Bearer ${access_token}`;
            return httpClient(originalRequest);
          }, 2000);
        }
      }
      return Promise.reject(error);
    },
  );
};

export const tenantInterceptor = async (store) => {
  httpClient.interceptors.request.use(
    (config) => {
      const tenantId = store.getState().configuration?.selectedSchool?.school_id;
      if (config.headers) {
        config.headers['X-TENANT-ID'] = tenantId;
      }
      return config;
    },
    async function (error) {
      return Promise.reject(error);
    },
  );
  axios.interceptors.request.use(
    (config) => {
      const tenantId = store.getState().configuration?.selectedSchool?.school_id;
      if (config.headers) {
        config.headers['X-TENANT-ID'] = tenantId;
      }

      return config;
    },
    async function (error) {
      return Promise.reject(error);
    },
  );
};

export async function httpRequest<T>(request: () => Promise<T>): Promise<T> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request();
      resolve(response);
    } catch (error) {
      if (error?.response?.status === 401 || error?.status === 401) {
        const originalRequest = error.response?.config || error.body?.config;
        if (!isRefreshingToken) {
          isRefreshingToken = true;
          const refresh_token = await AsyncStorage.getItem('refresh_token');
          delete httpClient.defaults.headers.common.Authorization;
          try {
            const res = await refreshExpiredToken(refresh_token);
            if (res) {
              const { access_token: token } = res;
              await AsyncStorage.setItem('access_token', token);
              isRefreshingToken = false;
              httpClient.defaults.headers.common.Authorization = `Bearer ${token}`;
              // @ts-ignore
              if (originalRequest.headers) {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                const { data }: any = await axios(originalRequest);
                resolve(data);
              } else {
                const response = await request();
                resolve(response);
              }
            } else {
              reject(error);
            }
          } catch (error2) {
            isRefreshingToken = false;
            reject(error2);
          }
        } else {
          setTimeout(async () => {
            const access_token: any = await AsyncStorage.getItem('access_token');
            // @ts-ignore
            originalRequest.headers.Authorization = `Bearer ${access_token}`;
            const { data }: any = await axios(originalRequest);
            resolve(data);
          }, 2000);
        }
      } else {
        reject(error);
      }
    }
  });
}

function timeoutPromise<T>(ms: number, promise: Promise<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      const error: any = new Error('We experienced a timeout, please try again.');
      error.name = 'TimeoutError';
      error.response = {
        data: {
          message: 'We experienced a timeout, please try again.',
        },
        status: 409,
      };
      reject(error);
    }, ms);
    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err);
      },
    );
  });
}

export async function apiWrapper<T>(request: () => Promise<T>) {
  const response = await timeoutPromise(60000, httpRequest(request));
  return response;
}

export const handleAccessToken = async () => {
  const token = await AsyncStorage.getItem('access_token');
  // @ts-ignore
  httpClient.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null;
};

export default httpClient;
