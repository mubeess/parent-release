/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubjectTraitAssessmentScoreRequest } from './SubjectTraitAssessmentScoreRequest';

export type SubjectTraitAssessmentRequest = {
    comments: string;
    scores?: Array<SubjectTraitAssessmentScoreRequest>;
    student_id: string;
};

