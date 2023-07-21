/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageDto } from '../models/MessageDto';
import type { MessageTemplateResponse } from '../models/MessageTemplateResponse';
import type { Page_MessageDto_ } from '../models/Page_MessageDto_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MessageRestControllerService {
  /**
   * createMessage
   * @returns MessageDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static createMessageUsingPost({
    xTenantId,
    attachments,
  }: {
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
    attachments?: Array<Blob>;
  }): CancelablePromise<MessageDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/messages',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      formData: {
        attachments: attachments,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateMessage
   * @returns MessageDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateMessageUsingPut({
    newAttachments,
  }: {
    newAttachments?: Array<Blob>;
  }): CancelablePromise<MessageDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/messages',
      formData: {
        'new-attachments': newAttachments,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getEmailTemplates
   * @returns MessageTemplateResponse OK
   * @throws ApiError
   */
  public static getEmailTemplatesUsingGet({
    xTenantId,
  }: {
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<Array<MessageTemplateResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/messages/email-templates',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getScheduledMessages
   * @returns Page_MessageDto_ OK
   * @throws ApiError
   */
  public static getScheduledMessagesUsingGet({
    xTenantId,
    limit,
    offset,
    search,
    status,
  }: {
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
    limit?: number;
    offset?: number;
    /**
     * search
     */
    search?: string;
    /**
     * status
     */
    status?: 'ACTIVE' | 'INACTIVE' | 'SENT';
  }): CancelablePromise<Page_MessageDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/messages/scheduled',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
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
   * getSentMessages
   * @returns Page_MessageDto_ OK
   * @throws ApiError
   */
  public static getSentMessagesUsingGet({
    xTenantId,
    limit,
    offset,
    search,
  }: {
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
    limit?: number;
    offset?: number;
    /**
     * search
     */
    search?: string;
  }): CancelablePromise<Page_MessageDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/messages/sent',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      query: {
        limit: limit,
        offset: offset,
        search: search,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getWhatsAppMessageTemplates
   * @returns MessageTemplateResponse OK
   * @throws ApiError
   */
  public static getWhatsAppMessageTemplatesUsingGet({
    xTenantId,
  }: {
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<Array<MessageTemplateResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/messages/whatsapp-templates',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
