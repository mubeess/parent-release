/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_StudentInvoiceSummaryDto_ } from '../models/Page_StudentInvoiceSummaryDto_';
import type { SendInvoiceNotificationRequest } from '../models/SendInvoiceNotificationRequest';
import type { StudentInvoiceSummaryDto } from '../models/StudentInvoiceSummaryDto';
import type { StudentTermInvoiceSummaryDto } from '../models/StudentTermInvoiceSummaryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StudentInvoiceSummaryRestControllerService {
  /**
   * getAllByTerm
   * @returns Page_StudentInvoiceSummaryDto_ OK
   * @throws ApiError
   */
  public static getAllByTermUsingGet1({
    termId,
    classLevelId,
    limit,
    offset,
    paymentType,
    search,
  }: {
    /**
     * term-id
     */
    termId: string;
    /**
     * class-level-id
     */
    classLevelId?: string;
    limit?: number;
    offset?: number;
    /**
     * payment-type
     */
    paymentType?: 'ALL' | 'FULL' | 'OVER_PAID' | 'PART' | 'UNPAID';
    /**
     * search
     */
    search?: string;
  }): CancelablePromise<Page_StudentInvoiceSummaryDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/invoice-summaries',
      query: {
        'class-level-id': classLevelId,
        limit: limit,
        offset: offset,
        'payment-type': paymentType,
        search: search,
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
   * getByClassArm
   * @returns Page_StudentInvoiceSummaryDto_ OK
   * @throws ApiError
   */
  public static getByClassArmUsingGet({
    armId,
    classLevelId,
    termId,
    limit,
    offset,
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
    limit?: number;
    offset?: number;
  }): CancelablePromise<Page_StudentInvoiceSummaryDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/invoice-summaries/class-arms',
      query: {
        'arm-id': armId,
        'class-level-id': classLevelId,
        limit: limit,
        offset: offset,
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
   * getByClassLevel
   * @returns Page_StudentInvoiceSummaryDto_ OK
   * @throws ApiError
   */
  public static getByClassLevelUsingGet1({
    classLevelId,
    termId,
    limit,
    offset,
  }: {
    /**
     * class-level-id
     */
    classLevelId: string;
    /**
     * term-id
     */
    termId: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<Page_StudentInvoiceSummaryDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/invoice-summaries/class-levels',
      query: {
        'class-level-id': classLevelId,
        limit: limit,
        offset: offset,
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
   * sendInvoiceNotification
   * @returns any OK
   * @throws ApiError
   */
  public static sendInvoiceNotificationUsingPost({
    request,
    xTenantId,
  }: {
    /**
     * request
     */
    request: SendInvoiceNotificationRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/invoice-summaries/notification',
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
   * getAllByTerm
   * @returns StudentInvoiceSummaryDto OK
   * @throws ApiError
   */
  public static getAllByTermUsingGet({
    termId,
    classLevelId,
    paymentType,
    search,
  }: {
    /**
     * term-id
     */
    termId: string;
    /**
     * class-level-id
     */
    classLevelId?: string;
    /**
     * payment-type
     */
    paymentType?: 'ALL' | 'FULL' | 'OVER_PAID' | 'PART' | 'UNPAID';
    /**
     * search
     */
    search?: string;
  }): CancelablePromise<Array<StudentInvoiceSummaryDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/invoice-summaries/unpaged',
      query: {
        'class-level-id': classLevelId,
        'payment-type': paymentType,
        search: search,
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
   * getStudentInvoiceSummary
   * @returns StudentTermInvoiceSummaryDto OK
   * @throws ApiError
   */
  public static getStudentInvoiceSummaryUsingGet({
    studentId,
  }: {
    /**
     * student-id
     */
    studentId: string;
  }): CancelablePromise<Array<StudentTermInvoiceSummaryDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/invoice-summaries/{student-id}',
      path: {
        'student-id': studentId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
