/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignUserRoleRequest } from '../models/AssignUserRoleRequest';
import type { UmsRoleResponse } from '../models/UmsRoleResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RoleRestControllerService {
  /**
   * getUserRoles
   * @returns UmsRoleResponse OK
   * @throws ApiError
   */
  public static getUserRolesUsingGet({
    userId,
    xTenantId,
  }: {
    /**
     * user-id
     */
    userId: string;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<Array<UmsRoleResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/user-roles',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      query: {
        'user-id': userId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * assignUserRoles
   * @returns UmsRoleResponse OK
   * @returns any Created
   * @throws ApiError
   */
  public static assignUserRolesUsingPut({
    request,
    xTenantId,
  }: {
    /**
     * request
     */
    request: AssignUserRoleRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<Array<UmsRoleResponse> | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/user-roles/assign',
      headers: {
        'X-TENANT-ID': xTenantId,
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
