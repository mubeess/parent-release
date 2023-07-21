/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignFormTeachersRequest } from '../models/AssignFormTeachersRequest';
import type { ClassInformationDto } from '../models/ClassInformationDto';
import type { ClassInformationRequest } from '../models/ClassInformationRequest';
import type { UpdateClassInformationRequest } from '../models/UpdateClassInformationRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ClassInformationRestControllerService {
  /**
   * getClassInformationByParams
   * @returns ClassInformationDto OK
   * @throws ApiError
   */
  public static getClassInformationByParamsUsingGet({
    armId,
    classLevelId,
    termId,
  }: {
    armId?: string;
    classLevelId?: string;
    termId?: string;
  }): CancelablePromise<Array<ClassInformationDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/class-information',
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
   * createClassInformation
   * @returns ClassInformationDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static createClassInformationUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: ClassInformationRequest;
  }): CancelablePromise<Array<ClassInformationDto> | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/class-information',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * deleteClassInformation
   * @returns any OK
   * @throws ApiError
   */
  public static deleteClassInformationUsingDelete({
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
      url: '/class-information',
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
   * assignFormTeachers
   * @returns ClassInformationDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static assignFormTeachersUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: AssignFormTeachersRequest;
  }): CancelablePromise<ClassInformationDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/class-information/form-teachers',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateClassInformation
   * @returns ClassInformationDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateClassInformationUsingPut({
    request,
  }: {
    /**
     * request
     */
    request: UpdateClassInformationRequest;
  }): CancelablePromise<ClassInformationDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/class-information/one',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createClassInformations
   * @returns any OK
   * @throws ApiError
   */
  public static createClassInformationsUsingPost({
    requests,
  }: {
    /**
     * requests
     */
    requests: Array<ClassInformationRequest>;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/class-information/term',
      body: requests,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
