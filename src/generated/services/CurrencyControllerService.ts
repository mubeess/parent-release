/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CurrencyControllerService {

    /**
     * getCurrencies
     * @returns any OK
     * @throws ApiError
     */
    public static getCurrenciesUsingGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/currencies',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
