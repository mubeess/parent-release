/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignSubjectTraitGroupToTermRequest } from '../models/AssignSubjectTraitGroupToTermRequest';
import type { CreateSubjectTraitGroupRequest } from '../models/CreateSubjectTraitGroupRequest';
import type { CreateSubjectTraitRequest } from '../models/CreateSubjectTraitRequest';
import type { SubjectTraitDto } from '../models/SubjectTraitDto';
import type { SubjectTraitGroupDto } from '../models/SubjectTraitGroupDto';
import type { UpdateSubjectTraitGroupRequest } from '../models/UpdateSubjectTraitGroupRequest';
import type { UpdateSubjectTraitRequest } from '../models/UpdateSubjectTraitRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubjectTraitRestControllerService {

    /**
     * createSubjectTrait
     * @returns SubjectTraitDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createSubjectTraitUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: CreateSubjectTraitRequest,
    }): CancelablePromise<SubjectTraitDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subject-traits',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateSubjectTrait
     * @returns SubjectTraitDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateSubjectTraitUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: UpdateSubjectTraitRequest,
    }): CancelablePromise<SubjectTraitDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subject-traits',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * searchSubjectTraitGroups
     * @returns SubjectTraitGroupDto OK
     * @throws ApiError
     */
    public static searchSubjectTraitGroupsUsingGet({
        search,
    }: {
        /**
         * search
         */
        search?: string,
    }): CancelablePromise<Array<SubjectTraitGroupDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subject-traits/groups',
            query: {
                'search': search,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createSubjectTraitGroup
     * @returns SubjectTraitGroupDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createSubjectTraitGroupUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: CreateSubjectTraitGroupRequest,
    }): CancelablePromise<SubjectTraitGroupDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subject-traits/groups',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateSubjectTraitGroup
     * @returns SubjectTraitGroupDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateSubjectTraitGroupUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: UpdateSubjectTraitGroupRequest,
    }): CancelablePromise<SubjectTraitGroupDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subject-traits/groups',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * assignedSubjectTraitGroupToTerm
     * @returns SubjectTraitGroupDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static assignedSubjectTraitGroupToTermUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: AssignSubjectTraitGroupToTermRequest,
    }): CancelablePromise<SubjectTraitGroupDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subject-traits/groups/assign-to-term',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteSubjectTraitGroup
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSubjectTraitGroupUsingDelete({
        subjectTraitGroupId,
    }: {
        /**
         * subjectTraitGroupId
         */
        subjectTraitGroupId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subject-traits/groups/{subjectTraitGroupId}',
            path: {
                'subjectTraitGroupId': subjectTraitGroupId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * filterSubjectTraits
     * @returns SubjectTraitDto OK
     * @throws ApiError
     */
    public static filterSubjectTraitsUsingGet({
        subjectId,
        subjectTraitGroupId,
        classLevelId,
        search,
    }: {
        /**
         * subjectId
         */
        subjectId: string,
        /**
         * subjectTraitGroupId
         */
        subjectTraitGroupId: string,
        /**
         * classLevelId
         */
        classLevelId?: string,
        /**
         * search
         */
        search?: string,
    }): CancelablePromise<Array<SubjectTraitDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subject-traits/groups/{subjectTraitGroupId}/subject/{subjectId}',
            path: {
                'subjectId': subjectId,
                'subjectTraitGroupId': subjectTraitGroupId,
            },
            query: {
                'classLevelId': classLevelId,
                'search': search,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * fetchAssignedSubjectTraitGroupByTerm
     * @returns SubjectTraitGroupDto OK
     * @throws ApiError
     */
    public static fetchAssignedSubjectTraitGroupByTermUsingGet({
        termId,
    }: {
        /**
         * termId
         */
        termId: string,
    }): CancelablePromise<SubjectTraitGroupDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subject-traits/groups/{termId}',
            path: {
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
     * toggleUsesSubjectTraits
     * @returns any OK
     * @throws ApiError
     */
    public static toggleUsesSubjectTraitsUsingPut(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subject-traits/toggle',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteSubjectTrait
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSubjectTraitUsingDelete({
        subjectTraitId,
    }: {
        /**
         * subjectTraitId
         */
        subjectTraitId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subject-traits/{subjectTraitId}',
            path: {
                'subjectTraitId': subjectTraitId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
