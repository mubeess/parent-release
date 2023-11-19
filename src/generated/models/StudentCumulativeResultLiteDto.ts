/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssessmentAnalysis } from './AssessmentAnalysis';
import type { Student_ } from './Student_';
import type { SubjectResultLiteDto } from './SubjectResultLiteDto';

export type StudentCumulativeResultLiteDto = {
    end_of_term_comments?: Record<string, string>;
    result?: AssessmentAnalysis;
    result_approved?: boolean;
    student?: Student_;
    subject_results?: Array<SubjectResultLiteDto>;
};

