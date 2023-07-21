/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssessmentAndBreakdownsDto } from './AssessmentAndBreakdownsDto';
import type { AssessmentFormatDto } from './AssessmentFormatDto';

export type AssessmentConfigurationDto = {
  assessment_format?: AssessmentFormatDto;
  assessments_and_breakdowns?: Array<AssessmentAndBreakdownsDto>;
};
