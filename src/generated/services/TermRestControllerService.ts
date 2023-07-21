/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTermRequest } from '../models/CreateTermRequest';
import type { TermDto } from '../models/TermDto';
import type { TermRequest } from '../models/TermRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TermRestControllerService {
  /**
   * getAllTerms
   * @returns TermDto OK
   * @throws ApiError
   */
  public static getAllTermsUsingGet(): CancelablePromise<Array<TermDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/terms',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createTerm
   * @returns TermDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static createTermUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: CreateTermRequest;
  }): CancelablePromise<TermDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/terms',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getCurrentTerm
   * @returns TermDto OK
   * @throws ApiError
   */
  public static getCurrentTermUsingGet(): CancelablePromise<TermDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/terms/current-term',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getTermsWithApprovedResults
   * @returns TermDto OK
   * @throws ApiError
   */
  public static getTermsWithApprovedResultsUsingGet({
    studentId,
  }: {
    /**
     * student-id
     */
    studentId?: string;
  }): CancelablePromise<Array<TermDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/terms/filter',
      query: {
        'student-id': studentId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createTerms
   * @returns TermDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static createTermsUsingPost({
    requests,
  }: {
    /**
     * requests
     */
    requests: Array<CreateTermRequest>;
  }): CancelablePromise<Array<TermDto> | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/terms/multiple',
      body: requests,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getTermsBySession
   * @returns TermDto OK
   * @throws ApiError
   */
  public static getTermsBySessionUsingGet({
    sessionId,
  }: {
    /**
     * session-id
     */
    sessionId: string;
  }): CancelablePromise<Array<TermDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/terms/sessions',
      query: {
        'session-id': sessionId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateTerm
   * @returns TermDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateTermUsingPut({
    termId,
    termRequest,
  }: {
    /**
     * term-id
     */
    termId: string;
    /**
     * termRequest
     */
    termRequest: TermRequest;
  }): CancelablePromise<TermDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/terms/{term-id}',
      path: {
        'term-id': termId,
      },
      body: termRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
