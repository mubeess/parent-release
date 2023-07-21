/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_ParentOfflinePaymentDto_ } from '../models/Page_ParentOfflinePaymentDto_';
import type { ParentOfflinePaymentRequestStatus } from '../models/ParentOfflinePaymentRequestStatus';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ParentOfflinePaymentRestControllerService {
  /**
   * getParentOfflinePaymentRequests
   * @returns Page_ParentOfflinePaymentDto_ OK
   * @throws ApiError
   */
  public static getParentOfflinePaymentRequestsUsingGet({
    limit,
    offset,
    search,
    status,
  }: {
    limit?: number;
    offset?: number;
    /**
     * search
     */
    search?: string;
    /**
     * status
     */
    status?: 'APPROVED' | 'DECLINED' | 'PENDING';
  }): CancelablePromise<Page_ParentOfflinePaymentDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/parent-offline-payment',
      query: {
        limit: limit,
        offset: offset,
        search: search,
        status: status,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createParentOfflinePayment
   * @returns any OK
   * @throws ApiError
   */
  public static createParentOfflinePaymentUsingPost({
    parentOfflinePayment,
    xTenantId,
    teller,
  }: {
    /**
     * parent-offline-payment
     */
    parentOfflinePayment: string;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
    /**
     * teller
     */
    teller?: Blob;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/parent-offline-payment',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      query: {
        'parent-offline-payment': parentOfflinePayment,
      },
      body: teller,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateParentOfflinePaymentStatus
   * @returns any OK
   * @throws ApiError
   */
  public static updateParentOfflinePaymentStatusUsingPut({
    id,
    request,
  }: {
    /**
     * id
     */
    id: string;
    /**
     * request
     */
    request: ParentOfflinePaymentRequestStatus;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/parent-offline-payment/{id}',
      path: {
        id: id,
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
