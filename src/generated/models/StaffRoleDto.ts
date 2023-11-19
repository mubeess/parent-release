/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SchoolRoleDto } from './SchoolRoleDto';
import type { StaffDto } from './StaffDto';
import type { StaffRolePkDto } from './StaffRolePkDto';

export type StaffRoleDto = {
    date_assigned?: string;
    school_role?: SchoolRoleDto;
    staff?: StaffDto;
    staff_role_pk?: StaffRolePkDto;
};

