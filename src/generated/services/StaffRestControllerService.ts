/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InputStreamResource } from '../models/InputStreamResource';
import type { Page_StaffDto_ } from '../models/Page_StaffDto_';
import type { StaffDashboardStats } from '../models/StaffDashboardStats';
import type { StaffDto } from '../models/StaffDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StaffRestControllerService {
  /**
   * getAllStaff
   * @returns Page_StaffDto_ OK
   * @throws ApiError
   */
  public static getAllStaffUsingGet({
    limit,
    offset,
    search = ' ',
    staffType,
  }: {
    limit?: number;
    offset?: number;
    /**
     * search
     */
    search?: string;
    /**
     * staff-type
     */
    staffType?: 'ACADEMIC' | 'NON_ACADEMIC';
  }): CancelablePromise<Page_StaffDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/staff',
      query: {
        limit: limit,
        offset: offset,
        search: search,
        'staff-type': staffType,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createStaff
   * @returns StaffDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static createStaffUsingPost({
    staff,
    xTenantId,
    photo,
  }: {
    /**
     * staff
     */
    staff: string;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
    /**
     * photo
     */
    photo?: Blob;
  }): CancelablePromise<StaffDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/staff',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      query: {
        staff: staff,
      },
      body: photo,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateStaff
   * @returns StaffDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateStaffUsingPut({
    dto,
  }: {
    /**
     * dto
     */
    dto: StaffDto;
  }): CancelablePromise<StaffDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/staff',
      body: dto,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * fetchAllAcademicStaff
   * @returns StaffDto OK
   * @throws ApiError
   */
  public static fetchAllAcademicStaffUsingGet(): CancelablePromise<Array<StaffDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/staff/academic-staff',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * downloadBulkUploadTemplate
   * @returns InputStreamResource OK
   * @throws ApiError
   */
  public static downloadBulkUploadTemplateUsingGet2({
    xTenantId,
  }: {
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<InputStreamResource> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/staff/downloads/template',
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
   * filterStaff
   * @returns Page_StaffDto_ OK
   * @throws ApiError
   */
  public static filterStaffUsingGet({
    limit,
    offset,
    role = -1,
    staffType,
  }: {
    limit?: number;
    offset?: number;
    /**
     * role
     */
    role?: number;
    /**
     * staffType
     */
    staffType?: 'ACADEMIC' | 'NON_ACADEMIC';
  }): CancelablePromise<Page_StaffDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/staff/filter',
      query: {
        limit: limit,
        offset: offset,
        role: role,
        staffType: staffType,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getStaffStatistics
   * @returns StaffDashboardStats OK
   * @throws ApiError
   */
  public static getStaffStatisticsUsingGet(): CancelablePromise<StaffDashboardStats> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/staff/statistics',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * bulkUploadStaffData
   * @returns any OK
   * @throws ApiError
   */
  public static bulkUploadStaffDataUsingPost({
    file,
    xTenantId,
  }: {
    /**
     * file
     */
    file: Blob;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/staff/uploads/template',
      headers: {
        'X-TENANT-ID': xTenantId,
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
   * getStaff
   * @returns StaffDto OK
   * @throws ApiError
   */
  public static getStaffUsingGet({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<StaffDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/staff/{id}',
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
   * deleteStaff
   * @returns any OK
   * @throws ApiError
   */
  public static deleteStaffUsingDelete({
    id,
    permanently,
  }: {
    /**
     * id
     */
    id: string;
    /**
     * permanently
     */
    permanently: boolean;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/staff/{id}',
      path: {
        id: id,
      },
      query: {
        permanently: permanently,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }

  /**
   * uploadProfilePic
   * @returns string OK
   * @returns any Created
   * @throws ApiError
   */
  public static uploadProfilePicUsingPost1({
    id,
    photo,
    xTenantId,
  }: {
    /**
     * id
     */
    id: string;
    /**
     * photo
     */
    photo: Blob;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<string | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/staff/{id}/uploads/profile-pic',
      path: {
        id: id,
      },
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: photo,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
