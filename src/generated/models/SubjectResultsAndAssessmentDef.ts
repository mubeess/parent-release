/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupAssessmentDefinition } from './GroupAssessmentDefinition';
import type { StudentSubjectResultDto } from './StudentSubjectResultDto';

export type SubjectResultsAndAssessmentDef = {
    group_assessment_definition?: GroupAssessmentDefinition;
    subject_results?: Array<StudentSubjectResultDto>;
};

