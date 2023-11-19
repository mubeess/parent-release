/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CityDto } from './CityDto';
import type { CountryDto } from './CountryDto';
import type { LgaDto } from './LgaDto';
import type { StateDto } from './StateDto';

export type StaffDto = {
    active_status?: 'ACTIVE' | 'INACTIVE';
    city?: CityDto;
    country?: CountryDto;
    date_created?: string;
    deleted?: boolean;
    dob?: string;
    email?: string;
    first_name?: string;
    gender?: 'FEMALE' | 'MALE';
    home_address?: string;
    id?: string;
    last_modified?: string;
    lga?: LgaDto;
    marital_status?: 'MARRIED' | 'SINGLE';
    nok_address?: string;
    nok_email?: string;
    nok_first_name?: string;
    nok_other_names?: string;
    nok_phone?: string;
    nok_relationship?: string;
    nok_surname?: string;
    other_names?: string;
    phone?: string;
    profile_pic?: string;
    signature?: string;
    staff_id?: string;
    staff_type?: 'ACADEMIC' | 'NON_ACADEMIC';
    staff_ums_id?: string;
    state?: StateDto;
    status?: 'ACTIVE' | 'INACTIVE';
    surname?: string;
};

