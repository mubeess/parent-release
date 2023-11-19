/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SkillRatingDefinitionDto } from './SkillRatingDefinitionDto';
import type { SubjectTraitLiteDto } from './SubjectTraitLiteDto';

export type ClassLevelSubjectTraitsResponse = {
    skill_rating_definitions?: Array<SkillRatingDefinitionDto>;
    subject_traits?: Array<SubjectTraitLiteDto>;
};

