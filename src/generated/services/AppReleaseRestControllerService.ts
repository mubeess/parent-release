/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AppReleaseRestControllerService {

    /**
     * getLatestRelease
     * @returns any OK
     * @throws ApiError
     */
    public static getLatestReleaseUsingGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/app-release/latest',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
