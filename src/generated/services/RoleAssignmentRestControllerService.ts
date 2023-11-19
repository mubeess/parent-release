/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SchoolRoleDto } from '../models/SchoolRoleDto';
import type { SchoolRoleRequest } from '../models/SchoolRoleRequest';
import type { StaffRoleDto } from '../models/StaffRoleDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RoleAssignmentRestControllerService {

    /**
     * getAllSchoolRoles
     * @returns any OK
     * @throws ApiError
     */
    public static getAllSchoolRolesUsingGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/roles',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createSchoolRole
     * @returns SchoolRoleDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createSchoolRoleUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: SchoolRoleRequest,
    }): CancelablePromise<SchoolRoleDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/roles',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getStaffAssignedRoles
     * @returns StaffRoleDto OK
     * @throws ApiError
     */
    public static getStaffAssignedRolesUsingGet({
        staffId,
    }: {
        /**
         * staff-id
         */
        staffId: string,
    }): CancelablePromise<Array<StaffRoleDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/roles/staff-roles/{staff-id}',
            path: {
                'staff-id': staffId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * assignRoleToStaff
     * @returns StaffRoleDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static assignRoleToStaffUsingPost({
        request,
        staffId,
    }: {
        /**
         * request
         */
        request: SchoolRoleRequest,
        /**
         * staff-id
         */
        staffId: string,
    }): CancelablePromise<StaffRoleDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/roles/staff-roles/{staff-id}',
            path: {
                'staff-id': staffId,
            },
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * unassignRoleFromStaff
     * @returns any OK
     * @throws ApiError
     */
    public static unassignRoleFromStaffUsingDelete({
        roleId,
        staffId,
    }: {
        /**
         * role-id
         */
        roleId: number,
        /**
         * staff-id
         */
        staffId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/roles/staff-roles/{staff-id}/{role-id}',
            path: {
                'role-id': roleId,
                'staff-id': staffId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
