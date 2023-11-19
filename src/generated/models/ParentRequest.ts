/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CityDto } from './CityDto';
import type { CountryDto } from './CountryDto';
import type { CreateStudentRelationshipRequest } from './CreateStudentRelationshipRequest';
import type { LgaDto } from './LgaDto';
import type { StateDto } from './StateDto';

export type ParentRequest = {
    active_status?: 'ACTIVE' | 'INACTIVE';
    city?: CityDto;
    country?: CountryDto;
    email?: string;
    first_name?: string;
    gender?: 'FEMALE' | 'MALE';
    home_address?: string;
    lga?: LgaDto;
    occupation?: string;
    other_names?: string;
    parent_id?: string;
    phone?: string;
    state?: StateDto;
    student_link?: Array<CreateStudentRelationshipRequest>;
    surname?: string;
};

