/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailNotificationRequest } from '../models/EmailNotificationRequest';
import type { SmsRequest } from '../models/SmsRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NotificationRestControllerService {
  /**
   * sendEmail
   * @returns any OK
   * @throws ApiError
   */
  public static sendEmailUsingPost({
    request,
    xTenantId,
  }: {
    /**
     * request
     */
    request: EmailNotificationRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/notification/email',
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
   * sendSms
   * @returns any OK
   * @throws ApiError
   */
  public static sendSmsUsingPost({
    smsRequest,
    xTenantId,
  }: {
    /**
     * smsRequest
     */
    smsRequest: SmsRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/notification/sms',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: smsRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
