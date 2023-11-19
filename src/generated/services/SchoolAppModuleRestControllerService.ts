/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SchoolAppModuleRequest } from '../models/SchoolAppModuleRequest';
import type { SchoolAppModuleResponse } from '../models/SchoolAppModuleResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SchoolAppModuleRestControllerService {

    /**
     * getAppModules
     * @returns SchoolAppModuleResponse OK
     * @throws ApiError
     */
    public static getAppModulesUsingGet({
        xTenantId,
    }: {
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<SchoolAppModuleResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/app-module',
            headers: {
                'X-TENANT-ID': xTenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateSchoolAppModules
     * @returns SchoolAppModuleResponse OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateSchoolAppModulesUsingPut({
        request,
        xTenantId,
    }: {
        /**
         * request
         */
        request: SchoolAppModuleRequest,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<SchoolAppModuleResponse | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/app-module',
            headers: {
                'X-TENANT-ID': xTenantId,
            },
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
