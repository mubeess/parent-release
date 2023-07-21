/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupAssessmentDefinition } from './GroupAssessmentDefinition';
import type { StudentCumulativeResultDto } from './StudentCumulativeResultDto';
import type { TermResultAndAssessmentDef } from './TermResultAndAssessmentDef';

export type CumulativeResultAndAssessmentDef = {
  cumulative_result?: StudentCumulativeResultDto;
  group_assessment_definition?: GroupAssessmentDefinition;
  term_results?: Array<TermResultAndAssessmentDef>;
};
