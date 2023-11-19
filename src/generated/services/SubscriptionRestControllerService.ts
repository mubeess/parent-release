/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeSubscriptionPlanRequest } from '../models/ChangeSubscriptionPlanRequest';
import type { CreateSubscriptionRequest } from '../models/CreateSubscriptionRequest';
import type { InitiatePaymentResponse } from '../models/InitiatePaymentResponse';
import type { MakePaymentRequest } from '../models/MakePaymentRequest';
import type { Page_SubscriptionDto_ } from '../models/Page_SubscriptionDto_';
import type { RenewSubscriptionPlanRequest } from '../models/RenewSubscriptionPlanRequest';
import type { SubscriptionDto } from '../models/SubscriptionDto';
import type { UpgradeSubscriptionRequest } from '../models/UpgradeSubscriptionRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubscriptionRestControllerService {

    /**
     * getSubscriptions
     * @returns Page_SubscriptionDto_ OK
     * @throws ApiError
     */
    public static getSubscriptionsUsingGet({
        limit,
        offset,
    }: {
        limit?: number,
        offset?: number,
    }): CancelablePromise<Page_SubscriptionDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions',
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createSubscription
     * @returns SubscriptionDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createSubscriptionUsingPost({
        createSubscriptionRequest,
    }: {
        /**
         * createSubscriptionRequest
         */
        createSubscriptionRequest: CreateSubscriptionRequest,
    }): CancelablePromise<SubscriptionDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions',
            body: createSubscriptionRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateSubscription
     * @returns SubscriptionDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateSubscriptionUsingPut({
        subscriptionDto,
    }: {
        /**
         * subscriptionDto
         */
        subscriptionDto: SubscriptionDto,
    }): CancelablePromise<SubscriptionDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions',
            body: subscriptionDto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * changeSubscriptionPlan
     * @returns SubscriptionDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static changeSubscriptionPlanUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: ChangeSubscriptionPlanRequest,
    }): CancelablePromise<SubscriptionDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/change-plan',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * makePayment
     * @returns InitiatePaymentResponse OK
     * @returns any Created
     * @throws ApiError
     */
    public static makePaymentUsingPost({
        request,
        xTenantId,
    }: {
        /**
         * request
         */
        request: MakePaymentRequest,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<InitiatePaymentResponse | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions/payments',
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
     * verifyPayment
     * @returns any OK
     * @throws ApiError
     */
    public static verifyPaymentUsingGet1({
        safsimsTransactionRef,
        xTenantId,
    }: {
        /**
         * safsims_transaction_ref
         */
        safsimsTransactionRef: string,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/payments/verify/{safsims_transaction_ref}',
            path: {
                'safsims_transaction_ref': safsimsTransactionRef,
            },
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
     * renewSubscription
     * @returns SubscriptionDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static renewSubscriptionUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: RenewSubscriptionPlanRequest,
    }): CancelablePromise<SubscriptionDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions/renew',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getSubscriptionByTerm
     * @returns SubscriptionDto OK
     * @throws ApiError
     */
    public static getSubscriptionByTermUsingGet({
        termId,
    }: {
        /**
         * term-id
         */
        termId: string,
    }): CancelablePromise<SubscriptionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/term/{term-id}',
            path: {
                'term-id': termId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * upgradeSubscriptionPlan
     * @returns any OK
     * @throws ApiError
     */
    public static upgradeSubscriptionPlanUsingPost({
        request,
        xTenantId,
    }: {
        /**
         * request
         */
        request: UpgradeSubscriptionRequest,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions/upgrade',
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
     * getSubscription
     * @returns SubscriptionDto OK
     * @throws ApiError
     */
    public static getSubscriptionUsingGet({
        subscriptionId,
    }: {
        /**
         * subscription-id
         */
        subscriptionId: string,
    }): CancelablePromise<SubscriptionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscription-id}',
            path: {
                'subscription-id': subscriptionId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteSubscription
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSubscriptionUsingDelete({
        subscriptionId,
    }: {
        /**
         * subscription-id
         */
        subscriptionId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscriptions/{subscription-id}',
            path: {
                'subscription-id': subscriptionId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
