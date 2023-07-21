/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApproveOrDeclineDto } from '../models/ApproveOrDeclineDto';
import type { EditStaffRequestData } from '../models/EditStaffRequestData';
import type { Page_ProfileEditRequestDto_ } from '../models/Page_ProfileEditRequestDto_';
import type { ProfileEditRequestDto } from '../models/ProfileEditRequestDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProfileEditRequestRestControllerService {
  /**
   * getAll
   * @returns Page_ProfileEditRequestDto_ OK
   * @throws ApiError
   */
  public static getAllUsingGet1({
    limit,
    offset,
    search,
  }: {
    limit?: number;
    offset?: number;
    /**
     * search
     */
    search?: string;
  }): CancelablePromise<Page_ProfileEditRequestDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/staff/profile-edit',
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
   * saveEditRequest
   * @returns ProfileEditRequestDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static saveEditRequestUsingPost({
    editStaffRequestData,
  }: {
    /**
     * editStaffRequestData
     */
    editStaffRequestData: EditStaffRequestData;
  }): CancelablePromise<ProfileEditRequestDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/staff/profile-edit',
      body: editStaffRequestData,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * filterEditRequest
   * @returns Page_ProfileEditRequestDto_ OK
   * @throws ApiError
   */
  public static filterEditRequestUsingGet({
    approvalType,
    limit,
    offset,
  }: {
    /**
     * approvalType
     */
    approvalType?: 'APPROVED' | 'DECLINED' | 'PENDING';
    limit?: number;
    offset?: number;
  }): CancelablePromise<Page_ProfileEditRequestDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/staff/profile-edit/filter',
      query: {
        approvalType: approvalType,
        limit: limit,
        offset: offset,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * approveOrDeclineEditRequest
   * @returns ProfileEditRequestDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static approveOrDeclineEditRequestUsingPut({
    approveOrDeclineDto,
    requestId,
  }: {
    /**
     * approveOrDeclineDto
     */
    approveOrDeclineDto: ApproveOrDeclineDto;
    /**
     * request-id
     */
    requestId: string;
  }): CancelablePromise<ProfileEditRequestDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/staff/profile-edit/{request-id}',
      path: {
        'request-id': requestId,
      },
      body: approveOrDeclineDto,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getProfileRequest
   * @returns ProfileEditRequestDto OK
   * @throws ApiError
   */
  public static getProfileRequestUsingGet({
    staffId,
  }: {
    /**
     * staff-id
     */
    staffId: string;
  }): CancelablePromise<Array<ProfileEditRequestDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/staff/profile-edit/{staff-id}',
      path: {
        'staff-id': staffId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
