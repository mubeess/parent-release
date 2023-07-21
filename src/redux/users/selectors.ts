import { createSelector } from 'reselect';

const selectUser = (state) => state.users;

export const selectCurrentUser = createSelector([selectUser], (users) => users.currentUser);

export const selectIsLoading = createSelector([selectUser], (users) => users.isLoading);

export const selectLoading = createSelector([selectUser], (users) => users.loading);

export const selectEditRequests = createSelector([selectUser], (users) => users.editRequests);

export const selectTotalEditRequests = createSelector(
  [selectUser],
  (users) => users.totalEditRequests,
);

export const selectWizard = createSelector([selectUser], (users) => users.wizard);

export const selectUserBio = createSelector([selectUser], (users) => users.userBio);

export const selectButtonLoading = createSelector([selectUser], (users) => users.buttonLoading);

export const selectSaveButtonLoading = createSelector(
  [selectUser],
  (users) => users.saveButtonLoading,
);

export const selectEdit = createSelector([selectUser], (users) => users.edit);

export const selectViewEditRequest = createSelector([selectUser], (users) => users.viewEditRequest);

export const selectUserDocuments = createSelector([selectUser], (users) => users.documents);

export const selectAccessToken = createSelector([selectUser], (users) => users.access_token);

export const selectUserTypes = createSelector([selectUser], (users) => users.userTypes);

export const selectActiveUserType = createSelector([selectUser], (users) => users.activeUserType);

export const selectUserTypeModal = createSelector([selectUser], (users) => users.userTypeModal);

export const selectIsLoggedIn = createSelector([selectUser], (users) => users.isLoggedIn);

export const selectResetPassword = createSelector([selectUser], (users) => users.resetPassword);

export const selectTokenExpired = createSelector([selectUser], (users) => users.tokenExpired);

export const selectCurrentStaffClassView = createSelector(
  [selectUser],
  (users) => users.currentStaffClassView,
);

export const selectCurrentStaffSubjects = createSelector(
  [selectUser],
  (users) => users.currentStaffSubjects,
);

export const selectActiveChildPayment = createSelector(
  [selectUser],
  (users) => users.activeChildPayment,
);

export const selectFormTeacherClasses = createSelector(
  [selectUser],
  (users) => users.currentStaffClasses,
);

export const selectView = createSelector([selectUser], (users) => users.view);

export const selectGetStarted = createSelector([selectUser], (users) => users.getStarted);

export const selectDoneSteps = createSelector([selectUser], (users) => users.doneSteps);

export const selectShowWizard = createSelector([selectUser], (users) => users.showWizard);

export const selectOnboarded = createSelector([selectUser], (users) => users.onboarded);

export const selectCurrentOnboardingStep = createSelector(
  [selectUser],
  (users) => users.currentOnboardingStep,
);

export const selectDisableNext = createSelector([selectUser], (users) => users.disableNext);

export const selectFeesActiveTab = createSelector([selectUser], (users) => users.feesActiveTab);

export const selectEarlyYearsActiveTab = createSelector(
  [selectUser],
  (users) => users.earlyYearsActiveTab,
);

export const selectSkillsActiveTab = createSelector([selectUser], (users) => users.skillsActiveTab);

export const selectSessionsActiveTab = createSelector(
  [selectUser],
  (users) => users.sessionsActiveTab,
);

export const selectFinishModal = createSelector([selectUser], (users) => users.finishModal);

export const selectRun = createSelector([selectUser], (users) => users.run);

export const selectError = createSelector([selectUser], (users) => users.error);

export const selectLoginAttempts = createSelector([selectUser], (users) => users.loginAttempts);

export const selectDisableLogin = createSelector([selectUser], (users) => users.disableLogin);

export const selectDisableLoginTime = createSelector(
  [selectUser],
  (users) => users.disableLoginTime,
);
