/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Assessment } from './Assessment';

export type AssessmentBreakdown = {
  assessment?: Assessment;
  assessment_breakdown_name: string;
  assessment_order: number;
  id: string;
  percentage: number;
};
