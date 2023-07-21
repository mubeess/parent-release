/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateTraitDefinitionRequest } from './CreateTraitDefinitionRequest';

export type CreateTraitRequest = {
  trait_definition_requests?: Array<CreateTraitDefinitionRequest>;
  trait_name: string;
};
