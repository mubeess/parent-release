/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_MessageLogDto_ } from '../models/Page_MessageLogDto_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MessageLogRestControllerService {
  /**
   * getMessageLogs
   * @returns Page_MessageLogDto_ OK
   * @throws ApiError
   */
  public static getMessageLogsUsingGet({
    batchId,
    channelType,
    maxDate,
    messageId,
    minDate,
    pageIndex,
    pageSize,
    search,
    status,
    userType,
  }: {
    batchId?: string;
    channelType?: 'EMAIL' | 'IN_APP' | 'WHATSAPP';
    maxDate?: string;
    messageId?: string;
    minDate?: string;
    pageIndex?: number;
    pageSize?: number;
    search?: string;
    status?: 'DELIVERED' | 'FAILED' | 'PENDING' | 'READ' | 'SENT' | 'UNKNOWN';
    userType?: 'PARENT' | 'STAFF' | 'STUDENT';
  }): CancelablePromise<Page_MessageLogDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/message-logs',
      query: {
        batchId: batchId,
        channelType: channelType,
        maxDate: maxDate,
        messageId: messageId,
        minDate: minDate,
        pageIndex: pageIndex,
        pageSize: pageSize,
        search: search,
        status: status,
        userType: userType,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
