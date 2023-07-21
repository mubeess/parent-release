/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSchoolEventRequest } from '../models/CreateSchoolEventRequest';
import type { SchoolEventDto } from '../models/SchoolEventDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SchoolEventRestControllerService {
  /**
   * getSchoolEvents
   * @returns SchoolEventDto OK
   * @throws ApiError
   */
  public static getSchoolEventsUsingGet({
    endDate,
    startDate,
  }: {
    endDate: string;
    startDate: string;
  }): CancelablePromise<Array<SchoolEventDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/school-event',
      query: {
        endDate: endDate,
        startDate: startDate,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createSchoolEvent
   * @returns SchoolEventDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static createSchoolEventUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: CreateSchoolEventRequest;
  }): CancelablePromise<SchoolEventDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/school-event',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getSchoolEvent
   * @returns SchoolEventDto OK
   * @throws ApiError
   */
  public static getSchoolEventUsingGet({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<SchoolEventDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/school-event/{id}',
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
   * updateSchoolEvent
   * @returns SchoolEventDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateSchoolEventUsingPut({
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
    request: CreateSchoolEventRequest;
  }): CancelablePromise<SchoolEventDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/school-event/{id}',
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

  /**
   * deleteSchoolEvent
   * @returns any OK
   * @throws ApiError
   */
  public static deleteSchoolEventUsingDelete({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/school-event/{id}',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }
}
