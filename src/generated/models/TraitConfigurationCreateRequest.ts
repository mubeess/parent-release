/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateTraitRequest } from './CreateTraitRequest';

export type TraitConfigurationCreateRequest = {
  group_name: string;
  trait_requests?: Array<CreateTraitRequest>;
};
