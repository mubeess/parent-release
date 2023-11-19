/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AssessmentRequest = {
    assessment_name: string;
    assessment_order?: number;
    assessment_type: 'CA' | 'EXAM';
    id?: string;
    percentage?: number;
};

