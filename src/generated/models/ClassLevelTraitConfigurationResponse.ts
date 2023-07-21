/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TraitAndDefinitions } from './TraitAndDefinitions';
import type { TraitRatingAndDefinitions } from './TraitRatingAndDefinitions';

export type ClassLevelTraitConfigurationResponse = {
  trait_and_definitions?: Array<TraitAndDefinitions>;
  trait_rating_and_definitions?: TraitRatingAndDefinitions;
};
