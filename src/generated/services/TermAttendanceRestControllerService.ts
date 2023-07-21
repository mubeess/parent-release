/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StudentTermAttendanceSummaryResponse } from '../models/StudentTermAttendanceSummaryResponse';
import type { TermAttendanceDto } from '../models/TermAttendanceDto';
import type { TermAttendanceRequest } from '../models/TermAttendanceRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TermAttendanceRestControllerService {
  /**
   * getStudentAttendanceRecords
   * @returns TermAttendanceDto OK
   * @throws ApiError
   */
  public static getStudentAttendanceRecordsUsingGet({
    armId,
    classLevelId,
    termId,
  }: {
    armId?: string;
    classLevelId?: string;
    termId?: string;
  }): CancelablePromise<Array<TermAttendanceDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/term-attendance',
      query: {
        armId: armId,
        classLevelId: classLevelId,
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
  public static createAttendanceRecordsUsingPost1({
    request,
  }: {
    /**
     * request
     */
    request: TermAttendanceRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/term-attendance',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * deleteClassTermAttendance
   * @returns any OK
   * @throws ApiError
   */
  public static deleteClassTermAttendanceUsingDelete({
    armId,
    classLevelId,
    termId,
  }: {
    armId?: string;
    classLevelId?: string;
    termId?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/term-attendance',
      query: {
        armId: armId,
        classLevelId: classLevelId,
        termId: termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }

  /**
   * getStudentAttendanceSummary
   * @returns StudentTermAttendanceSummaryResponse OK
   * @throws ApiError
   */
  public static getStudentAttendanceSummaryUsingGet1({
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
  }): CancelablePromise<StudentTermAttendanceSummaryResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/term-attendance/student/{studentId}',
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
