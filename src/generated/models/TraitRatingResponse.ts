/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevelLiteDto } from './ClassLevelLiteDto';
import type { TraitRatingDefinitionDto } from './TraitRatingDefinitionDto';
import type { TraitRatingDto } from './TraitRatingDto';

export type TraitRatingResponse = {
  class_levels?: Array<ClassLevelLiteDto>;
  trait_rating?: TraitRatingDto;
  trait_rating_definitions?: Array<TraitRatingDefinitionDto>;
};
