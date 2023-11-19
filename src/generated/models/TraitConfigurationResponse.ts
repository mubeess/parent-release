/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevelLiteDto } from './ClassLevelLiteDto';
import type { TraitAndDefinitions } from './TraitAndDefinitions';
import type { TraitGroupDto } from './TraitGroupDto';

export type TraitConfigurationResponse = {
    class_levels?: Array<ClassLevelLiteDto>;
    trait_group?: TraitGroupDto;
    traits_and_definitions?: Array<TraitAndDefinitions>;
};

