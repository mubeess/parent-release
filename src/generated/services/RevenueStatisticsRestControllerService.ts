/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RevenueStatisticsDto } from '../models/RevenueStatisticsDto';
import type { RevenueSummaryDto } from '../models/RevenueSummaryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RevenueStatisticsRestControllerService {
  /**
   * getRevenueStatistics
   * @returns RevenueStatisticsDto OK
   * @throws ApiError
   */
  public static getRevenueStatisticsUsingGet({
    armId,
    classLevelId,
    sessionId,
    termId,
  }: {
    /**
     * arm_id
     */
    armId: string;
    /**
     * class_level_id
     */
    classLevelId: string;
    /**
     * session_id
     */
    sessionId: string;
    /**
     * term_id
     */
    termId: string;
  }): CancelablePromise<RevenueStatisticsDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/revenue-statistics',
      query: {
        arm_id: armId,
        class_level_id: classLevelId,
        session_id: sessionId,
        term_id: termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getRevenueSummary
   * @returns RevenueSummaryDto OK
   * @throws ApiError
   */
  public static getRevenueSummaryUsingGet({
    termId,
  }: {
    /**
     * term-id
     */
    termId: string;
  }): CancelablePromise<RevenueSummaryDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/revenue-statistics/revenue-summary',
      query: {
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
