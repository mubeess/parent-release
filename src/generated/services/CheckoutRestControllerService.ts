/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkSchoolFeesCheckoutRequest } from '../models/BulkSchoolFeesCheckoutRequest';
import type { SchoolFeesCheckoutRequest } from '../models/SchoolFeesCheckoutRequest';
import type { SchoolFeesCheckoutResponse } from '../models/SchoolFeesCheckoutResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CheckoutRestControllerService {

    /**
     * getInvoiceBreakDown
     * @returns SchoolFeesCheckoutResponse OK
     * @returns any Created
     * @throws ApiError
     */
    public static getInvoiceBreakDownUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: SchoolFeesCheckoutRequest,
    }): CancelablePromise<SchoolFeesCheckoutResponse | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/checkout',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getInvoiceBreakDown
     * @returns SchoolFeesCheckoutResponse OK
     * @returns any Created
     * @throws ApiError
     */
    public static getInvoiceBreakDownUsingPost1({
        request,
    }: {
        /**
         * request
         */
        request: BulkSchoolFeesCheckoutRequest,
    }): CancelablePromise<Array<SchoolFeesCheckoutResponse> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/checkout/bulk',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
