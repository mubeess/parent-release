/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginToUmsResponse } from '../models/LoginToUmsResponse';
import type { ResendVerificationLinkRequest } from '../models/ResendVerificationLinkRequest';
import type { SignupRequestData } from '../models/SignupRequestData';
import type { UrlPrefixResponse } from '../models/UrlPrefixResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SignupRestControllerService {
  /**
   * signupSchool
   * @returns LoginToUmsResponse OK
   * @returns any Created
   * @throws ApiError
   */
  public static signupSchoolUsingPost({
    signupRequestData,
    xTenantId,
  }: {
    /**
     * signupRequestData
     */
    signupRequestData: SignupRequestData;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<LoginToUmsResponse | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/signup',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: signupRequestData,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * resendVerificationLink
   * @returns any OK
   * @throws ApiError
   */
  public static resendVerificationLinkUsingPost({
    resendVerificationLinkRequest,
    xTenantId,
  }: {
    /**
     * resendVerificationLinkRequest
     */
    resendVerificationLinkRequest: ResendVerificationLinkRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/signup/resend-link',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: resendVerificationLinkRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getAllUrlPrefix
   * @returns UrlPrefixResponse OK
   * @throws ApiError
   */
  public static getAllUrlPrefixUsingGet(): CancelablePromise<UrlPrefixResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/signup/url-prefixes',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
