/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LessonPlanTemplateDto } from '../models/LessonPlanTemplateDto';
import type { LessonPlanTemplateRequest } from '../models/LessonPlanTemplateRequest';
import type { Page_LessonPlanTemplateDto_ } from '../models/Page_LessonPlanTemplateDto_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LessonPlanTemplateRestControllerService {
  /**
   * getAll
   * @returns LessonPlanTemplateDto OK
   * @throws ApiError
   */
  public static getAllUsingGet(): CancelablePromise<Array<LessonPlanTemplateDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/lesson-plan-template',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createTemplate
   * @returns any OK
   * @throws ApiError
   */
  public static createTemplateUsingPost1({
    request,
  }: {
    /**
     * request
     */
    request: LessonPlanTemplateRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/lesson-plan-template',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * update
   * @returns LessonPlanTemplateDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateUsingPut({
    templateDto,
  }: {
    /**
     * templateDto
     */
    templateDto: LessonPlanTemplateDto;
  }): CancelablePromise<LessonPlanTemplateDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/lesson-plan-template',
      body: templateDto,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getDefaultTemplate
   * @returns LessonPlanTemplateDto OK
   * @throws ApiError
   */
  public static getDefaultTemplateUsingGet(): CancelablePromise<LessonPlanTemplateDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/lesson-plan-template/default-template',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * findAll
   * @returns Page_LessonPlanTemplateDto_ OK
   * @throws ApiError
   */
  public static findAllUsingGet({
    limit,
    offset,
    searchTerm,
  }: {
    limit?: number;
    offset?: number;
    /**
     * searchTerm
     */
    searchTerm?: string;
  }): CancelablePromise<Page_LessonPlanTemplateDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/lesson-plan-template/paged',
      query: {
        limit: limit,
        offset: offset,
        searchTerm: searchTerm,
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
   * @returns LessonPlanTemplateDto OK
   * @throws ApiError
   */
  public static getByClassLevelUsingGet({
    classLevelId,
  }: {
    /**
     * class-level-id
     */
    classLevelId: string;
  }): CancelablePromise<LessonPlanTemplateDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/lesson-plan-template/{class-level-id}',
      path: {
        'class-level-id': classLevelId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * delete
   * @returns any OK
   * @throws ApiError
   */
  public static deleteUsingDelete1({
    templateId,
  }: {
    /**
     * templateId
     */
    templateId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/lesson-plan-template/{templateId}',
      path: {
        templateId: templateId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }
}
