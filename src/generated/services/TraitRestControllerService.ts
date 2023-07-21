/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClassLevelTraitConfigurationResponse } from '../models/ClassLevelTraitConfigurationResponse';
import type { ClassLevelTraitGroupRequest } from '../models/ClassLevelTraitGroupRequest';
import type { ClassLevelTraitRatingRequest } from '../models/ClassLevelTraitRatingRequest';
import type { CreateSingleTraitDefinitionRequest } from '../models/CreateSingleTraitDefinitionRequest';
import type { CreateSingleTraitRequest } from '../models/CreateSingleTraitRequest';
import type { CreateTraitRatingRequest } from '../models/CreateTraitRatingRequest';
import type { CreateTraitResponse } from '../models/CreateTraitResponse';
import type { TraitConfigurationCreateRequest } from '../models/TraitConfigurationCreateRequest';
import type { TraitConfigurationResponse } from '../models/TraitConfigurationResponse';
import type { TraitDefinitionDto } from '../models/TraitDefinitionDto';
import type { TraitDto } from '../models/TraitDto';
import type { TraitRatingDefinitionDto } from '../models/TraitRatingDefinitionDto';
import type { TraitRatingDto } from '../models/TraitRatingDto';
import type { TraitRatingResponse } from '../models/TraitRatingResponse';
import type { UpdateTraitDefinitionRequest } from '../models/UpdateTraitDefinitionRequest';
import type { UpdateTraitRatingDefinitionRequest } from '../models/UpdateTraitRatingDefinitionRequest';
import type { UpdateTraitRatingRequest } from '../models/UpdateTraitRatingRequest';
import type { UpdateTraitRequest } from '../models/UpdateTraitRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TraitRestControllerService {
  /**
   * getTraitConfigurations
   * @returns TraitConfigurationResponse OK
   * @throws ApiError
   */
  public static getTraitConfigurationsUsingGet(): CancelablePromise<
    Array<TraitConfigurationResponse>
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/trait-configuration',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * configureTraits
   * @returns TraitConfigurationResponse OK
   * @returns any Created
   * @throws ApiError
   */
  public static configureTraitsUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: TraitConfigurationCreateRequest;
  }): CancelablePromise<TraitConfigurationResponse | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/trait-configuration',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createClassLevelTraitRatings
   * @returns any OK
   * @throws ApiError
   */
  public static createClassLevelTraitRatingsUsingPost1({
    requests,
    termId,
  }: {
    /**
     * requests
     */
    requests: Array<ClassLevelTraitRatingRequest>;
    /**
     * term_id
     */
    termId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/trait-configuration/class-level-trait-ratings/{term_id}',
      path: {
        term_id: termId,
      },
      body: requests,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getClassLevelTraitConfiguration
   * @returns ClassLevelTraitConfigurationResponse OK
   * @throws ApiError
   */
  public static getClassLevelTraitConfigurationUsingGet({
    armId,
    classLevelId,
    termId,
  }: {
    armId?: string;
    classLevelId?: string;
    termId?: string;
  }): CancelablePromise<ClassLevelTraitConfigurationResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/trait-configuration/class-level-traits',
      query: {
        armId: armId,
        classLevelId: classLevelId,
        termId: termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createClassLevelTraitGroups
   * @returns any OK
   * @throws ApiError
   */
  public static createClassLevelTraitGroupsUsingPost({
    requests,
    termId,
  }: {
    /**
     * requests
     */
    requests: Array<ClassLevelTraitGroupRequest>;
    /**
     * term_id
     */
    termId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/trait-configuration/class-level-traits/{term_id}',
      path: {
        term_id: termId,
      },
      body: requests,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createTraitDefinition
   * @returns TraitDefinitionDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static createTraitDefinitionUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: CreateSingleTraitDefinitionRequest;
  }): CancelablePromise<TraitDefinitionDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/trait-configuration/trait-definitions',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateTraitDefinition
   * @returns TraitDefinitionDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateTraitDefinitionUsingPut({
    request,
    traitDefinitionId,
  }: {
    /**
     * request
     */
    request: UpdateTraitDefinitionRequest;
    /**
     * trait-definition-id
     */
    traitDefinitionId: string;
  }): CancelablePromise<TraitDefinitionDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/trait-configuration/trait-definitions/{trait-definition-id}',
      path: {
        'trait-definition-id': traitDefinitionId,
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
   * deleteTraitDefinition
   * @returns any OK
   * @throws ApiError
   */
  public static deleteTraitDefinitionUsingDelete({
    traitDefinitionId,
  }: {
    /**
     * trait-definition-id
     */
    traitDefinitionId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/trait-configuration/trait-definitions/{trait-definition-id}',
      path: {
        'trait-definition-id': traitDefinitionId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }

  /**
   * deleteTraitsGroupAndDefinitions
   * @returns any OK
   * @throws ApiError
   */
  public static deleteTraitsGroupAndDefinitionsUsingDelete({
    traitGroupId,
  }: {
    /**
     * trait-group-id
     */
    traitGroupId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/trait-configuration/trait-groups/{trait-group-id}',
      path: {
        'trait-group-id': traitGroupId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }

  /**
   * getTraitRatings
   * @returns TraitRatingResponse OK
   * @throws ApiError
   */
  public static getTraitRatingsUsingGet(): CancelablePromise<Array<TraitRatingResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/trait-configuration/trait-ratings',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createTraitRating
   * @returns TraitRatingResponse OK
   * @returns any Created
   * @throws ApiError
   */
  public static createTraitRatingUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: CreateTraitRatingRequest;
  }): CancelablePromise<TraitRatingResponse | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/trait-configuration/trait-ratings',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateTraitRatingDefinitions
   * @returns TraitRatingDefinitionDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateTraitRatingDefinitionsUsingPut({
    ratingDefinitions,
  }: {
    /**
     * ratingDefinitions
     */
    ratingDefinitions: Array<TraitRatingDefinitionDto>;
  }): CancelablePromise<Array<TraitRatingDefinitionDto> | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/trait-configuration/trait-ratings/definitions/all',
      body: ratingDefinitions,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateTraitRatingDefinition
   * @returns TraitRatingDefinitionDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateTraitRatingDefinitionUsingPut({
    ratingDefinitionId,
    request,
  }: {
    /**
     * rating-definition-id
     */
    ratingDefinitionId: string;
    /**
     * request
     */
    request: UpdateTraitRatingDefinitionRequest;
  }): CancelablePromise<TraitRatingDefinitionDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/trait-configuration/trait-ratings/definitions/{rating-definition-id}',
      path: {
        'rating-definition-id': ratingDefinitionId,
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
   * deleteTraitRatingDefinition
   * @returns any OK
   * @throws ApiError
   */
  public static deleteTraitRatingDefinitionUsingDelete({
    ratingDefinitionId,
  }: {
    /**
     * rating-definition-id
     */
    ratingDefinitionId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/trait-configuration/trait-ratings/definitions/{rating-definition-id}',
      path: {
        'rating-definition-id': ratingDefinitionId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }

  /**
   * getTraitRatings
   * @returns TraitRatingResponse OK
   * @throws ApiError
   */
  public static getTraitRatingsUsingGet1({
    termId,
  }: {
    /**
     * term_id
     */
    termId: string;
  }): CancelablePromise<Array<TraitRatingResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/trait-configuration/trait-ratings/termly/{term_id}',
      path: {
        term_id: termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateTraitRating
   * @returns TraitRatingDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateTraitRatingUsingPut({
    request,
    traitRatingId,
  }: {
    /**
     * request
     */
    request: UpdateTraitRatingRequest;
    /**
     * trait-rating-id
     */
    traitRatingId: string;
  }): CancelablePromise<TraitRatingDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/trait-configuration/trait-ratings/{trait-rating-id}',
      path: {
        'trait-rating-id': traitRatingId,
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
   * deleteTraitRating
   * @returns any OK
   * @throws ApiError
   */
  public static deleteTraitRatingUsingDelete({
    forceDelete,
    traitRatingId,
  }: {
    /**
     * force-delete
     */
    forceDelete: string;
    /**
     * trait-rating-id
     */
    traitRatingId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/trait-configuration/trait-ratings/{trait-rating-id}',
      path: {
        'trait-rating-id': traitRatingId,
      },
      query: {
        'force-delete': forceDelete,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }

  /**
   * createTraitAndDefinitions
   * @returns CreateTraitResponse OK
   * @returns any Created
   * @throws ApiError
   */
  public static createTraitAndDefinitionsUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: CreateSingleTraitRequest;
  }): CancelablePromise<CreateTraitResponse | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/trait-configuration/traits',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getTraitGroups
   * @returns TraitConfigurationResponse OK
   * @throws ApiError
   */
  public static getTraitGroupsUsingGet({
    termId,
  }: {
    /**
     * term_id
     */
    termId: string;
  }): CancelablePromise<Array<TraitConfigurationResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/trait-configuration/traits/termly/{term_id}',
      path: {
        term_id: termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateTrait
   * @returns TraitDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateTraitUsingPut({
    request,
    traitId,
  }: {
    /**
     * request
     */
    request: UpdateTraitRequest;
    /**
     * trait-id
     */
    traitId: string;
  }): CancelablePromise<TraitDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/trait-configuration/traits/{trait-id}',
      path: {
        'trait-id': traitId,
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
   * deleteTrait
   * @returns any OK
   * @throws ApiError
   */
  public static deleteTraitUsingDelete({
    traitId,
  }: {
    /**
     * trait-id
     */
    traitId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/trait-configuration/traits/{trait-id}',
      path: {
        'trait-id': traitId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }
}
