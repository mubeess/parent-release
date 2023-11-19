/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Contact } from './Contact';
import type { UserRole } from './UserRole';

export type User = {
    blocked?: boolean;
    contacts?: Array<Contact>;
    created_at?: string;
    first_name?: string;
    id?: string;
    last_ip?: string;
    last_name?: string;
    organisation?: string;
    product?: string;
    roles?: Array<UserRole>;
    secret?: string;
    secret_change_on_login?: boolean;
    username?: string;
    verified?: boolean;
};

