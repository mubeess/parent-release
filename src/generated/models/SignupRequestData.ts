/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Country } from './Country';
import type { State } from './State';

export type SignupRequestData = {
    country?: Country;
    currency?: 'EUR' | 'GBP' | 'GHC' | 'KES' | 'NGN' | 'USD';
    email_address: string;
    first_name: string;
    gender: 'FEMALE' | 'MALE';
    last_name: string;
    module_types?: Array<'ACADEMICS' | 'FEES_MANAGEMENT'>;
    password: string;
    phone?: string;
    role_in_school: string;
    school_name: string;
    school_website?: string;
    short_name: string;
    staff_range?: string;
    state?: State;
    student_range?: string;
    url_prefix: string;
};

