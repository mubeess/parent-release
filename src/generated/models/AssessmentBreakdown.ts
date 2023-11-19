/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Assessment } from './Assessment';
import type { SubAssessmentBreakdown } from './SubAssessmentBreakdown';

export type AssessmentBreakdown = {
    assessment?: Assessment;
    assessment_breakdown_name: string;
    assessment_order: number;
    id: string;
    percentage: number;
    sub_assessment_breakdowns?: Array<SubAssessmentBreakdown>;
};

