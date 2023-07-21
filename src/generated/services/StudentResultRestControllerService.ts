/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClassStudentsCumulativeResultLiteDto } from '../models/ClassStudentsCumulativeResultLiteDto';
import type { ClassStudentsTermResultDto } from '../models/ClassStudentsTermResultDto';
import type { CumulativeResultAndAssessmentDef } from '../models/CumulativeResultAndAssessmentDef';
import type { SendResultLinkRequest } from '../models/SendResultLinkRequest';
import type { ShareResultLinkRequest } from '../models/ShareResultLinkRequest';
import type { StudentCumulativeReportResponse } from '../models/StudentCumulativeReportResponse';
import type { StudentReportResponse } from '../models/StudentReportResponse';
import type { SubjectResultsAndAssessmentDef } from '../models/SubjectResultsAndAssessmentDef';
import type { TermResultAndAssessmentDef } from '../models/TermResultAndAssessmentDef';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StudentResultRestControllerService {
  /**
   * generateStudentResult
   * @returns TermResultAndAssessmentDef OK
   * @throws ApiError
   */
  public static generateStudentResultUsingGet({
    studentId,
    termId,
    includeUnapproved = false,
    resultConfigId,
  }: {
    /**
     * student-id
     */
    studentId: string;
    /**
     * term-id
     */
    termId: string;
    /**
     * include-unapproved
     */
    includeUnapproved?: boolean;
    /**
     * result-config-id
     */
    resultConfigId?: string;
  }): CancelablePromise<TermResultAndAssessmentDef> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/student-results',
      query: {
        'include-unapproved': includeUnapproved,
        'result-config-id': resultConfigId,
        'student-id': studentId,
        'term-id': termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * generateBroadSheet
   * @returns ClassStudentsTermResultDto OK
   * @throws ApiError
   */
  public static generateBroadSheetUsingGet({
    armId,
    classLevelId,
    termId,
  }: {
    /**
     * arm-id
     */
    armId: string;
    /**
     * class-level-id
     */
    classLevelId: string;
    /**
     * term-id
     */
    termId: string;
  }): CancelablePromise<ClassStudentsTermResultDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/student-results/broad-sheet',
      query: {
        'arm-id': armId,
        'class-level-id': classLevelId,
        'term-id': termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * generateClassCumulativeBroadSheet
   * @returns ClassStudentsCumulativeResultLiteDto OK
   * @throws ApiError
   */
  public static generateClassCumulativeBroadSheetUsingGet({
    armId,
    classLevelId,
    termId,
  }: {
    /**
     * arm-id
     */
    armId: string;
    /**
     * class-level-id
     */
    classLevelId: string;
    /**
     * term-id
     */
    termId: string;
  }): CancelablePromise<ClassStudentsCumulativeResultLiteDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/student-results/broad-sheet/cumulative',
      query: {
        'arm-id': armId,
        'class-level-id': classLevelId,
        'term-id': termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * generateClassLevelBroadSheet
   * @returns ClassStudentsTermResultDto OK
   * @throws ApiError
   */
  public static generateClassLevelBroadSheetUsingGet({
    classLevelId,
    termId,
  }: {
    /**
     * class-level-id
     */
    classLevelId: string;
    /**
     * term-id
     */
    termId: string;
  }): CancelablePromise<ClassStudentsTermResultDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/student-results/class-level-broad-sheet',
      query: {
        'class-level-id': classLevelId,
        'term-id': termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * generateClassLevelCumulativeBroadSheet
   * @returns ClassStudentsCumulativeResultLiteDto OK
   * @throws ApiError
   */
  public static generateClassLevelCumulativeBroadSheetUsingGet({
    classLevelId,
    termId,
  }: {
    /**
     * class-level-id
     */
    classLevelId: string;
    /**
     * term-id
     */
    termId: string;
  }): CancelablePromise<ClassStudentsCumulativeResultLiteDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/student-results/class-level-broad-sheet/cumulative',
      query: {
        'class-level-id': classLevelId,
        'term-id': termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * generateStudentCumulativeResult
   * @returns CumulativeResultAndAssessmentDef OK
   * @throws ApiError
   */
  public static generateStudentCumulativeResultUsingGet({
    studentId,
    termId,
    includeUnapproved = false,
    resultConfigId,
  }: {
    /**
     * student-id
     */
    studentId: string;
    /**
     * term-id
     */
    termId: string;
    /**
     * include-unapproved
     */
    includeUnapproved?: boolean;
    /**
     * result-config-id
     */
    resultConfigId?: string;
  }): CancelablePromise<CumulativeResultAndAssessmentDef> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/student-results/cumulative',
      query: {
        'include-unapproved': includeUnapproved,
        'result-config-id': resultConfigId,
        'student-id': studentId,
        'term-id': termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getStudentCumulativeResultReport
   * @returns StudentCumulativeReportResponse OK
   * @throws ApiError
   */
  public static getStudentCumulativeResultReportUsingGet({
    resultConfigId,
    studentId,
    termId,
    includeUnapproved = false,
  }: {
    /**
     * result-config-id
     */
    resultConfigId: string;
    /**
     * student-id
     */
    studentId: string;
    /**
     * term-id
     */
    termId: string;
    /**
     * include-unapproved
     */
    includeUnapproved?: boolean;
  }): CancelablePromise<StudentCumulativeReportResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/student-results/cumulative/report',
      query: {
        'include-unapproved': includeUnapproved,
        'result-config-id': resultConfigId,
        'student-id': studentId,
        'term-id': termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getStudentsCumulativeResultReports
   * @returns StudentCumulativeReportResponse OK
   * @throws ApiError
   */
  public static getStudentsCumulativeResultReportsUsingGet({
    armId,
    classLevelId,
    resultConfigId,
    termId,
    includeUnapproved = false,
  }: {
    /**
     * arm-id
     */
    armId: string;
    /**
     * class-level-id
     */
    classLevelId: string;
    /**
     * result-config-id
     */
    resultConfigId: string;
    /**
     * term-id
     */
    termId: string;
    /**
     * include-unapproved
     */
    includeUnapproved?: boolean;
  }): CancelablePromise<Array<StudentCumulativeReportResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/student-results/cumulative/report/bulk',
      query: {
        'arm-id': armId,
        'class-level-id': classLevelId,
        'include-unapproved': includeUnapproved,
        'result-config-id': resultConfigId,
        'term-id': termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getStudentResultReport
   * @returns StudentReportResponse OK
   * @throws ApiError
   */
  public static getStudentResultReportUsingGet({
    resultConfigId,
    studentId,
    termId,
    includeUnapproved = false,
  }: {
    /**
     * result-config-id
     */
    resultConfigId: string;
    /**
     * student-id
     */
    studentId: string;
    /**
     * term-id
     */
    termId: string;
    /**
     * include-unapproved
     */
    includeUnapproved?: boolean;
  }): CancelablePromise<StudentReportResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/student-results/report',
      query: {
        'include-unapproved': includeUnapproved,
        'result-config-id': resultConfigId,
        'student-id': studentId,
        'term-id': termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getStudentsResultReports
   * @returns StudentReportResponse OK
   * @throws ApiError
   */
  public static getStudentsResultReportsUsingGet({
    armId,
    classLevelId,
    resultConfigId,
    termId,
    includeUnapproved = false,
  }: {
    /**
     * arm-id
     */
    armId: string;
    /**
     * class-level-id
     */
    classLevelId: string;
    /**
     * result-config-id
     */
    resultConfigId: string;
    /**
     * term-id
     */
    termId: string;
    /**
     * include-unapproved
     */
    includeUnapproved?: boolean;
  }): CancelablePromise<Array<StudentReportResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/student-results/report/bulk',
      query: {
        'arm-id': armId,
        'class-level-id': classLevelId,
        'include-unapproved': includeUnapproved,
        'result-config-id': resultConfigId,
        'term-id': termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * sendResultLink
   * @returns any OK
   * @throws ApiError
   */
  public static sendResultLinkUsingPost({
    sendResultLinkRequest,
  }: {
    /**
     * sendResultLinkRequest
     */
    sendResultLinkRequest: SendResultLinkRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/student-results/send-link',
      body: sendResultLinkRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * shareResultLink
   * @returns any OK
   * @throws ApiError
   */
  public static shareResultLinkUsingPost({
    shareResultLinkRequest,
  }: {
    /**
     * shareResultLinkRequest
     */
    shareResultLinkRequest: ShareResultLinkRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/student-results/share',
      body: shareResultLinkRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getStudentsSubjectResults
   * @returns SubjectResultsAndAssessmentDef OK
   * @throws ApiError
   */
  public static getStudentsSubjectResultsUsingGet({
    armId,
    classLevelId,
    subjectCode,
    termId,
  }: {
    /**
     * arm-id
     */
    armId: string;
    /**
     * class-level-id
     */
    classLevelId: string;
    /**
     * subject-code
     */
    subjectCode: string;
    /**
     * term-id
     */
    termId: string;
  }): CancelablePromise<SubjectResultsAndAssessmentDef> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/student-results/subject-results',
      query: {
        'arm-id': armId,
        'class-level-id': classLevelId,
        'subject-code': subjectCode,
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
