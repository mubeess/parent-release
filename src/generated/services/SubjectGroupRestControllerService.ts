/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddSubjectToGroupRequest } from '../models/AddSubjectToGroupRequest';
import type { CreateSubjectGroupRequest } from '../models/CreateSubjectGroupRequest';
import type { SubjectGroupDto } from '../models/SubjectGroupDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubjectGroupRestControllerService {

    /**
     * getAll
     * @returns SubjectGroupDto OK
     * @throws ApiError
     */
    public static getAllUsingGet4(): CancelablePromise<Array<SubjectGroupDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subject-group',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * create
     * @returns any OK
     * @throws ApiError
     */
    public static createUsingPost1({
        request,
    }: {
        /**
         * request
         */
        request: CreateSubjectGroupRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subject-group',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateSubjectsInGroup
     * @returns any OK
     * @throws ApiError
     */
    public static updateSubjectsInGroupUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: AddSubjectToGroupRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subject-group',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteAll
     * @returns any OK
     * @throws ApiError
     */
    public static deleteAllUsingDelete({
        subjectGroupId,
    }: {
        /**
         * subject-group-id
         */
        subjectGroupId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subject-group',
            query: {
                'subject-group-id': subjectGroupId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * addSubjectToGroup
     * @returns any OK
     * @throws ApiError
     */
    public static addSubjectToGroupUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: AddSubjectToGroupRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subject-group/subjects',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteSubjectFromGroup
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSubjectFromGroupUsingDelete({
        subjectId,
    }: {
        /**
         * subject-id
         */
        subjectId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subject-group/subjects/{subject-id}',
            path: {
                'subject-id': subjectId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
