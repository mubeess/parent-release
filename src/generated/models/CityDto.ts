/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CountryDto } from './CountryDto';
import type { StateDto } from './StateDto';

export type CityDto = {
    country?: CountryDto;
    id?: number;
    name?: string;
    state?: StateDto;
};

