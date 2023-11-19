/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminChangeUserEmailRequest } from '../models/AdminChangeUserEmailRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AdminRestControllerService {

    /**
     * changeUserEmail
     * @returns any OK
     * @throws ApiError
     */
    public static changeUserEmailUsingPost({
        adminChangeUserEmailRequest,
        xTenantId,
    }: {
        /**
         * adminChangeUserEmailRequest
         */
        adminChangeUserEmailRequest: AdminChangeUserEmailRequest,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/change-user-email',
            headers: {
                'X-TENANT-ID': xTenantId,
            },
            body: adminChangeUserEmailRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * sendVerificationLinkBulk
     * @returns any OK
     * @throws ApiError
     */
    public static sendVerificationLinkBulkUsingPost({
        userType,
    }: {
        /**
         * userType
         */
        userType: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/verify/bulk/{userType}',
            path: {
                'userType': userType,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
