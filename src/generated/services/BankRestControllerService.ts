/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankDto } from '../models/BankDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BankRestControllerService {

    /**
     * getAllBanks
     * @returns BankDto OK
     * @throws ApiError
     */
    public static getAllBanksUsingGet(): CancelablePromise<Array<BankDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/banks',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getBankByCode
     * @returns BankDto OK
     * @throws ApiError
     */
    public static getBankByCodeUsingGet({
        bankCode,
    }: {
        /**
         * bankCode
         */
        bankCode: string,
    }): CancelablePromise<BankDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/banks/{bankCode}',
            path: {
                'bankCode': bankCode,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
