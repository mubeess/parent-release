/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttendanceDateRangeBreakdownResponse } from '../models/AttendanceDateRangeBreakdownResponse';
import type { AttendanceDateRangeStatsResponse } from '../models/AttendanceDateRangeStatsResponse';
import type { AttendanceDto } from '../models/AttendanceDto';
import type { AttendanceRequest } from '../models/AttendanceRequest';
import type { StudentAttendanceSummaryResponse } from '../models/StudentAttendanceSummaryResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AttendanceRestControllerService {
  /**
   * getClassAttendanceRecords
   * @returns AttendanceDto OK
   * @throws ApiError
   */
  public static getClassAttendanceRecordsUsingGet({
    armId,
    classLevelId,
    dateRecorded,
    termId,
  }: {
    armId?: string;
    classLevelId?: string;
    dateRecorded?: string;
    termId?: string;
  }): CancelablePromise<Array<AttendanceDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/attendance',
      query: {
        armId: armId,
        classLevelId: classLevelId,
        dateRecorded: dateRecorded,
        termId: termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createAttendanceRecords
   * @returns any OK
   * @throws ApiError
   */
  public static createAttendanceRecordsUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: AttendanceRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/attendance',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getAttendanceDateRangeBreakdown
   * @returns AttendanceDateRangeBreakdownResponse OK
   * @throws ApiError
   */
  public static getAttendanceDateRangeBreakdownUsingGet({
    armId,
    classLevelId,
    endDate,
    startDate,
    termId,
  }: {
    armId?: string;
    classLevelId?: string;
    endDate?: string;
    startDate?: string;
    termId?: string;
  }): CancelablePromise<AttendanceDateRangeBreakdownResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/attendance/breakdown',
      query: {
        armId: armId,
        classLevelId: classLevelId,
        endDate: endDate,
        startDate: startDate,
        termId: termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getAttendanceDateRangeStats
   * @returns AttendanceDateRangeStatsResponse OK
   * @throws ApiError
   */
  public static getAttendanceDateRangeStatsUsingGet({
    armId,
    classLevelId,
    endDate,
    startDate,
    termId,
  }: {
    armId?: string;
    classLevelId?: string;
    endDate?: string;
    startDate?: string;
    termId?: string;
  }): CancelablePromise<AttendanceDateRangeStatsResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/attendance/stats',
      query: {
        armId: armId,
        classLevelId: classLevelId,
        endDate: endDate,
        startDate: startDate,
        termId: termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getStudentAttendanceSummary
   * @returns StudentAttendanceSummaryResponse OK
   * @throws ApiError
   */
  public static getStudentAttendanceSummaryUsingGet({
    studentId,
    termId,
  }: {
    /**
     * studentId
     */
    studentId: string;
    /**
     * termId
     */
    termId: string;
  }): CancelablePromise<StudentAttendanceSummaryResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/attendance/student/{studentId}',
      path: {
        studentId: studentId,
      },
      query: {
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
