import { IAppUserState } from './reducer';
import userActionTypes from './types';

export const userLoginStart = (data) => ({
  type: userActionTypes.USER_LOGIN_START,
  payload: data,
});

export const userLoginFailure = (error) => ({
  type: userActionTypes.USER_LOGIN_FAILURE,
  payload: error,
});

export const userLoginSuccess = (user) => ({
  type: userActionTypes.USER_LOGIN_SUCCESS,
  payload: user,
});

export const userDetailsFetchStart = (link) => ({
  type: userActionTypes.FETCH_CURRENT_USER_DETAILS_START,
  payload: link,
});

export const userDetailsFetchSuccess = (payload) => ({
  type: userActionTypes.FETCH_CURRENT_USER_DETAILS_SUCCESS,
  payload,
});

export const userDetailsFetchFailure = (error) => ({
  type: userActionTypes.FETCH_CURRENT_USER_DETAILS_FAILURE,
  payload: error,
});

export const createProfileEditRequest = (payload) => ({
  type: userActionTypes.CREATE_EDIT_REQUEST_START,
  payload,
});

export const createProfileEditSuccess = (payload) => ({
  type: userActionTypes.CREATE_EDIT_REQUEST_SUCCESS,
  payload,
});

export const createProfileEditFailure = (payload) => ({
  type: userActionTypes.CREATE_EDIT_REQUEST_FAILURE,
  payload,
});

export const fetchStaffEditRequestsStart = (data) => ({
  type: userActionTypes.FETCH_STAFF_EDIT_REQUESTS_START,
  payload: data,
});

export const fetchStaffEditRequestsSuccess = (data) => ({
  type: userActionTypes.FETCH_STAFF_EDIT_REQUESTS_SUCCESS,
  payload: data,
});

export const fetchStaffEditRequestsFailure = (data) => ({
  type: userActionTypes.FETCH_STAFF_EDIT_REQUESTS_FAILURE,
  payload: data,
});

export const openWizardActionUser = (wizard) => ({
  type: userActionTypes.OPEN_WIZARD_USER,
  payload: wizard,
});

export const resetEverythingActionUser = () => ({
  type: userActionTypes.RESET_EVERYTHING_USER,
  payload: {},
});

export const handleViewEditRequest = (payload) => ({
  type: userActionTypes.VIEW_EDIT_REQUEST_ACTION,
  payload,
});

export const fetchUserDocsStart = (id, link) => ({
  type: userActionTypes.FETCH_USER_DOCS_START,
  payload: { id, link },
});

export const fetchUserDocsSuccess = (data) => ({
  type: userActionTypes.FETCH_USER_DOCS_SUCCESS,
  payload: data,
});

export const fetchUserDocsFail = (data) => ({
  type: userActionTypes.FETCH_USER_DOCS_FAIL,
  payload: data,
});

export const downloadUserDocStart = (document_name, data) => ({
  type: userActionTypes.DOWNLOAD_USER_DOCS_START,
  payload: { document_name, data },
});

export const downloadUserDocSuccess = (data) => ({
  type: userActionTypes.DOWNLOAD_USER_DOCS_SUCCESS,
  payload: data,
});

export const downloadUserDocFail = (error) => ({
  type: userActionTypes.DOWNLOAD_USER_DOCS_FAIL,
  payload: error,
});

export const editCurrentUserDetails = (data) => ({
  type: userActionTypes.EDIT_CURRENT_USER_DETAILS,
  payload: data,
});

export const setAccessToken = (data) => ({
  type: userActionTypes.SET_ACCESS_TOKEN,
  payload: data,
});

export const setRefreshToken = (data) => ({
  type: userActionTypes.SET_REFRESH_TOKEN,
  payload: data,
});

export const setCurrentUserDetails = (data) => ({
  type: userActionTypes.SET_CURRENT_USER_DETAILS,
  payload: data,
});

export const setActiveUserType = (data) => ({
  type: userActionTypes.SET_ACTIVE_USER_TYPE,
  payload: data,
});

export const setUserTypes = (data) => ({
  type: userActionTypes.SET_USER_TYPES,
  payload: data,
});

export const logoutUser = () => ({
  type: userActionTypes.LOGOUT_USER,
});

export const switchUserType = (data) => ({
  type: userActionTypes.SWITCH_USER_TYPE,
  payload: data,
});

export const setIsRefreshingToken = (data) => ({
  type: userActionTypes.SET_IS_REFRESHING_TOKEN,
  payload: data,
});

export const handleUserTypeModal = (data) => ({
  type: userActionTypes.HANDLE_USER_TYPE_MODAL,
  payload: data,
});

export const resetPasswordStart = (data) => ({
  type: userActionTypes.RESET_SET_PASSWORD_START,
  data,
});

export const resetPasswordSuccess = (data) => ({
  type: userActionTypes.RESET_SET_PASSWORD_SUCCESS,
  payload: data,
});

export const resetPasswordFailure = (error) => ({
  type: userActionTypes.RESET_SET_PASSWORD_FAILURE,
  payload: error,
});

export const googleAuthLoginStart = (callback_url) => ({
  type: userActionTypes.GOOGLE_AUTH_LOGIN_START,
  callback_url,
});

export const googleAuthLoginSuccess = (data) => ({
  type: userActionTypes.GOOGLE_AUTH_LOGIN_SUCCESS,
  payload: data,
});

export const googleAuthLoginFailure = (error) => ({
  type: userActionTypes.GOOGLE_AUTH_LOGIN_FAILURE,
  payload: error,
});

export const getUserDetailsStart = (data) => ({
  type: userActionTypes.GET_USER_DETAILS_START,
  data,
});

export const getUserDetailsSuccess = (data) => ({
  type: userActionTypes.GET_USER_DETAILS_SUCCESS,
  payload: data,
});

export const getUserDetailsFailure = (error) => ({
  type: userActionTypes.GET_USER_DETAILS_FAILURE,
  payload: error,
});

export const changeUsernameStart = (data, callback) => ({
  type: userActionTypes.CHANGE_USERNAME_START,
  data,
  callback,
});

export const changeUsernameSuccess = (data) => ({
  type: userActionTypes.CHANGE_USERNAME_SUCCESS,
  payload: data,
});

export const changeUsernameFailure = (error) => ({
  type: userActionTypes.CHANGE_USERNAME_FAILURE,
  payload: error,
});

export const sendOTPStart = (data, callback) => ({
  type: userActionTypes.SEND_OTP_START,
  data,
  callback,
});

export const sendOTPSuccess = (data) => ({
  type: userActionTypes.SEND_OTP_SUCCESS,
  payload: data,
});

export const sendOTPFailure = (error) => ({
  type: userActionTypes.SEND_OTP_FAILURE,
  payload: error,
});

export const verifyNewEmailStart = (data, callback, callback2) => ({
  type: userActionTypes.VERIFY_NEW_EMAIL_START,
  data,
  callback,
  callback2,
});

export const verifyNewEmailSuccess = (data) => ({
  type: userActionTypes.VERIFY_NEW_EMAIL_SUCCESS,
  payload: data,
});

export const verifyNewEmailFailure = (error) => ({
  type: userActionTypes.VERIFY_NEW_EMAIL_FAILURE,
  payload: error,
});

export const setCurrentStaffSubjects = (data) => ({
  type: userActionTypes.SET_CURRENT_STAFF_SUBJECTS,
  payload: data,
});

export const setCurrentStaffItems = (data) => ({
  type: userActionTypes.SET_CURRENT_STAFF_ITEMS,
  payload: data,
});

export const setActiveChildPayment = (data) => ({
  type: userActionTypes.SET_ACTIVE_CHILD_PAYMENT,
  payload: data,
});

export const setCurrentOnboardingStep = (data) => ({
  type: userActionTypes.SET_CURRENT_ONBOARDING_STEP,
  payload: data,
});

export const setOnboarded = (data) => ({
  type: userActionTypes.SET_ONBOARDED,
  payload: data,
});

export const setGetStarted = (data) => ({
  type: userActionTypes.SET_GET_STARTED,
  payload: data,
});

export const setDisableNext = (data) => ({
  type: userActionTypes.SET_DISABLE_NEXT,
  payload: data,
});

export const handleFinishModal = (data) => ({
  type: userActionTypes.HANDLE_FINISH_MODAL,
  payload: data,
});

export const setFeesActiveTab = (data) => ({
  type: userActionTypes.SET_FEES_ACTIVE_TAB,
  payload: data,
});

export const setEarlyYearsActiveTab = (data) => ({
  type: userActionTypes.SET_EARLY_YEARS_ACTIVE_TAB,
  payload: data,
});

export const setSkillssActiveTab = (data) => ({
  type: userActionTypes.SET_SKILLS_ACTIVE_TAB,
  payload: data,
});

export const setSessionsActiveTab = (data) => ({
  type: userActionTypes.SET_SESSIONS_ACTIVE_TAB,
  payload: data,
});

export const handleShowWizard = (data) => ({
  type: userActionTypes.HANDLE_SHOW_WIZARD,
  payload: data,
});

export const SetRun = (data) => ({
  type: userActionTypes.SET_RUN,
  payload: data,
});

export const updateOnboardingStepsStart = (data) => ({
  type: userActionTypes.UPDATE_ONBOARDING_STEPS_START,
  payload: data,
});

export const updateOnboardingStepsSuccess = (data) => ({
  type: userActionTypes.UPDATE_ONBOARDING_STEPS_SUCCESS,
  payload: data,
});

export const updateOnboardingStepsFailure = (error) => ({
  type: userActionTypes.UPDATE_ONBOARDING_STEPS_FAILURE,
  payload: error,
});

export const setLoginAttempts = (data) => ({
  type: userActionTypes.SET_LOGIN_ATTEMPTS,
  payload: data,
});

export const SetDisableLogin = (data) => ({
  type: userActionTypes.SET_DISABLE_LOGIN,
  payload: data,
});

export const SetDisableLoginTime = (data) => ({
  type: userActionTypes.SET_DISABLE_LOGIN_TIME,
  payload: data,
});

export const updateAppUserState = (payload: IAppUserState) => ({
  type: userActionTypes.UPDATE_APPUSER_STATE,
  payload,
});
