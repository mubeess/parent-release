/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UmsPrivilegeResponse } from './UmsPrivilegeResponse';

export type UmsRoleResponse = {
    description?: string;
    id?: string;
    name?: string;
    privileges?: Array<UmsPrivilegeResponse>;
};

