import AsyncStorage from '@react-native-async-storage/async-storage';
import { ParentDto } from '@safsims/generated';
import { persistReducer } from 'redux-persist';
import userActionTypes from './types';

export interface IAppUserState {
  currentUser?: any;
  parent?: ParentDto;
  theme?: 'light' | 'dark';
  documents?: any[];
  access_token?: string | null;
  refresh_token?: string | null;
  token_error?: any;
  activeUserType?: string;
  userTypes?: any[];
  userTypeModal?: boolean;
  isLoggedIn?: boolean;
  isRefreshingToken?: boolean;
  onboarded?: boolean;
  currentOnboardingStep?: any;
  disableNext?: boolean;
  loginAttempts?: number;
  disableLogin?: boolean;
  disableLoginTime?: number;
  tabBarStyle?: {
    display: string;
  };
}

const INITIAL_STATE: IAppUserState = {
  currentUser: {
    linked_students: [],
  },
  parent: undefined,
  theme: 'light',
  tabBarStyle: { display: 'flex' },
  documents: [],
  access_token: null,
  refresh_token: null,
  token_error: null,
  activeUserType: '',
  userTypes: [],
  userTypeModal: false,
  isLoggedIn: false,
  isRefreshingToken: false,
  onboarded: false,
  currentOnboardingStep: {},
  disableNext: true,
  loginAttempts: 0,
  disableLogin: false,
  disableLoginTime: 0,
};
interface actionParams {
  type: userActionTypes;
  payload: any;
}

function userReducer(state: IAppUserState = INITIAL_STATE, { type, payload }: actionParams) {
  switch (type) {
    case userActionTypes.USER_LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case userActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: payload,
      };
    case userActionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
        isLoggedIn: false,
      };
    case userActionTypes.SET_CURRENT_ONBOARDING_STEP:
      return {
        ...state,
        currentOnboardingStep: payload,
      };
    case userActionTypes.SET_ONBOARDED:
      return {
        ...state,
        onboarded: payload,
      };
    case userActionTypes.SET_DISABLE_NEXT:
      return {
        ...state,
        disableNext: payload,
      };
    case userActionTypes.SET_GET_STARTED:
      return {
        ...state,
        getStarted: payload,
      };
    case userActionTypes.HANDLE_SHOW_WIZARD:
      return {
        ...state,
        showWizard: payload,
      };
    case userActionTypes.SET_FEES_ACTIVE_TAB:
      return {
        ...state,
        feesActiveTab: payload,
      };
    case userActionTypes.SET_EARLY_YEARS_ACTIVE_TAB:
      return {
        ...state,
        earlyYearsActiveTab: payload,
      };
    case userActionTypes.SET_SKILLS_ACTIVE_TAB:
      return {
        ...state,
        skillsActiveTab: payload,
      };
    case userActionTypes.SET_SESSIONS_ACTIVE_TAB:
      return {
        ...state,
        sessionsActiveTab: payload,
      };
    case userActionTypes.SET_RUN:
      return {
        ...state,
        run: payload,
      };
    case userActionTypes.HANDLE_FINISH_MODAL:
      return {
        ...state,
        finishModal: payload,
      };
    case userActionTypes.FETCH_CURRENT_USER_DETAILS_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case userActionTypes.FETCH_CURRENT_USER_DETAILS_SUCCESS:
      const cur_user = state.currentUser;
      const details = payload;
      return {
        ...state,
        isLoading: false,
        currentUser: { ...cur_user, ...details },
      };
    case userActionTypes.FETCH_CURRENT_USER_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case userActionTypes.FETCH_USER_DOCS_START:
      return {
        ...state,
        loading: true,
      };
    case userActionTypes.FETCH_USER_DOCS_SUCCESS:
      return {
        ...state,
        loading: false,
        documents: payload,
      };
    case userActionTypes.EDIT_CURRENT_USER_DETAILS:
      return {
        ...state,
        currentUser: { ...state.currentUser, ...payload },
      };
    case userActionTypes.SET_ACCESS_TOKEN:
      return {
        ...state,
        access_token: payload,
      };
    case userActionTypes.SET_REFRESH_TOKEN:
      return {
        ...state,
        refresh_token: payload,
      };
    case userActionTypes.SET_IS_REFRESHING_TOKEN:
      return {
        ...state,
        isRefreshingToken: payload,
      };
    case userActionTypes.SET_CURRENT_USER_DETAILS:
      return {
        ...state,
        currentUser: payload,
      };
    case userActionTypes.SET_ACTIVE_USER_TYPE:
      return {
        ...state,
        activeUserType: payload,
      };
    case userActionTypes.SET_USER_TYPES:
      return {
        ...state,
        userTypes: payload,
      };
    case userActionTypes.LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        userTypes: [],
        activeUserType: '',
        currentUser: {},
        access_token: null,
        refresh_token: null,
        userTypeModal: false,
        isRefreshingToken: false,
      };
    case userActionTypes.SWITCH_USER_TYPE:
      return {
        ...state,
        isLoggedIn: true,
        activeUserType: payload?.user_type,
        currentUser: payload,
      };
    case userActionTypes.HANDLE_USER_TYPE_MODAL:
      return {
        ...state,
        userTypeModal: payload,
        isLoading: false,
      };

    case userActionTypes.GOOGLE_AUTH_LOGIN_START:
      return {
        ...state,
      };
    case userActionTypes.GOOGLE_AUTH_LOGIN_SUCCESS:
      return {
        ...state,
      };
    case userActionTypes.GOOGLE_AUTH_LOGIN_FAILURE:
      return {
        ...state,
      };

    case userActionTypes.GET_USER_DETAILS_START:
      return {
        ...state,
        buttonLoading: true,
      };
    case userActionTypes.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        buttonLoading: false,
        userDetails: payload,
      };
    case userActionTypes.GET_USER_DETAILS_FAILURE:
      return {
        ...state,
        buttonLoading: false,
      };

    case userActionTypes.UPDATE_ONBOARDING_STEPS_START:
      return {
        ...state,
        isLoading: true,
      };
    case userActionTypes.UPDATE_ONBOARDING_STEPS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case userActionTypes.UPDATE_ONBOARDING_STEPS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case userActionTypes.SET_LOGIN_ATTEMPTS:
      return {
        ...state,
        loginAttempts: payload,
        disableLogin: payload === 5 ? true : false,
        disableLoginTime: payload === 5 ? new Date().getTime() : null,
      };
    case userActionTypes.SET_DISABLE_LOGIN:
      return {
        ...state,
        disableLogin: payload,
      };
    case userActionTypes.SET_DISABLE_LOGIN_TIME:
      return {
        ...state,
        disableLoginTime: payload,
      };
    case userActionTypes.UPDATE_APPUSER_STATE:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}

const persistConfig = {
  key: 'user',
  storage: AsyncStorage,
  blacklist: [
    'error',
    'isLoading',
    'loading',
    'tokenExpired',
    'resetPassword',
    'userTypeModal',
    'accountVerificationModalOpen',
  ],
};

export default persistReducer(persistConfig, userReducer);
