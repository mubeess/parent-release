/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssessmentAnalysis } from './AssessmentAnalysis';
import type { AssessmentResult } from './AssessmentResult';
import type { SubjectGroup } from './SubjectGroup';

export type SubjectGroupResult = {
    group_assessment_results?: Array<AssessmentResult>;
    result?: AssessmentAnalysis;
    subject_comment?: string;
    subject_group?: SubjectGroup;
};

