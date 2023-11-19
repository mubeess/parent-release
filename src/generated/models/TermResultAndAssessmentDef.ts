/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupAssessmentDefinition } from './GroupAssessmentDefinition';
import type { StudentTermResultDto } from './StudentTermResultDto';

export type TermResultAndAssessmentDef = {
    group_assessment_definition?: GroupAssessmentDefinition;
    term_result?: StudentTermResultDto;
};

