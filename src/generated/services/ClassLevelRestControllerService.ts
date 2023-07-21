/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClassLevelDto } from '../models/ClassLevelDto';
import type { ClassLevelRequest } from '../models/ClassLevelRequest';
import type { Page_ClassLevelDto_ } from '../models/Page_ClassLevelDto_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ClassLevelRestControllerService {
  /**
   * getAllClassLevels
   * @returns ClassLevelDto OK
   * @throws ApiError
   */
  public static getAllClassLevelsUsingGet(): CancelablePromise<Array<ClassLevelDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/class-levels',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createClassLevel
   * @returns ClassLevelDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static createClassLevelUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: ClassLevelRequest;
  }): CancelablePromise<ClassLevelDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/class-levels',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateClassLevel
   * @returns ClassLevelDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateClassLevelUsingPut({
    dto,
  }: {
    /**
     * dto
     */
    dto: ClassLevelDto;
  }): CancelablePromise<ClassLevelDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/class-levels',
      body: dto,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateClassLevels
   * @returns ClassLevelDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateClassLevelsUsingPut({
    dtos,
  }: {
    /**
     * dtos
     */
    dtos: Array<ClassLevelDto>;
  }): CancelablePromise<Array<ClassLevelDto> | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/class-levels/batch',
      body: dtos,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * filterClassLevel
   * @returns Page_ClassLevelDto_ OK
   * @throws ApiError
   */
  public static filterClassLevelUsingGet({
    limit,
    offset,
    status,
  }: {
    limit?: number;
    offset?: number;
    /**
     * status
     */
    status?: 'ACTIVE' | 'INACTIVE';
  }): CancelablePromise<Page_ClassLevelDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/class-levels/filter',
      query: {
        limit: limit,
        offset: offset,
        status: status,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createClassLevels
   * @returns ClassLevelDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static createClassLevelsUsingPost({
    classLevelRequestList,
  }: {
    /**
     * classLevelRequestList
     */
    classLevelRequestList: Array<ClassLevelRequest>;
  }): CancelablePromise<Array<ClassLevelDto> | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/class-levels/multiple',
      body: classLevelRequestList,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getAllClassLevels
   * @returns ClassLevelDto OK
   * @throws ApiError
   */
  public static getAllClassLevelsUsingGet1({
    termId,
  }: {
    /**
     * term-id
     */
    termId: string;
  }): CancelablePromise<Array<ClassLevelDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/class-levels/term',
      query: {
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
   * getClassesWithStudentCount
   * @returns ClassLevelDto OK
   * @throws ApiError
   */
  public static getClassesWithStudentCountUsingGet({
    termId,
  }: {
    /**
     * term-id
     */
    termId: string;
  }): CancelablePromise<Array<ClassLevelDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/class-levels/terms',
      query: {
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
   * getClassesWithArmInfos
   * @returns ClassLevelDto OK
   * @throws ApiError
   */
  public static getClassesWithArmInfosUsingGet({
    termId,
  }: {
    /**
     * term_id
     */
    termId: string;
  }): CancelablePromise<Array<ClassLevelDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/class-levels/terms/{term_id}',
      path: {
        term_id: termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * uploadClassLevelSignatures
   * @returns any OK
   * @throws ApiError
   */
  public static uploadClassLevelSignaturesUsingPost({
    classLevelIds,
    signature,
    xTenantId,
  }: {
    /**
     * class-level-ids
     */
    classLevelIds: string;
    /**
     * signature
     */
    signature: Blob;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/class-levels/uploads/signature',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      query: {
        'class-level-ids': classLevelIds,
      },
      body: signature,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * uploadClassLevelSignature
   * @returns string OK
   * @returns any Created
   * @throws ApiError
   */
  public static uploadClassLevelSignatureUsingPost({
    classLevelId,
    signature,
    staffId,
    xTenantId,
  }: {
    /**
     * class-level-id
     */
    classLevelId: string;
    /**
     * signature
     */
    signature: Blob;
    /**
     * staff-id
     */
    staffId: string;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<string | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/class-levels/{class-level-id}/uploads/signature/{staff-id}',
      path: {
        'class-level-id': classLevelId,
        'staff-id': staffId,
      },
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: signature,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getClassLevel
   * @returns ClassLevelDto OK
   * @throws ApiError
   */
  public static getClassLevelUsingGet({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<ClassLevelDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/class-levels/{id}',
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
   * deleteClassLevel
   * @returns any OK
   * @throws ApiError
   */
  public static deleteClassLevelUsingDelete({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/class-levels/{id}',
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
