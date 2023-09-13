/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BasicSchoolInformationDto } from '../models/BasicSchoolInformationDto';
import type { ContactResponse } from '../models/ContactResponse';
import type { UserContactsByTypeRequest } from '../models/UserContactsByTypeRequest';
import type { UserContactsByUmsIdsRequest } from '../models/UserContactsByUmsIdsRequest';
import type { UserResponse } from '../models/UserResponse';
import type { UsersByTypeRequest } from '../models/UsersByTypeRequest';
import type { UsersByUMSIdsRequest } from '../models/UsersByUMSIdsRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DashboardApiControllerService {
  /**
   * userContactsByUmsIds
   * @returns ContactResponse OK
   * @returns any Created
   * @throws ApiError
   */
  public static userContactsByUmsIdsUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: UserContactsByUmsIdsRequest;
  }): CancelablePromise<Array<ContactResponse> | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/dashboard/contacts-by-ums-ids',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * userContactsByUserType
   * @returns ContactResponse OK
   * @returns any Created
   * @throws ApiError
   */
  public static userContactsByUserTypeUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: UserContactsByTypeRequest;
  }): CancelablePromise<Array<ContactResponse> | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/dashboard/contacts-by-user-type',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * allSchoolIds
   * @returns string OK
   * @throws ApiError
   */
  public static allSchoolIdsUsingGet(): CancelablePromise<Array<string>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/dashboard/school-ids',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * allSchoolIdsByAcquisitionType
   * @returns string OK
   * @throws ApiError
   */
  public static allSchoolIdsByAcquisitionTypeUsingGet({
    acquisitionType,
  }: {
    /**
     * acquisitionType
     */
    acquisitionType: 'ACADA_PLUS' | 'PLG' | 'SAFSMS' | 'UBEC';
  }): CancelablePromise<Array<string>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/dashboard/school-ids-by-type/{acquisitionType}',
      path: {
        acquisitionType: acquisitionType,
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
   * schoolsByAcquisitionType
   * @returns BasicSchoolInformationDto OK
   * @throws ApiError
   */
  public static schoolsByAcquisitionTypeUsingGet({
    acquisitionType,
  }: {
    /**
     * acquisitionType
     */
    acquisitionType: 'ACADA_PLUS' | 'PLG' | 'SAFSMS' | 'UBEC';
  }): CancelablePromise<Array<BasicSchoolInformationDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/dashboard/schools-by-type/{acquisitionType}',
      path: {
        acquisitionType: acquisitionType,
      },
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
   * @returns any Created
   * @throws ApiError
   */
  public static usersUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: UsersByUMSIdsRequest;
  }): CancelablePromise<Array<UserResponse> | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/dashboard/users',
      body: request,
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
   * @returns any Created
   * @throws ApiError
   */
  public static usersByTypeUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: UsersByTypeRequest;
  }): CancelablePromise<Array<UserResponse> | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/dashboard/users/user-types',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
