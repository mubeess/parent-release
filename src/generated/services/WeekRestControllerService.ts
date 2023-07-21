/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateWeekRequest } from '../models/CreateWeekRequest';
import type { WeekDto } from '../models/WeekDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WeekRestControllerService {
  /**
   * getWeeks
   * @returns any OK
   * @throws ApiError
   */
  public static getWeeksUsingGet({
    termId,
  }: {
    /**
     * term-id
     */
    termId?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/weeks',
      query: {
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
   * createWeek
   * @returns any OK
   * @throws ApiError
   */
  public static createWeekUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: CreateWeekRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/weeks',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getWeek
   * @returns any OK
   * @throws ApiError
   */
  public static getWeekUsingGet({
    weekId,
  }: {
    /**
     * week-id
     */
    weekId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/weeks/{week-id}',
      path: {
        'week-id': weekId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateWeek
   * @returns any OK
   * @throws ApiError
   */
  public static updateWeekUsingPut({
    request,
  }: {
    /**
     * request
     */
    request: WeekDto;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/weeks/{week-id}',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * deleteWeek
   * @returns any OK
   * @throws ApiError
   */
  public static deleteWeekUsingDelete({
    weekId,
  }: {
    /**
     * week-id
     */
    weekId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/weeks/{week-id}',
      path: {
        'week-id': weekId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }
}
