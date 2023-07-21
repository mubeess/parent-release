/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignDefaultTemplateRequest } from '../models/AssignDefaultTemplateRequest';
import type { ReportGenerationConfigRequest } from '../models/ReportGenerationConfigRequest';
import type { ResultGenerationConfigDto } from '../models/ResultGenerationConfigDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ResultGenerationConfigRestControllerService {
  /**
   * getConfigs
   * @returns ResultGenerationConfigDto OK
   * @throws ApiError
   */
  public static getConfigsUsingGet(): CancelablePromise<Array<ResultGenerationConfigDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/result-generation-configs',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * saveConfig
   * @returns ResultGenerationConfigDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static saveConfigUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: ReportGenerationConfigRequest;
  }): CancelablePromise<ResultGenerationConfigDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/result-generation-configs',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getClassLevelConfigs
   * @returns ResultGenerationConfigDto OK
   * @throws ApiError
   */
  public static getClassLevelConfigsUsingGet({
    classLevelId,
  }: {
    /**
     * class-level-id
     */
    classLevelId: string;
  }): CancelablePromise<Array<ResultGenerationConfigDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/result-generation-configs/class-levels/{class-level-id}',
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
   * saveDefaultTemplateForClassLevel
   * @returns ResultGenerationConfigDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static saveDefaultTemplateForClassLevelUsingPost({
    classLevelId,
    request,
  }: {
    /**
     * class-level-id
     */
    classLevelId: string;
    /**
     * request
     */
    request: AssignDefaultTemplateRequest;
  }): CancelablePromise<ResultGenerationConfigDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/result-generation-configs/class-levels/{class-level-id}',
      path: {
        'class-level-id': classLevelId,
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
   * updateConfig
   * @returns ResultGenerationConfigDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateConfigUsingPut({
    id,
    request,
  }: {
    /**
     * id
     */
    id: string;
    /**
     * request
     */
    request: ReportGenerationConfigRequest;
  }): CancelablePromise<ResultGenerationConfigDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/result-generation-configs/{id}',
      path: {
        id: id,
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
   * deleteConfig
   * @returns any OK
   * @throws ApiError
   */
  public static deleteConfigUsingDelete({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/result-generation-configs/{id}',
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
