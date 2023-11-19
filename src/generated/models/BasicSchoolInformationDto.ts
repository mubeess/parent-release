/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Country } from './Country';
import type { State } from './State';

export type BasicSchoolInformationDto = {
    address?: string;
    color?: string;
    country?: Country;
    currency?: 'EUR' | 'GBP' | 'GHC' | 'KES' | 'NGN' | 'USD';
    email?: string;
    logo?: string;
    motto?: string;
    on_subscription_plan?: boolean;
    owner?: string;
    phone_number?: string;
    principal_signature?: string;
    school_id?: string;
    school_name?: string;
    school_type?: 'PRIVATE' | 'PUBLIC';
    school_url?: string;
    short_name?: string;
    state?: State;
    support_email?: string;
    support_phone_number?: string;
    uses_grading_evaluation?: boolean;
    uses_subject_traits?: boolean;
    website?: string;
};

