/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClassLevelsGradingFormatRequest } from '../models/ClassLevelsGradingFormatRequest';
import type { GradeDto } from '../models/GradeDto';
import type { GradeGroup } from '../models/GradeGroup';
import type { GradeGroupDto } from '../models/GradeGroupDto';
import type { GradeGroupRequest } from '../models/GradeGroupRequest';
import type { GradeRequest } from '../models/GradeRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GradingRestControllerService {

    /**
     * createClassLevelGradingFormats
     * @returns any OK
     * @throws ApiError
     */
    public static createClassLevelGradingFormatsUsingPost({
        requests,
    }: {
        /**
         * requests
         */
        requests: Array<ClassLevelsGradingFormatRequest>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/grading/class-levels',
            body: requests,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createGrade
     * @returns GradeDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createGradeUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: GradeRequest,
    }): CancelablePromise<GradeDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/grading/grade',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateGrade
     * @returns GradeDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateGradeUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: GradeRequest,
    }): CancelablePromise<GradeDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/grading/grade',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteGrade
     * @returns any OK
     * @throws ApiError
     */
    public static deleteGradeUsingDelete({
        gradeId,
    }: {
        /**
         * grade_id
         */
        gradeId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/grading/grade/{grade_id}',
            path: {
                'grade_id': gradeId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getTermGradingConfiguration
     * @returns GradeGroupDto OK
     * @throws ApiError
     */
    public static getTermGradingConfigurationUsingGet({
        termId,
    }: {
        /**
         * term_id
         */
        termId: string,
    }): CancelablePromise<Array<GradeGroupDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/grading/grading-config/{term_id}',
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
     * getGradeGroups
     * @returns GradeGroupDto OK
     * @throws ApiError
     */
    public static getGradeGroupsUsingGet(): CancelablePromise<Array<GradeGroupDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/grading/group',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createGradeGroup
     * @returns GradeGroupDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createGradeGroupUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: GradeGroupRequest,
    }): CancelablePromise<GradeGroupDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/grading/group',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateGradeGroup
     * @returns GradeGroupDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateGradeGroupUsingPut1({
        request,
    }: {
        /**
         * request
         */
        request: GradeGroupRequest,
    }): CancelablePromise<GradeGroupDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/grading/group',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getGradeGroup
     * @returns GradeGroupDto OK
     * @throws ApiError
     */
    public static getGradeGroupUsingGet({
        gradeGroupId,
    }: {
        /**
         * grade_group_id
         */
        gradeGroupId: string,
    }): CancelablePromise<GradeGroupDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/grading/group/{grade_group_id}',
            path: {
                'grade_group_id': gradeGroupId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateGradeGroup
     * @returns GradeGroup OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateGradeGroupUsingPut({
        gradeGroupId,
        name,
    }: {
        /**
         * grade_group_id
         */
        gradeGroupId: string,
        /**
         * name
         */
        name: string,
    }): CancelablePromise<GradeGroup | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/grading/group/{grade_group_id}',
            path: {
                'grade_group_id': gradeGroupId,
            },
            query: {
                'name': name,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteGradeGroup
     * @returns any OK
     * @throws ApiError
     */
    public static deleteGradeGroupUsingDelete({
        gradeGroupId,
    }: {
        /**
         * grade_group_id
         */
        gradeGroupId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/grading/group/{grade_group_id}',
            path: {
                'grade_group_id': gradeGroupId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
