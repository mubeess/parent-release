/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlutterwaveWebhookRequest } from '../models/FlutterwaveWebhookRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FlutterwaveWebhookRestControllerService {

    /**
     * updateTransactionStatus
     * @returns any OK
     * @throws ApiError
     */
    public static updateTransactionStatusUsingPost({
        request,
        verifHash,
    }: {
        /**
         * request
         */
        request: FlutterwaveWebhookRequest,
        /**
         * verif-hash
         */
        verifHash: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/flutterwave-webhook',
            headers: {
                'verif-hash': verifHash,
            },
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
