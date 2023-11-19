/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssessmentFormatDto } from './AssessmentFormatDto';

export type AssessmentDto = {
    assessment_format?: AssessmentFormatDto;
    assessment_name?: string;
    assessment_order?: number;
    assessment_type?: 'CA' | 'EXAM';
    id?: string;
    percentage?: number;
};

