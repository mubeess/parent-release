/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TraitAssessmentRequest } from './TraitAssessmentRequest';

export type CreateStudentTraitAssessmentsRequest = {
    student_id: string;
    term_id: string;
    trait_assessment_requests?: Array<TraitAssessmentRequest>;
};

