/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LgaDto } from '../models/LgaDto';
import type { StateDto } from '../models/StateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StateRestControllerService {
  /**
   * getAllStates
   * @returns StateDto OK
   * @throws ApiError
   */
  public static getAllStatesUsingGet(): CancelablePromise<Array<StateDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/states',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getStateById
   * @returns StateDto OK
   * @throws ApiError
   */
  public static getStateByIdUsingGet({
    countryCode,
    stateCode,
  }: {
    /**
     * country-code
     */
    countryCode: string;
    /**
     * state-code
     */
    stateCode: string;
  }): CancelablePromise<StateDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/states/{country-code}/{state-code}',
      path: {
        'country-code': countryCode,
        'state-code': stateCode,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getLgasByState
   * @returns LgaDto OK
   * @throws ApiError
   */
  public static getLgasByStateUsingGet({
    stateCode,
  }: {
    /**
     * state-code
     */
    stateCode: string;
  }): CancelablePromise<Array<LgaDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/states/{state-code}/lgas',
      path: {
        'state-code': stateCode,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
