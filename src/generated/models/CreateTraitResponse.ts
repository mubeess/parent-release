/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TraitDefinitionDto } from './TraitDefinitionDto';
import type { TraitDto } from './TraitDto';

export type CreateTraitResponse = {
    trait?: TraitDto;
    trait_definitions?: Array<TraitDefinitionDto>;
};

