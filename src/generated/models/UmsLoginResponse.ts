/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type UmsLoginResponse = {
    access_token?: string;
    change_secret_on_login?: boolean;
    expires_in?: number;
    refresh_token?: string;
    token_type?: string;
    user?: User;
};

