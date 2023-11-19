/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountryDto } from '../models/CountryDto';
import type { StateDto } from '../models/StateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CountryRestControllerService {

    /**
     * getAllCountries
     * @returns CountryDto OK
     * @throws ApiError
     */
    public static getAllCountriesUsingGet(): CancelablePromise<Array<CountryDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/countries',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCountry
     * @returns CountryDto OK
     * @throws ApiError
     */
    public static getCountryUsingGet({
        countryCode,
    }: {
        /**
         * country-code
         */
        countryCode: string,
    }): CancelablePromise<CountryDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/countries/{country-code}',
            path: {
                'country-code': countryCode,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getStatesByCountry
     * @returns StateDto OK
     * @throws ApiError
     */
    public static getStatesByCountryUsingGet({
        countryCode,
    }: {
        /**
         * country-code
         */
        countryCode: string,
    }): CancelablePromise<Array<StateDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/countries/{country-code}/states',
            path: {
                'country-code': countryCode,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
