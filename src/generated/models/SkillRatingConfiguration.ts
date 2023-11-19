/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevelLiteDto } from './ClassLevelLiteDto';
import type { SkillRatingDefinitionDto } from './SkillRatingDefinitionDto';
import type { SkillRatingDto } from './SkillRatingDto';

export type SkillRatingConfiguration = {
    class_levels?: Array<ClassLevelLiteDto>;
    skill_rating?: SkillRatingDto;
    skill_rating_definitions?: Array<SkillRatingDefinitionDto>;
};

