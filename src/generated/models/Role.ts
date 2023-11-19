/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Privilege } from './Privilege';

export type Role = {
    date_created?: string;
    description?: string;
    id?: string;
    name?: string;
    privileges?: Array<Privilege>;
    user_count?: number;
};

