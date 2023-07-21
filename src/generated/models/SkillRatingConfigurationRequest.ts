/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SkillRatingDefinitionDto } from './SkillRatingDefinitionDto';
import type { SkillRatingDto } from './SkillRatingDto';

export type SkillRatingConfigurationRequest = {
  skill_rating: SkillRatingDto;
  skill_rating_definitions?: Array<SkillRatingDefinitionDto>;
};
