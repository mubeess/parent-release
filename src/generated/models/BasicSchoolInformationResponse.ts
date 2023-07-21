/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BasicSchoolInformationDto } from './BasicSchoolInformationDto';
import type { OnboardingStepDto } from './OnboardingStepDto';
import type { SchoolAppModuleResponse } from './SchoolAppModuleResponse';

export type BasicSchoolInformationResponse = {
  basic_school_information_dto?: BasicSchoolInformationDto;
  onboarding_steps?: Array<OnboardingStepDto>;
  school_app_module_response?: SchoolAppModuleResponse;
};
