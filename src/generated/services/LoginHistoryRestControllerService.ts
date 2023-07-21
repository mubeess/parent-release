/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginHistoryDto } from '../models/LoginHistoryDto';
import type { Page_LoginHistoryDto_ } from '../models/Page_LoginHistoryDto_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LoginHistoryRestControllerService {
  /**
   * getAllLoginHistory
   * @returns LoginHistoryDto OK
   * @throws ApiError
   */
  public static getAllLoginHistoryUsingGet(): CancelablePromise<Array<LoginHistoryDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/login-history',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * filterLoginHistory
   * @returns Page_LoginHistoryDto_ OK
   * @throws ApiError
   */
  public static filterLoginHistoryUsingGet({
    limit,
    maxDate,
    minDate,
    offset,
    search,
    userId,
  }: {
    limit?: number;
    maxDate?: string;
    minDate?: string;
    offset?: number;
    /**
     * search
     */
    search?: string;
    userId?: string;
  }): CancelablePromise<Page_LoginHistoryDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/login-history/filter',
      query: {
        limit: limit,
        maxDate: maxDate,
        minDate: minDate,
        offset: offset,
        search: search,
        userId: userId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getMostRecent
   * @returns LoginHistoryDto OK
   * @throws ApiError
   */
  public static getMostRecentUsingGet({
    userId,
  }: {
    /**
     * user-id
     */
    userId: string;
  }): CancelablePromise<LoginHistoryDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/login-history/most-recent',
      query: {
        'user-id': userId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getMostRecentLogin
   * @returns LoginHistoryDto OK
   * @throws ApiError
   */
  public static getMostRecentLoginUsingGet({
    userId,
  }: {
    /**
     * user-id
     */
    userId: string;
  }): CancelablePromise<LoginHistoryDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/login-history/most-recent/login',
      query: {
        'user-id': userId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getMostRecentLogout
   * @returns LoginHistoryDto OK
   * @throws ApiError
   */
  public static getMostRecentLogoutUsingGet({
    userId,
  }: {
    /**
     * user-id
     */
    userId: string;
  }): CancelablePromise<LoginHistoryDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/login-history/most-recent/logout',
      query: {
        'user-id': userId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getLoginHistory
   * @returns LoginHistoryDto OK
   * @throws ApiError
   */
  public static getLoginHistoryUsingGet({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<LoginHistoryDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/login-history/{id}',
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
}
