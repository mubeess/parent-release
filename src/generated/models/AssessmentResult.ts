/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssessmentAnalysis } from './AssessmentAnalysis';

export type AssessmentResult = {
    assessment_breakdowns?: Array<AssessmentAnalysis>;
    result?: AssessmentAnalysis;
};

