/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { City } from './City';
import type { Country } from './Country';
import type { EvaluatorRole } from './EvaluatorRole';
import type { Lga } from './Lga';
import type { State } from './State';

export type Staff = {
    active_status: 'ACTIVE' | 'INACTIVE';
    city?: City;
    country?: Country;
    custom_id?: string;
    date_created?: string;
    deleted: boolean;
    dob?: string;
    email: string;
    evaluator_role?: EvaluatorRole;
    first_name: string;
    full_name?: string;
    gender: 'FEMALE' | 'MALE';
    home_address?: string;
    id: string;
    last_modified?: string;
    lga?: Lga;
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
    staff_id: string;
    staff_type: 'ACADEMIC' | 'NON_ACADEMIC';
    state?: State;
    surname: string;
    user_id?: string;
    user_type?: 'PARENT' | 'STAFF' | 'STUDENT';
};

