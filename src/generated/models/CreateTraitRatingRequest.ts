/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TraitRatingDefinitionRequest } from './TraitRatingDefinitionRequest';

export type CreateTraitRatingRequest = {
  rating_definitions?: Array<TraitRatingDefinitionRequest>;
  rating_name: string;
};
