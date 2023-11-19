/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubjectTraitSkillRatingDefinitionDto } from './SubjectTraitSkillRatingDefinitionDto';

export type SubjectTraitAssessmentResponse = {
    comments?: string;
    scores?: Array<SubjectTraitSkillRatingDefinitionDto>;
    student_id?: string;
};

