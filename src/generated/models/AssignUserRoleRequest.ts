/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UmsRoleRequest } from './UmsRoleRequest';

export type AssignUserRoleRequest = {
    roles: Array<UmsRoleRequest>;
    user_id: string;
};

