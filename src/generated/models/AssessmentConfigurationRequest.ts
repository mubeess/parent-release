/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssessmentAndBreakdownRequest } from './AssessmentAndBreakdownRequest';

export type AssessmentConfigurationRequest = {
  assessment_format_name: string;
  assessments_and_breakdowns?: Array<AssessmentAndBreakdownRequest>;
};
