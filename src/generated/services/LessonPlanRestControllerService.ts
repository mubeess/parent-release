/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LessonPlanChangeRequest } from '../models/LessonPlanChangeRequest';
import type { LessonPlanDto } from '../models/LessonPlanDto';
import type { Page_LessonPlanDto_ } from '../models/Page_LessonPlanDto_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LessonPlanRestControllerService {
  /**
   * createLessonPlan
   * @returns LessonPlanDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static createLessonPlanUsingPost({
    files,
  }: {
    files?: Array<Blob>;
  }): CancelablePromise<LessonPlanDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/lesson-plan',
      formData: {
        files: files,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateLessonPlan
   * @returns LessonPlanDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateLessonPlanUsingPut({
    dto,
  }: {
    /**
     * dto
     */
    dto: LessonPlanDto;
  }): CancelablePromise<LessonPlanDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/lesson-plan',
      body: dto,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * approveLessonPlan
   * @returns any OK
   * @throws ApiError
   */
  public static approveLessonPlanUsingPost({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/lesson-plan/approve/{id}',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * filterLessonPlansByCreator
   * @returns Page_LessonPlanDto_ OK
   * @throws ApiError
   */
  public static filterLessonPlansByCreatorUsingGet({
    id,
    approverId,
    armId,
    classLevelId,
    creatorId,
    limit,
    offset,
    search,
    status,
    subjectId,
    termId,
    weekId,
  }: {
    /**
     * id
     */
    id: string;
    approverId?: string;
    armId?: string;
    classLevelId?: string;
    creatorId?: string;
    limit?: number;
    offset?: number;
    search?: string;
    status?: 'APPROVED' | 'CHANGE_REQUESTED' | 'DRAFT' | 'IN_REVIEW';
    subjectId?: string;
    termId?: string;
    weekId?: string;
  }): CancelablePromise<Page_LessonPlanDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/lesson-plan/creator/{id}',
      path: {
        id: id,
      },
      query: {
        approverId: approverId,
        armId: armId,
        classLevelId: classLevelId,
        creatorId: creatorId,
        limit: limit,
        offset: offset,
        search: search,
        status: status,
        subjectId: subjectId,
        termId: termId,
        weekId: weekId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * downloadLessonPlans
   * @returns LessonPlanDto OK
   * @throws ApiError
   */
  public static downloadLessonPlansUsingGet({
    approverId,
    armId,
    classLevelId,
    creatorId,
    search,
    status,
    subjectId,
    termId,
    weekId,
  }: {
    approverId?: string;
    armId?: string;
    classLevelId?: string;
    creatorId?: string;
    search?: string;
    status?: 'APPROVED' | 'CHANGE_REQUESTED' | 'DRAFT' | 'IN_REVIEW';
    subjectId?: string;
    termId?: string;
    weekId?: string;
  }): CancelablePromise<Array<LessonPlanDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/lesson-plan/download',
      query: {
        approverId: approverId,
        armId: armId,
        classLevelId: classLevelId,
        creatorId: creatorId,
        search: search,
        status: status,
        subjectId: subjectId,
        termId: termId,
        weekId: weekId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * fetchLessonPlansInReview
   * @returns Page_LessonPlanDto_ OK
   * @throws ApiError
   */
  public static fetchLessonPlansInReviewUsingGet({
    id,
    approverId,
    armId,
    classLevelId,
    creatorId,
    limit,
    offset,
    search,
    status,
    subjectId,
    termId,
    weekId,
  }: {
    /**
     * id
     */
    id: string;
    approverId?: string;
    armId?: string;
    classLevelId?: string;
    creatorId?: string;
    limit?: number;
    offset?: number;
    search?: string;
    status?: 'APPROVED' | 'CHANGE_REQUESTED' | 'DRAFT' | 'IN_REVIEW';
    subjectId?: string;
    termId?: string;
    weekId?: string;
  }): CancelablePromise<Page_LessonPlanDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/lesson-plan/in-review/approver/{id}',
      path: {
        id: id,
      },
      query: {
        approverId: approverId,
        armId: armId,
        classLevelId: classLevelId,
        creatorId: creatorId,
        limit: limit,
        offset: offset,
        search: search,
        status: status,
        subjectId: subjectId,
        termId: termId,
        weekId: weekId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * requestChangesForLessonPlan
   * @returns any OK
   * @throws ApiError
   */
  public static requestChangesForLessonPlanUsingPost({
    lessonPlanChangeRequest,
  }: {
    /**
     * lessonPlanChangeRequest
     */
    lessonPlanChangeRequest: LessonPlanChangeRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/lesson-plan/request-changes',
      body: lessonPlanChangeRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * filterSubmittedLessonPlansByApprover
   * @returns Page_LessonPlanDto_ OK
   * @throws ApiError
   */
  public static filterSubmittedLessonPlansByApproverUsingGet({
    id,
    approverId,
    armId,
    classLevelId,
    creatorId,
    limit,
    offset,
    search,
    status,
    subjectId,
    termId,
    weekId,
  }: {
    /**
     * id
     */
    id: string;
    approverId?: string;
    armId?: string;
    classLevelId?: string;
    creatorId?: string;
    limit?: number;
    offset?: number;
    search?: string;
    status?: 'APPROVED' | 'CHANGE_REQUESTED' | 'DRAFT' | 'IN_REVIEW';
    subjectId?: string;
    termId?: string;
    weekId?: string;
  }): CancelablePromise<Page_LessonPlanDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/lesson-plan/submitted/approver/{id}',
      path: {
        id: id,
      },
      query: {
        approverId: approverId,
        armId: armId,
        classLevelId: classLevelId,
        creatorId: creatorId,
        limit: limit,
        offset: offset,
        search: search,
        status: status,
        subjectId: subjectId,
        termId: termId,
        weekId: weekId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * filterSubmittedLessonPlansByCreator
   * @returns Page_LessonPlanDto_ OK
   * @throws ApiError
   */
  public static filterSubmittedLessonPlansByCreatorUsingGet({
    id,
    approverId,
    armId,
    classLevelId,
    creatorId,
    limit,
    offset,
    search,
    status,
    subjectId,
    termId,
    weekId,
  }: {
    /**
     * id
     */
    id: string;
    approverId?: string;
    armId?: string;
    classLevelId?: string;
    creatorId?: string;
    limit?: number;
    offset?: number;
    search?: string;
    status?: 'APPROVED' | 'CHANGE_REQUESTED' | 'DRAFT' | 'IN_REVIEW';
    subjectId?: string;
    termId?: string;
    weekId?: string;
  }): CancelablePromise<Page_LessonPlanDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/lesson-plan/submitted/creator/{id}',
      path: {
        id: id,
      },
      query: {
        approverId: approverId,
        armId: armId,
        classLevelId: classLevelId,
        creatorId: creatorId,
        limit: limit,
        offset: offset,
        search: search,
        status: status,
        subjectId: subjectId,
        termId: termId,
        weekId: weekId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * filterSubmittedLessonPlansByWeek
   * @returns Page_LessonPlanDto_ OK
   * @throws ApiError
   */
  public static filterSubmittedLessonPlansByWeekUsingGet({
    id,
    approverId,
    armId,
    classLevelId,
    creatorId,
    limit,
    offset,
    search,
    status,
    subjectId,
    termId,
    weekId,
  }: {
    /**
     * id
     */
    id: string;
    approverId?: string;
    armId?: string;
    classLevelId?: string;
    creatorId?: string;
    limit?: number;
    offset?: number;
    search?: string;
    status?: 'APPROVED' | 'CHANGE_REQUESTED' | 'DRAFT' | 'IN_REVIEW';
    subjectId?: string;
    termId?: string;
    weekId?: string;
  }): CancelablePromise<Page_LessonPlanDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/lesson-plan/submitted/week/{id}',
      path: {
        id: id,
      },
      query: {
        approverId: approverId,
        armId: armId,
        classLevelId: classLevelId,
        creatorId: creatorId,
        limit: limit,
        offset: offset,
        search: search,
        status: status,
        subjectId: subjectId,
        termId: termId,
        weekId: weekId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getLateSubmisions
   * @returns Page_LessonPlanDto_ OK
   * @throws ApiError
   */
  public static getLateSubmisionsUsingGet({
    id,
    limit,
    offset,
  }: {
    /**
     * id
     */
    id: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<Page_LessonPlanDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/lesson-plan/submitted/week/{id}/late',
      path: {
        id: id,
      },
      query: {
        limit: limit,
        offset: offset,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getLessonPlan
   * @returns LessonPlanDto OK
   * @throws ApiError
   */
  public static getLessonPlanUsingGet({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<LessonPlanDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/lesson-plan/{id}',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * deleteLessonPlan
   * @returns any OK
   * @throws ApiError
   */
  public static deleteLessonPlanUsingDelete({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/lesson-plan/{id}',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }
}
