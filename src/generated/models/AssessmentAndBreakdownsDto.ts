/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssessmentBreakdownDto } from './AssessmentBreakdownDto';
import type { AssessmentDto } from './AssessmentDto';

export type AssessmentAndBreakdownsDto = {
  assessment?: AssessmentDto;
  breakdowns?: Array<AssessmentBreakdownDto>;
};
