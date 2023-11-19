/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SkillRatingDto } from './SkillRatingDto';
import type { SubjectTraitLiteDto } from './SubjectTraitLiteDto';

export type SubjectTraitSkillRatingDefinitionDto = {
    color?: string;
    id?: string;
    rating?: string;
    rating_order?: number;
    remark?: string;
    skill_rating?: SkillRatingDto;
    subject_trait?: SubjectTraitLiteDto;
};

