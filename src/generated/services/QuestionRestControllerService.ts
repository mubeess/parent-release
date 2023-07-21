/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_QuestionDto_ } from '../models/Page_QuestionDto_';
import type { QuestionDto } from '../models/QuestionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QuestionRestControllerService {
  /**
   * createQuestion
   * @returns QuestionDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static createQuestionUsingPost({
    question,
    image,
  }: {
    /**
     * question
     */
    question: string;
    /**
     * image
     */
    image?: Blob;
  }): CancelablePromise<QuestionDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/cbt/questions',
      query: {
        question: question,
      },
      body: image,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateQuestion
   * @returns QuestionDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateQuestionUsingPut({
    question,
    image,
  }: {
    /**
     * question
     */
    question: string;
    /**
     * image
     */
    image?: Blob;
  }): CancelablePromise<QuestionDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/cbt/questions',
      query: {
        question: question,
      },
      body: image,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * downloadBulkUploadTemplate
   * @returns any OK
   * @throws ApiError
   */
  public static downloadBulkUploadTemplateUsingGet1({
    xTenantId,
  }: {
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/cbt/questions/downloads/template',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getQuestion
   * @returns Page_QuestionDto_ OK
   * @throws ApiError
   */
  public static getQuestionUsingGet1({
    classLevelId,
    subjectId,
    limit,
    offset,
    search,
  }: {
    /**
     * class-level-id
     */
    classLevelId: string;
    /**
     * subject-id
     */
    subjectId: string;
    limit?: number;
    offset?: number;
    /**
     * search
     */
    search?: string;
  }): CancelablePromise<Page_QuestionDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/cbt/questions/filter',
      query: {
        'class-level-id': classLevelId,
        limit: limit,
        offset: offset,
        search: search,
        'subject-id': subjectId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * bulkUploadStudentData
   * @returns any OK
   * @throws ApiError
   */
  public static bulkUploadStudentDataUsingPost({
    classLevelId,
    file,
    subjectId,
    xTenantId,
  }: {
    /**
     * class-level-id
     */
    classLevelId: string;
    /**
     * file
     */
    file: Blob;
    /**
     * subject-id
     */
    subjectId: string;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/cbt/questions/uploads/template',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      query: {
        'class-level-id': classLevelId,
        'subject-id': subjectId,
      },
      body: file,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getQuestion
   * @returns QuestionDto OK
   * @throws ApiError
   */
  public static getQuestionUsingGet({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<QuestionDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/cbt/questions/{id}',
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
   * deleteQuestion
   * @returns any OK
   * @throws ApiError
   */
  public static deleteQuestionUsingDelete({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/cbt/questions/{id}',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }

  /**
   * deleteQuestionImage
   * @returns any OK
   * @throws ApiError
   */
  public static deleteQuestionImageUsingDelete({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/cbt/questions/{id}/image',
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
