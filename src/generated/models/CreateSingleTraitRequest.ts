/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateTraitDefinitionRequest } from './CreateTraitDefinitionRequest';

export type CreateSingleTraitRequest = {
    trait_definition_requests?: Array<CreateTraitDefinitionRequest>;
    trait_group_id: string;
    trait_name: string;
};

