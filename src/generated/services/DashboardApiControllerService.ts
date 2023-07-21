/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BasicSchoolInformationDto } from '../models/BasicSchoolInformationDto';
import type { ContactResponse } from '../models/ContactResponse';
import type { UserResponse } from '../models/UserResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DashboardApiControllerService {
  /**
   * userContacts
   * @returns ContactResponse OK
   * @throws ApiError
   */
  public static userContactsUsingGet({
    schoolIds,
    userIds,
  }: {
    /**
     * school_ids
     */
    schoolIds: Array<string>;
    /**
     * user_ids
     */
    userIds: Array<string>;
  }): CancelablePromise<Array<ContactResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/dashboard/contacts',
      query: {
        school_ids: schoolIds,
        user_ids: userIds,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * schools
   * @returns BasicSchoolInformationDto OK
   * @throws ApiError
   */
  public static schoolsUsingGet(): CancelablePromise<Array<BasicSchoolInformationDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/dashboard/schools',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * users
   * @returns UserResponse OK
   * @throws ApiError
   */
  public static usersUsingGet({
    userIds,
  }: {
    /**
     * user_ids
     */
    userIds: Array<string>;
  }): CancelablePromise<Array<UserResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/dashboard/users',
      query: {
        user_ids: userIds,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * usersByType
   * @returns UserResponse OK
   * @throws ApiError
   */
  public static usersByTypeUsingGet({
    schoolIds,
    userTypes,
  }: {
    /**
     * school_ids
     */
    schoolIds: Array<string>;
    /**
     * user_types
     */
    userTypes: Array<string>;
  }): CancelablePromise<Array<UserResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/dashboard/users/user-types',
      query: {
        school_ids: schoolIds,
        user_types: userTypes,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
