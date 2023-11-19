/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CityDto } from '../models/CityDto';
import type { CountryDto } from '../models/CountryDto';
import type { StateDto } from '../models/StateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GeolocationRestControllerService {

    /**
     * getCity
     * @returns CityDto OK
     * @throws ApiError
     */
    public static getCityUsingGet({
        cityId,
        countryCode,
        stateId,
    }: {
        /**
         * cityId
         */
        cityId: number,
        /**
         * countryCode
         */
        countryCode: string,
        /**
         * stateId
         */
        stateId: string,
    }): CancelablePromise<CityDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/geolocation',
            query: {
                'cityId': cityId,
                'countryCode': countryCode,
                'stateId': stateId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCountries
     * @returns CountryDto OK
     * @throws ApiError
     */
    public static getCountriesUsingGet(): CancelablePromise<Array<CountryDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/geolocation/countries',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCitiesByCountry
     * @returns CityDto OK
     * @throws ApiError
     */
    public static getCitiesByCountryUsingGet({
        countryCode,
    }: {
        /**
         * countryCode
         */
        countryCode: string,
    }): CancelablePromise<Array<CityDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/geolocation/{countryCode}/cities',
            path: {
                'countryCode': countryCode,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCountryStates
     * @returns StateDto OK
     * @throws ApiError
     */
    public static getCountryStatesUsingGet({
        countryCode,
    }: {
        /**
         * countryCode
         */
        countryCode: string,
    }): CancelablePromise<Array<StateDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/geolocation/{countryCode}/states',
            path: {
                'countryCode': countryCode,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCitiesByCountryState
     * @returns CityDto OK
     * @throws ApiError
     */
    public static getCitiesByCountryStateUsingGet({
        countryCode,
        stateId,
    }: {
        /**
         * countryCode
         */
        countryCode: string,
        /**
         * stateId
         */
        stateId: string,
    }): CancelablePromise<Array<CityDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/geolocation/{countryCode}/states/{stateId}/cities',
            path: {
                'countryCode': countryCode,
                'stateId': stateId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
