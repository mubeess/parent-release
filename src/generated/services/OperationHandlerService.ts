/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OperationHandlerService {

    /**
     * handle
     * @returns any OK
     * @throws ApiError
     */
    public static handleUsingGet({
        body,
    }: {
        /**
         * body
         */
        body?: Record<string, string>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/actuator/health',
            body: body,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * handle
     * @returns any OK
     * @throws ApiError
     */
    public static handleUsingGet1({
        body,
    }: {
        /**
         * body
         */
        body?: Record<string, string>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/actuator/health/**',
            body: body,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * handle
     * @returns any OK
     * @throws ApiError
     */
    public static handleUsingGet2({
        body,
    }: {
        /**
         * body
         */
        body?: Record<string, string>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/actuator/info',
            body: body,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
