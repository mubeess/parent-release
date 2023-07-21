/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ScoreEntryDto } from '../models/ScoreEntryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ScoreEntryRestControllerService {
  /**
   * saveScores
   * @returns any OK
   * @throws ApiError
   */
  public static saveScoresUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: ScoreEntryDto;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/scores',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getScoreEntryData
   * @returns ScoreEntryDto OK
   * @throws ApiError
   */
  public static getScoreEntryDataUsingGet({
    armId,
    classLevelId,
    staffId,
    termId,
  }: {
    armId: string;
    classLevelId: string;
    staffId: string;
    termId: string;
  }): CancelablePromise<ScoreEntryDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/scores/score-entry-data',
      query: {
        armId: armId,
        classLevelId: classLevelId,
        staffId: staffId,
        termId: termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
