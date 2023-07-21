/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TermCommentDto } from '../models/TermCommentDto';
import type { TermCommentRequest } from '../models/TermCommentRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TermCommentRestControllerService {
  /**
   * createOrUpdateTermComment
   * @returns TermCommentDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static createOrUpdateTermCommentUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: TermCommentRequest;
  }): CancelablePromise<TermCommentDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/term-comments',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * deleteTermComment
   * @returns any OK
   * @throws ApiError
   */
  public static deleteTermCommentUsingDelete({
    staffCommentType,
    studentId,
    termCommentType,
    termId,
  }: {
    staffCommentType:
      | 'FORM_TEACHER_COMMENT'
      | 'FORM_TEACHER_CUMULATIVE_COMMENT'
      | 'HOUSE_MASTER_COMMENT'
      | 'PRINCIPAL_COMMENT'
      | 'PRINCIPAL_CUMULATIVE_COMMENT'
      | 'SUBJECT_TEACHER_COMMENT'
      | 'VICE_PRINCIPAL_COMMENT'
      | 'VICE_PRINCIPAL_CUMULATIVE_COMMENT';
    studentId: string;
    termCommentType: 'END_OF_TERM' | 'MID_TERM';
    termId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/term-comments',
      query: {
        staffCommentType: staffCommentType,
        studentId: studentId,
        termCommentType: termCommentType,
        termId: termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }

  /**
   * getStudentEOTComments
   * @returns TermCommentDto OK
   * @throws ApiError
   */
  public static getStudentEotCommentsUsingGet({
    studentId,
    termId,
  }: {
    studentId: string;
    termId: string;
  }): CancelablePromise<Array<TermCommentDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/term-comments/eot-comments',
      query: {
        studentId: studentId,
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
   * getStudentMidtermComments
   * @returns TermCommentDto OK
   * @throws ApiError
   */
  public static getStudentMidtermCommentsUsingGet({
    studentId,
    termId,
  }: {
    studentId: string;
    termId: string;
  }): CancelablePromise<Array<TermCommentDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/term-comments/midterm-comments',
      query: {
        studentId: studentId,
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
