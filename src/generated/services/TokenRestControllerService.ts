/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenRequest } from '../models/TokenRequest';
import type { UmsTokenResponse } from '../models/UmsTokenResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TokenRestControllerService {
  /**
   * refreshToken
   * @returns UmsTokenResponse OK
   * @returns any Created
   * @throws ApiError
   */
  public static refreshTokenUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: TokenRequest;
  }): CancelablePromise<UmsTokenResponse | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/token',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
