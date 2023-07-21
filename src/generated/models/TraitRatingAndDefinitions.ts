/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TraitRatingDefinitionDto } from './TraitRatingDefinitionDto';
import type { TraitRatingDto } from './TraitRatingDto';

export type TraitRatingAndDefinitions = {
  trait_rating?: TraitRatingDto;
  trait_rating_definitions?: Array<TraitRatingDefinitionDto>;
};
