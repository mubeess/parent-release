/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateStudentTraitAssessmentsRequest } from '../models/CreateStudentTraitAssessmentsRequest';
import type { StudentTraitAssessmentDto } from '../models/StudentTraitAssessmentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StudentTraitAssessmentRestControllerService {
  /**
   * getStudentTraitAssessments
   * @returns StudentTraitAssessmentDto OK
   * @throws ApiError
   */
  public static getStudentTraitAssessmentsUsingGet({
    studentId,
    termId,
    traitId,
  }: {
    studentId?: string;
    termId?: string;
    traitId?: string;
  }): CancelablePromise<Array<StudentTraitAssessmentDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/student-trait-assessments',
      query: {
        studentId: studentId,
        termId: termId,
        traitId: traitId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * saveStudentTraitAssessments
   * @returns StudentTraitAssessmentDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static saveStudentTraitAssessmentsUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: CreateStudentTraitAssessmentsRequest;
  }): CancelablePromise<Array<StudentTraitAssessmentDto> | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/student-trait-assessments',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
