/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BasicSchoolInformationDto } from '../models/BasicSchoolInformationDto';
import type { BasicSchoolInformationResponse } from '../models/BasicSchoolInformationResponse';
import type { Page_BasicSchoolInformationDto_ } from '../models/Page_BasicSchoolInformationDto_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BasicSchoolInformationRestControllerService {
  /**
   * createSchoolInformation
   * @returns BasicSchoolInformationDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static createSchoolInformationUsingPost({
    logo,
    schoolInformation,
  }: {
    /**
     * logo
     */
    logo: Blob;
    /**
     * school-information
     */
    schoolInformation: string;
  }): CancelablePromise<BasicSchoolInformationDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/school-info',
      query: {
        'school-information': schoolInformation,
      },
      body: logo,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateSchoolInformation
   * @returns BasicSchoolInformationDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateSchoolInformationUsingPut({
    schoolInformationDto,
  }: {
    /**
     * schoolInformationDto
     */
    schoolInformationDto: BasicSchoolInformationDto;
  }): CancelablePromise<BasicSchoolInformationDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/school-info',
      body: schoolInformationDto,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getAllSchoolInformation
   * @returns Page_BasicSchoolInformationDto_ OK
   * @throws ApiError
   */
  public static getAllSchoolInformationUsingGet({
    search,
    limit,
    offset,
  }: {
    /**
     * search
     */
    search: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<Page_BasicSchoolInformationDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/school-info/all',
      query: {
        limit: limit,
        offset: offset,
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
   * getSchoolInformationByParentEmail
   * @returns BasicSchoolInformationDto OK
   * @throws ApiError
   */
  public static getSchoolInformationByParentEmailUsingGet({
    email,
  }: {
    /**
     * email
     */
    email: string;
  }): CancelablePromise<Array<BasicSchoolInformationDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/school-info/by-parent/{email}',
      path: {
        email: email,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * uploadSchoolLogo
   * @returns string OK
   * @returns any Created
   * @throws ApiError
   */
  public static uploadSchoolLogoUsingPost({
    logo,
    xTenantId,
  }: {
    /**
     * logo
     */
    logo: Blob;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<string | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/school-info/uploads/logo',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: logo,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * uploadPrincipalSignature
   * @returns any OK
   * @throws ApiError
   */
  public static uploadPrincipalSignatureUsingPost({
    principalSignature,
    xTenantId,
  }: {
    /**
     * principal-signature
     */
    principalSignature: Blob;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/school-info/uploads/principal-signature',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: principalSignature,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * schoolExists
   * @returns boolean OK
   * @throws ApiError
   */
  public static schoolExistsUsingGet({
    tenantId,
  }: {
    /**
     * tenant-id
     */
    tenantId: string;
  }): CancelablePromise<boolean> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/school-info/validate',
      query: {
        'tenant-id': tenantId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getSchoolInformation
   * @returns BasicSchoolInformationResponse OK
   * @throws ApiError
   */
  public static getSchoolInformationUsingGet({
    schoolId,
  }: {
    /**
     * school-id
     */
    schoolId: string;
  }): CancelablePromise<BasicSchoolInformationResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/school-info/{school-id}',
      path: {
        'school-id': schoolId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
