/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssessmentAnalysis } from './AssessmentAnalysis';
import type { AssessmentResult } from './AssessmentResult';

export type SubjectResult = {
    abbreviation?: string;
    alias?: string;
    assessment_results?: Array<AssessmentResult>;
    result?: AssessmentAnalysis;
    subject_code?: string;
    subject_comment?: string;
    subject_id?: string;
    subject_name?: string;
};

