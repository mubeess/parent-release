/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubscriptionPlanDto } from '../models/SubscriptionPlanDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubscriptionPlanRestControllerService {
  /**
   * getSubscriptionPlans
   * @returns SubscriptionPlanDto OK
   * @throws ApiError
   */
  public static getSubscriptionPlansUsingGet(): CancelablePromise<Array<SubscriptionPlanDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/subscription-plan',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createSubscriptionPlan
   * @returns any OK
   * @throws ApiError
   */
  public static createSubscriptionPlanUsingPost({
    subscriptionPlanDto,
  }: {
    /**
     * subscriptionPlanDto
     */
    subscriptionPlanDto: SubscriptionPlanDto;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/subscription-plan',
      body: subscriptionPlanDto,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateSubscriptionPlan
   * @returns any OK
   * @throws ApiError
   */
  public static updateSubscriptionPlanUsingPut({
    subscriptionPlanDto,
  }: {
    /**
     * subscriptionPlanDto
     */
    subscriptionPlanDto: SubscriptionPlanDto;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/subscription-plan',
      body: subscriptionPlanDto,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getFeatures
   * @returns string OK
   * @throws ApiError
   */
  public static getFeaturesUsingGet(): CancelablePromise<
    Array<
      | 'ATTENDANCE_REPORT_AND_ANALYSIS'
      | 'BEHAVIOUR_ASSESSMENT'
      | 'CBT_EXAMS'
      | 'CLASS_ATTENDANCE'
      | 'COMMUNICATION_BOOK'
      | 'CONFIGURATION_REMINDERS'
      | 'EVENT_REMINDERS'
      | 'FEES_INVOICE_CONFIGURATION'
      | 'INSTANT_MESSAGING'
      | 'LESSONS_TRACKING'
      | 'LESSON_ASSISTED_DELIVERY'
      | 'LESSON_PLANING'
      | 'PARENT_INVOICE_CONFIGURATION'
      | 'PARENT_PORTAL_ACCESS'
      | 'QUESTION_BANK'
      | 'QUIZZES_AND_ASSIGNMENTS'
      | 'SCHEDULED_MESSAGING'
      | 'SCHOOL_FEES_PAYMENT'
      | 'SCHOOL_FEES_PAYMENT_ANALYSIS'
      | 'STUDENT_ENROLLMENT'
      | 'STUDENT_PERFORMANCE_ANALYSIS'
      | 'STUDENT_PROGRESS_REPORT'
      | 'SUBJECT_ATTENDANCE'
      | 'TEACHERS_ENROLLMENT'
      | 'TIME_TABLE'
    >
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/subscription-plan/features',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getSubscriptionPlan
   * @returns SubscriptionPlanDto OK
   * @throws ApiError
   */
  public static getSubscriptionPlanUsingGet({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<SubscriptionPlanDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/subscription-plan/{id}',
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
}
