/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssessmentBreakdownRequest } from './AssessmentBreakdownRequest';
import type { AssessmentRequest } from './AssessmentRequest';

export type AssessmentAndBreakdownRequest = {
    assessment: AssessmentRequest;
    breakdowns?: Array<AssessmentBreakdownRequest>;
};

