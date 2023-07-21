/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssessmentApprovalResponse } from '../models/AssessmentApprovalResponse';
import type { UpdateAssessmentApprovalRequest } from '../models/UpdateAssessmentApprovalRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AssessmentApprovalRestControllerService {
  /**
   * getAllAsessmentApprovals
   * @returns AssessmentApprovalResponse OK
   * @throws ApiError
   */
  public static getAllAsessmentApprovalsUsingGet({
    armId,
    classLevelId,
    subjectId,
    termId,
  }: {
    armId: string;
    classLevelId: string;
    subjectId: string;
    termId: string;
  }): CancelablePromise<Array<AssessmentApprovalResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/assessment-approval',
      query: {
        armId: armId,
        classLevelId: classLevelId,
        subjectId: subjectId,
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
   * updateAssessmentApprovals
   * @returns any OK
   * @throws ApiError
   */
  public static updateAssessmentApprovalsUsingPut({
    request,
    claims,
    headers,
    tokenValue,
  }: {
    /**
     * request
     */
    request: UpdateAssessmentApprovalRequest;
    claims?: any;
    headers?: any;
    tokenValue?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/assessment-approval',
      query: {
        claims: claims,
        headers: headers,
        tokenValue: tokenValue,
      },
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
