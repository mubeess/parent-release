/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PayableItemDto } from '../models/PayableItemDto';
import type { PayableItemRequest } from '../models/PayableItemRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PayableItemRestControllerService {
  /**
   * getPayableItems
   * @returns PayableItemDto OK
   * @throws ApiError
   */
  public static getPayableItemsUsingGet({
    search,
  }: {
    /**
     * search
     */
    search?: string;
  }): CancelablePromise<Array<PayableItemDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payable-items',
      query: {
        search: search,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createPayableItem
   * @returns PayableItemDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static createPayableItemUsingPost({
    payableItemRequest,
  }: {
    /**
     * payableItemRequest
     */
    payableItemRequest: PayableItemRequest;
  }): CancelablePromise<PayableItemDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/payable-items',
      body: payableItemRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updatePayableItem
   * @returns PayableItemDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updatePayableItemUsingPut({
    payableItemDto,
  }: {
    /**
     * payableItemDto
     */
    payableItemDto: PayableItemDto;
  }): CancelablePromise<PayableItemDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/payable-items',
      body: payableItemDto,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getPayableItem
   * @returns PayableItemDto OK
   * @throws ApiError
   */
  public static getPayableItemUsingGet({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<PayableItemDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payable-items/{id}',
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
   * deletePayableItem
   * @returns any OK
   * @throws ApiError
   */
  public static deletePayableItemUsingDelete({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/payable-items/{id}',
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
