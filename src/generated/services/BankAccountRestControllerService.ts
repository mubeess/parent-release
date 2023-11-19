/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankAccountDto } from '../models/BankAccountDto';
import type { CreateBankAccountRequest } from '../models/CreateBankAccountRequest';
import type { CreateBankAccountResponse } from '../models/CreateBankAccountResponse';
import type { CreateStripeBankAccountRequest } from '../models/CreateStripeBankAccountRequest';
import type { CreateSubaccountRequest } from '../models/CreateSubaccountRequest';
import type { SubaccountLiteDto } from '../models/SubaccountLiteDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BankAccountRestControllerService {

    /**
     * getBankAccounts
     * @returns BankAccountDto OK
     * @throws ApiError
     */
    public static getBankAccountsUsingGet(): CancelablePromise<Array<BankAccountDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bank-accounts',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createBankAccount
     * @returns CreateBankAccountResponse OK
     * @returns any Created
     * @throws ApiError
     */
    public static createBankAccountUsingPost({
        createSubAccountRequest,
        xTenantId,
    }: {
        /**
         * createSubAccountRequest
         */
        createSubAccountRequest: CreateBankAccountRequest,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<CreateBankAccountResponse | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bank-accounts',
            headers: {
                'X-TENANT-ID': xTenantId,
            },
            body: createSubAccountRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * setDefaultAccount
     * @returns any OK
     * @throws ApiError
     */
    public static setDefaultAccountUsingPost({
        accountId,
    }: {
        /**
         * account_id
         */
        accountId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bank-accounts/default-account/{account_id}',
            path: {
                'account_id': accountId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createStripeBankAccount
     * @returns any OK
     * @throws ApiError
     */
    public static createStripeBankAccountUsingPost({
        request,
        xTenantId,
    }: {
        /**
         * request
         */
        request: CreateStripeBankAccountRequest,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bank-accounts/stripe',
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

    /**
     * createSubaccount
     * @returns SubaccountLiteDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createSubaccountUsingPost({
        createSubaccountRequest,
        xTenantId,
    }: {
        /**
         * createSubaccountRequest
         */
        createSubaccountRequest: CreateSubaccountRequest,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<SubaccountLiteDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bank-accounts/sub-account',
            headers: {
                'X-TENANT-ID': xTenantId,
            },
            body: createSubaccountRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * validateBankAccount
     * @returns boolean OK
     * @throws ApiError
     */
    public static validateBankAccountUsingGet({
        accountNumber,
        bankCode,
    }: {
        /**
         * account-number
         */
        accountNumber: string,
        /**
         * bank-code
         */
        bankCode: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bank-accounts/validate',
            query: {
                'account-number': accountNumber,
                'bank-code': bankCode,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteAccount
     * @returns any OK
     * @throws ApiError
     */
    public static deleteAccountUsingDelete({
        accountId,
    }: {
        /**
         * account_id
         */
        accountId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/bank-accounts/{account_id}',
            path: {
                'account_id': accountId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
