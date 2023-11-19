/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CityDto } from './CityDto';
import type { CountryDto } from './CountryDto';
import type { LgaDto } from './LgaDto';
import type { StateDto } from './StateDto';
import type { StudentRelationshipDto } from './StudentRelationshipDto';

export type ParentDto = {
    active_status?: 'ACTIVE' | 'INACTIVE';
    city?: CityDto;
    country?: CountryDto;
    dob?: string;
    email?: string;
    first_name?: string;
    gender?: 'FEMALE' | 'MALE';
    home_address?: string;
    lga?: LgaDto;
    linked_students?: Array<StudentRelationshipDto>;
    occupation?: string;
    other_names?: string;
    parent_id?: string;
    parent_ums_id?: string;
    phone?: string;
    profile_pic?: string;
    state?: StateDto;
    surname?: string;
};

