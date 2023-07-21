/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageChannelDto } from '../models/MessageChannelDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MessageChannelRestControllerService {
  /**
   * getAllMessageChannels
   * @returns MessageChannelDto OK
   * @throws ApiError
   */
  public static getAllMessageChannelsUsingGet(): CancelablePromise<Array<MessageChannelDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/message-channels',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
