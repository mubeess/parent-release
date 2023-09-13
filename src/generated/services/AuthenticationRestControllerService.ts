/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminResetPasswordRequest } from '../models/AdminResetPasswordRequest';
import type { AppleSigninRequest } from '../models/AppleSigninRequest';
import type { ChangeUsernameRequest } from '../models/ChangeUsernameRequest';
import type { CompleteTokenTransferRequest } from '../models/CompleteTokenTransferRequest';
import type { ConfirmPasswordResetRequest } from '../models/ConfirmPasswordResetRequest';
import type { ConfirmUserRequest } from '../models/ConfirmUserRequest';
import type { ConfirmUserResponse } from '../models/ConfirmUserResponse';
import type { GoogleLoginResponse } from '../models/GoogleLoginResponse';
import type { InternalUserSignupRequest } from '../models/InternalUserSignupRequest';
import type { LoginRequest } from '../models/LoginRequest';
import type { LoginToUmsResponse } from '../models/LoginToUmsResponse';
import type { PasswordResetRequest } from '../models/PasswordResetRequest';
import type { ResendVerificationLinkRequest } from '../models/ResendVerificationLinkRequest';
import type { ValidateOTPRequest } from '../models/ValidateOTPRequest';
import type { VerifyEmailLinkRequest } from '../models/VerifyEmailLinkRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthenticationRestControllerService {
  /**
   * adminPasswordReset
   * @returns any OK
   * @throws ApiError
   */
  public static adminPasswordResetUsingPost({
    adminResetPasswordRequest,
    xTenantId,
  }: {
    /**
     * adminResetPasswordRequest
     */
    adminResetPasswordRequest: AdminResetPasswordRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/admin/password/reset',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: adminResetPasswordRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * appleSignin
   * @returns LoginToUmsResponse OK
   * @returns any Created
   * @throws ApiError
   */
  public static appleSigninUsingPost({
    appleSigninRequest,
  }: {
    /**
     * appleSigninRequest
     */
    appleSigninRequest: AppleSigninRequest;
  }): CancelablePromise<LoginToUmsResponse | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/apple/signin',
      body: appleSigninRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * changeUsernameRequest
   * @returns any OK
   * @throws ApiError
   */
  public static changeUsernameRequestUsingPost({
    changeUsernameRequest,
    xTenantId,
  }: {
    /**
     * changeUsernameRequest
     */
    changeUsernameRequest: ChangeUsernameRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/change-username',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: changeUsernameRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * confirmUser
   * @returns ConfirmUserResponse OK
   * @returns any Created
   * @throws ApiError
   */
  public static confirmUserUsingPost({
    confirmUserRequest,
    xTenantId,
  }: {
    /**
     * confirmUserRequest
     */
    confirmUserRequest: ConfirmUserRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<ConfirmUserResponse | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/confirm-user',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: confirmUserRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * googleLogin
   * @returns GoogleLoginResponse OK
   * @throws ApiError
   */
  public static googleLoginUsingGet({
    callbackUrl,
    xTenantId,
  }: {
    /**
     * callback-url
     */
    callbackUrl: string;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<GoogleLoginResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/auth/google/login',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      query: {
        'callback-url': callbackUrl,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * confirmTransferCode
   * @returns LoginToUmsResponse OK
   * @returns any Created
   * @throws ApiError
   */
  public static confirmTransferCodeUsingPost({
    completeTokenTransferRequest,
    xTenantId,
  }: {
    /**
     * completeTokenTransferRequest
     */
    completeTokenTransferRequest: CompleteTokenTransferRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<LoginToUmsResponse | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/google/transfer',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: completeTokenTransferRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * signupInternalUser
   * @returns any OK
   * @throws ApiError
   */
  public static signupInternalUserUsingPost({
    request,
    xTenantId,
  }: {
    /**
     * request
     */
    request: InternalUserSignupRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/internal/signup',
      headers: {
        'X-TENANT-ID': xTenantId,
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
   * login
   * @returns LoginToUmsResponse OK
   * @returns any Created
   * @throws ApiError
   */
  public static loginUsingPost({
    loginRequest,
    xTenantId,
  }: {
    /**
     * loginRequest
     */
    loginRequest: LoginRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<LoginToUmsResponse | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/login',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: loginRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * confirmPasswordResetRequest
   * @returns any OK
   * @throws ApiError
   */
  public static confirmPasswordResetRequestUsingPost({
    confirmPasswordResetRequest,
    xTenantId,
  }: {
    /**
     * confirmPasswordResetRequest
     */
    confirmPasswordResetRequest: ConfirmPasswordResetRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/password/reset',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: confirmPasswordResetRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * resetPasswordRequest
   * @returns any OK
   * @throws ApiError
   */
  public static resetPasswordRequestUsingPost({
    passwordResetRequest,
    xTenantId,
  }: {
    /**
     * passwordResetRequest
     */
    passwordResetRequest: PasswordResetRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/password/reset-request',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: passwordResetRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * resendVerification
   * @returns any OK
   * @throws ApiError
   */
  public static resendVerificationUsingPost({
    request,
    xTenantId,
  }: {
    /**
     * request
     */
    request: ResendVerificationLinkRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/resend-verification',
      headers: {
        'X-TENANT-ID': xTenantId,
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
   * verifyEmailLink
   * @returns any OK
   * @throws ApiError
   */
  public static verifyEmailLinkUsingPost({
    request,
    xTenantId,
  }: {
    /**
     * request
     */
    request: VerifyEmailLinkRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/verify-email-link',
      headers: {
        'X-TENANT-ID': xTenantId,
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
   * verifyOtp
   * @returns any OK
   * @throws ApiError
   */
  public static verifyOtpUsingPost({
    validateOtpRequest,
    xTenantId,
  }: {
    /**
     * validateOTPRequest
     */
    validateOtpRequest: ValidateOTPRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/verify-otp',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: validateOtpRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
