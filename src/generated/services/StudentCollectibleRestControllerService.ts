/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectibleStatistics } from '../models/CollectibleStatistics';
import type { CreateCollectibleRequest } from '../models/CreateCollectibleRequest';
import type { Page_StudentCollectibleDto_ } from '../models/Page_StudentCollectibleDto_';
import type { StudentCollectibleDto } from '../models/StudentCollectibleDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StudentCollectibleRestControllerService {

    /**
     * getAll
     * @returns Page_StudentCollectibleDto_ OK
     * @throws ApiError
     */
    public static getAllUsingGet3({
        itemName,
        limit,
        offset,
    }: {
        /**
         * item-name
         */
        itemName?: string,
        limit?: number,
        offset?: number,
    }): CancelablePromise<Page_StudentCollectibleDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collectibles',
            query: {
                'item-name': itemName,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createStudentCollectible
     * @returns StudentCollectibleDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createStudentCollectibleUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: CreateCollectibleRequest,
    }): CancelablePromise<StudentCollectibleDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/collectibles',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateStudentCollectible
     * @returns StudentCollectibleDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateStudentCollectibleUsingPut({
        dto,
    }: {
        /**
         * dto
         */
        dto: StudentCollectibleDto,
    }): CancelablePromise<StudentCollectibleDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/collectibles',
            body: dto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * filter
     * @returns Page_StudentCollectibleDto_ OK
     * @throws ApiError
     */
    public static filterUsingGet({
        classLevelId,
        limit,
        offset,
        payableItemId,
        sessionId,
        status,
        studentId,
        termId,
    }: {
        /**
         * class-level-id
         */
        classLevelId?: string,
        limit?: number,
        offset?: number,
        /**
         * payable-item-id
         */
        payableItemId?: string,
        /**
         * session-id
         */
        sessionId?: string,
        /**
         * status
         */
        status?: 'COLLECTED' | 'PENDING_COLLECTION',
        /**
         * student-id
         */
        studentId?: string,
        /**
         * term-id
         */
        termId?: string,
    }): CancelablePromise<Page_StudentCollectibleDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collectibles/filter',
            query: {
                'class-level-id': classLevelId,
                'limit': limit,
                'offset': offset,
                'payable-item-id': payableItemId,
                'session-id': sessionId,
                'status': status,
                'student-id': studentId,
                'term-id': termId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getOne
     * @returns StudentCollectibleDto OK
     * @throws ApiError
     */
    public static getOneUsingGet1({
        id,
    }: {
        /**
         * id
         */
        id: string,
    }): CancelablePromise<StudentCollectibleDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collectibles/item/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getStatistics
     * @returns CollectibleStatistics OK
     * @throws ApiError
     */
    public static getStatisticsUsingGet({
        payableItemId,
    }: {
        /**
         * payable-item-id
         */
        payableItemId: string,
    }): CancelablePromise<CollectibleStatistics> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collectibles/statistics/{payable-item-id}',
            path: {
                'payable-item-id': payableItemId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteStudentCollectible
     * @returns any OK
     * @throws ApiError
     */
    public static deleteStudentCollectibleUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/collectibles/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getByPayableItem
     * @returns Page_StudentCollectibleDto_ OK
     * @throws ApiError
     */
    public static getByPayableItemUsingGet({
        payableItemId,
        limit,
        offset,
    }: {
        /**
         * payable-item-id
         */
        payableItemId: string,
        limit?: number,
        offset?: number,
    }): CancelablePromise<Page_StudentCollectibleDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collectibles/{payable-item-id}',
            path: {
                'payable-item-id': payableItemId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
