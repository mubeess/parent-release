/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CountryDto } from './CountryDto';
import type { StatePkDto } from './StatePkDto';

export type StateDto = {
    country?: CountryDto;
    state_name?: string;
    state_pk?: StatePkDto;
};

