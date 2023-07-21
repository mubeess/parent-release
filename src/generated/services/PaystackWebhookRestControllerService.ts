/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaystackWebhookRequest } from '../models/PaystackWebhookRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PaystackWebhookRestControllerService {
  /**
   * updateTransactionStatus
   * @returns any OK
   * @throws ApiError
   */
  public static updateTransactionStatusUsingPost1({
    requestBody,
  }: {
    /**
     * requestBody
     */
    requestBody: PaystackWebhookRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/paystack-webhook',
      body: requestBody,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
