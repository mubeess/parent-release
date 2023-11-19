/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PesapalKeysDto } from '../models/PesapalKeysDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PesapalRestControllerService {

    /**
     * getPesapalKeys
     * @returns PesapalKeysDto OK
     * @throws ApiError
     */
    public static getPesapalKeysUsingGet({
        xTenantId,
    }: {
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<PesapalKeysDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pesapal/credentials',
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
     * createPesapalKeys
     * @returns any OK
     * @throws ApiError
     */
    public static createPesapalKeysUsingPost({
        dto,
        xTenantId,
    }: {
        /**
         * dto
         */
        dto: PesapalKeysDto,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/pesapal/credentials',
            headers: {
                'X-TENANT-ID': xTenantId,
            },
            body: dto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateTransactionStatus
     * @returns any OK
     * @throws ApiError
     */
    public static updateTransactionStatusUsingGet({
        merchantReference,
        orderTrackingId,
    }: {
        /**
         * MerchantReference
         */
        merchantReference: string,
        /**
         * OrderTrackingId
         */
        orderTrackingId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pesapal/webhook',
            query: {
                'MerchantReference': merchantReference,
                'OrderTrackingId': orderTrackingId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
