/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ScoreEntryTimeframeDto } from '../models/ScoreEntryTimeframeDto';
import type { ScoreEntryTimeFrameRequests } from '../models/ScoreEntryTimeFrameRequests';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ScoreEntryTimeframeRestControllerService {
  /**
   * createTimeframes
   * @returns ScoreEntryTimeframeDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static createTimeframesUsingPost({
    requests,
  }: {
    /**
     * requests
     */
    requests: ScoreEntryTimeFrameRequests;
  }): CancelablePromise<Array<ScoreEntryTimeframeDto> | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/score-entry-timeframe',
      body: requests,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateTimeframes
   * @returns ScoreEntryTimeframeDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateTimeframesUsingPut({
    requests,
  }: {
    /**
     * requests
     */
    requests: ScoreEntryTimeFrameRequests;
  }): CancelablePromise<Array<ScoreEntryTimeframeDto> | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/score-entry-timeframe',
      body: requests,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * geTimeframes
   * @returns ScoreEntryTimeframeDto OK
   * @throws ApiError
   */
  public static geTimeframesUsingGet({
    termId,
  }: {
    /**
     * term-id
     */
    termId: string;
  }): CancelablePromise<Array<ScoreEntryTimeframeDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/score-entry-timeframe/{term-id}',
      path: {
        'term-id': termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
