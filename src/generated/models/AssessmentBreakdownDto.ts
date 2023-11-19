/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubAssessmentBreakdownDto } from './SubAssessmentBreakdownDto';

export type AssessmentBreakdownDto = {
    assessment_breakdown_name?: string;
    assessment_id?: string;
    assessment_order?: number;
    id?: string;
    percentage?: number;
    sub_assessment_breakdown_dtos?: Array<SubAssessmentBreakdownDto>;
};

