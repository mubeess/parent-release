/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_ParentSignupDto_ } from '../models/Page_ParentSignupDto_';
import type { ParentSignupDto } from '../models/ParentSignupDto';
import type { ParentSignupRequest } from '../models/ParentSignupRequest';
import type { ParentSignupStatistics } from '../models/ParentSignupStatistics';
import type { UpdateSignupRequestStatus } from '../models/UpdateSignupRequestStatus';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ParentSignupRestControllerService {
  /**
   * getParentSignupRequests
   * @returns Page_ParentSignupDto_ OK
   * @throws ApiError
   */
  public static getParentSignupRequestsUsingGet({
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
  }): CancelablePromise<Page_ParentSignupDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/parent-signup',
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
   * createParent
   * @returns any OK
   * @throws ApiError
   */
  public static createParentUsingPost1({
    request,
  }: {
    /**
     * request
     */
    request: ParentSignupRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/parent-signup',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getParentSignupStatistics
   * @returns ParentSignupStatistics OK
   * @throws ApiError
   */
  public static getParentSignupStatisticsUsingGet(): CancelablePromise<ParentSignupStatistics> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/parent-signup/statistics',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getParentSignupRequest
   * @returns ParentSignupDto OK
   * @throws ApiError
   */
  public static getParentSignupRequestUsingGet({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<ParentSignupDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/parent-signup/{id}',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateSignupRequestStatus
   * @returns any OK
   * @throws ApiError
   */
  public static updateSignupRequestStatusUsingPut({
    id,
    status,
    xTenantId,
  }: {
    /**
     * id
     */
    id: string;
    /**
     * status
     */
    status: UpdateSignupRequestStatus;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/parent-signup/{id}',
      path: {
        id: id,
      },
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: status,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
