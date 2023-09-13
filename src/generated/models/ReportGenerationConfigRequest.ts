/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TermAssessmentConfiguration } from './TermAssessmentConfiguration';

export type ReportGenerationConfigRequest = {
  active?: boolean;
  assessment_configurations?: Array<TermAssessmentConfiguration>;
  class_level_id: string;
  config_name: string;
  grade_group_id?: string;
  report_template: string;
  term_id: string;
};
