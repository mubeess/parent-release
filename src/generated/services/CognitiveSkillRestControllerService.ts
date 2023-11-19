/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClassLevelSkillGroupRequest } from '../models/ClassLevelSkillGroupRequest';
import type { ClassLevelSkillRatingRequest } from '../models/ClassLevelSkillRatingRequest';
import type { CognitiveSkillConfigurationResponse } from '../models/CognitiveSkillConfigurationResponse';
import type { CreateSkillRatingsRequest } from '../models/CreateSkillRatingsRequest';
import type { SkillDto } from '../models/SkillDto';
import type { SkillGroupDto } from '../models/SkillGroupDto';
import type { SkillGroupRequest } from '../models/SkillGroupRequest';
import type { SkillRatingConfiguration } from '../models/SkillRatingConfiguration';
import type { SkillRatingConfigurationRequest } from '../models/SkillRatingConfigurationRequest';
import type { SkillRatingDefinitionDto } from '../models/SkillRatingDefinitionDto';
import type { SkillRatingDefinitionRequest } from '../models/SkillRatingDefinitionRequest';
import type { SkillRatingDto } from '../models/SkillRatingDto';
import type { SkillRatingRequest } from '../models/SkillRatingRequest';
import type { SkillRatingResponse } from '../models/SkillRatingResponse';
import type { SkillRequest } from '../models/SkillRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CognitiveSkillRestControllerService {

    /**
     * getCognitiveSkillConfiguration
     * @returns CognitiveSkillConfigurationResponse OK
     * @throws ApiError
     */
    public static getCognitiveSkillConfigurationUsingGet(): CancelablePromise<CognitiveSkillConfigurationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cognitive-skill-config',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createClassLevelSkillGroups
     * @returns any OK
     * @throws ApiError
     */
    public static createClassLevelSkillGroupsUsingPost({
        requests,
        termId,
    }: {
        /**
         * requests
         */
        requests: Array<ClassLevelSkillGroupRequest>,
        /**
         * term_id
         */
        termId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cognitive-skill-config/class-level-skill-group/{term_id}',
            path: {
                'term_id': termId,
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
     * createClassLevelTraitRatings
     * @returns any OK
     * @throws ApiError
     */
    public static createClassLevelTraitRatingsUsingPost({
        requests,
        termId,
    }: {
        /**
         * requests
         */
        requests: Array<ClassLevelSkillRatingRequest>,
        /**
         * term_id
         */
        termId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cognitive-skill-config/class-level-skill-ratings/{term_id}',
            path: {
                'term_id': termId,
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
     * getSkillGroupConfiguration
     * @returns CognitiveSkillConfigurationResponse OK
     * @throws ApiError
     */
    public static getSkillGroupConfigurationUsingGet({
        termId,
    }: {
        /**
         * term_id
         */
        termId: string,
    }): CancelablePromise<CognitiveSkillConfigurationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cognitive-skill-config/skill-group-config/{term_id}',
            path: {
                'term_id': termId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createSkillGroup
     * @returns SkillGroupDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createSkillGroupUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: SkillGroupRequest,
    }): CancelablePromise<SkillGroupDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cognitive-skill-config/skill-groups',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createSkill
     * @returns SkillDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createSkillUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: SkillRequest,
    }): CancelablePromise<SkillDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cognitive-skill-config/skill-groups/skills',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateSkill
     * @returns SkillDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateSkillUsingPut({
        request,
        skillId,
    }: {
        /**
         * request
         */
        request: SkillRequest,
        /**
         * skill-id
         */
        skillId: string,
    }): CancelablePromise<SkillDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/cognitive-skill-config/skill-groups/skills/{skill-id}',
            path: {
                'skill-id': skillId,
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
     * deleteSkill
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSkillUsingDelete({
        skillId,
    }: {
        /**
         * skill-id
         */
        skillId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/cognitive-skill-config/skill-groups/skills/{skill-id}',
            path: {
                'skill-id': skillId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateSkillGroup
     * @returns SkillGroupDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateSkillGroupUsingPut({
        request,
        skillGroupId,
    }: {
        /**
         * request
         */
        request: SkillGroupRequest,
        /**
         * skill-group-id
         */
        skillGroupId: string,
    }): CancelablePromise<SkillGroupDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/cognitive-skill-config/skill-groups/{skill-group-id}',
            path: {
                'skill-group-id': skillGroupId,
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
     * deleteSkillGroup
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSkillGroupUsingDelete({
        forceDelete,
        skillGroupId,
    }: {
        /**
         * force-delete
         */
        forceDelete: string,
        /**
         * skill-group-id
         */
        skillGroupId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/cognitive-skill-config/skill-groups/{skill-group-id}',
            path: {
                'skill-group-id': skillGroupId,
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
     * getSkillRatingByClassLevelAndTerm
     * @returns SkillRatingResponse OK
     * @throws ApiError
     */
    public static getSkillRatingByClassLevelAndTermUsingGet({
        classLevelId,
        termId,
    }: {
        /**
         * classLevelId
         */
        classLevelId: string,
        /**
         * termId
         */
        termId: string,
    }): CancelablePromise<SkillRatingResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cognitive-skill-config/skill-rating',
            query: {
                'classLevelId': classLevelId,
                'termId': termId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createSkillRating
     * @returns SkillRatingConfiguration OK
     * @returns any Created
     * @throws ApiError
     */
    public static createSkillRatingUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: CreateSkillRatingsRequest,
    }): CancelablePromise<SkillRatingConfiguration | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cognitive-skill-config/skill-ratings',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateRatingSkillsAndDefinitions
     * @returns SkillRatingConfiguration OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateRatingSkillsAndDefinitionsUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: SkillRatingConfigurationRequest,
    }): CancelablePromise<SkillRatingConfiguration | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/cognitive-skill-config/skill-ratings',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createSkillRatingDefinition
     * @returns SkillRatingDefinitionDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createSkillRatingDefinitionUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: SkillRatingDefinitionRequest,
    }): CancelablePromise<SkillRatingDefinitionDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cognitive-skill-config/skill-ratings/definitions',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateSkillRatingDefinition
     * @returns SkillRatingDefinitionDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateSkillRatingDefinitionUsingPut({
        definitionId,
        request,
    }: {
        /**
         * definition-id
         */
        definitionId: string,
        /**
         * request
         */
        request: SkillRatingDefinitionRequest,
    }): CancelablePromise<SkillRatingDefinitionDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/cognitive-skill-config/skill-ratings/definitions/{definition-id}',
            path: {
                'definition-id': definitionId,
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
     * deleteSkillRating
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSkillRatingUsingDelete1({
        definitionId,
    }: {
        /**
         * definition-id
         */
        definitionId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/cognitive-skill-config/skill-ratings/definitions/{definition-id}',
            path: {
                'definition-id': definitionId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getSkillRatings
     * @returns SkillRatingResponse OK
     * @throws ApiError
     */
    public static getSkillRatingsUsingGet({
        termId,
    }: {
        /**
         * term_id
         */
        termId: string,
    }): CancelablePromise<Array<SkillRatingResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cognitive-skill-config/skill-ratings/termly/{term_id}',
            path: {
                'term_id': termId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateSkillRating
     * @returns SkillRatingDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateSkillRatingUsingPut({
        request,
        skillRatingId,
    }: {
        /**
         * request
         */
        request: SkillRatingRequest,
        /**
         * skill-rating-id
         */
        skillRatingId: string,
    }): CancelablePromise<SkillRatingDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/cognitive-skill-config/skill-ratings/{skill-rating-id}',
            path: {
                'skill-rating-id': skillRatingId,
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
     * deleteSkillRating
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSkillRatingUsingDelete({
        forceDelete,
        skillRatingId,
    }: {
        /**
         * force-delete
         */
        forceDelete: string,
        /**
         * skill-rating-id
         */
        skillRatingId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/cognitive-skill-config/skill-ratings/{skill-rating-id}',
            path: {
                'skill-rating-id': skillRatingId,
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

}
