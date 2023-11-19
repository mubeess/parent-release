/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubAssessmentBreakdownData } from './SubAssessmentBreakdownData';

export type SubAssessmentBreakdownRequest = {
    arm_id?: string;
    class_level_id?: string;
    sub_assessment_breakdown_data?: Array<SubAssessmentBreakdownData>;
    subject_id?: string;
    term_id?: string;
};

