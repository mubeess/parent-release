/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateOnboardingStepRequest } from '../models/UpdateOnboardingStepRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OnboaringRestControllerService {
  /**
   * updateOnboardingStep
   * @returns any OK
   * @throws ApiError
   */
  public static updateOnboardingStepUsingPut({
    updateOnboardingStepRequest,
    xTenantId,
  }: {
    /**
     * updateOnboardingStepRequest
     */
    updateOnboardingStepRequest: UpdateOnboardingStepRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/onboarding',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: updateOnboardingStepRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * deleteOnboardingStep
   * @returns any OK
   * @throws ApiError
   */
  public static deleteOnboardingStepUsingDelete({
    stepId,
    xTenantId,
  }: {
    /**
     * stepId
     */
    stepId: string;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/onboarding/{stepId}',
      path: {
        stepId: stepId,
      },
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }
}
