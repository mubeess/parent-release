/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BasicStudentInfo } from '../models/BasicStudentInfo';
import type { CreateStudentRelationshipRequest } from '../models/CreateStudentRelationshipRequest';
import type { DeleteRelationshipRequest } from '../models/DeleteRelationshipRequest';
import type { Page_ParentDto_ } from '../models/Page_ParentDto_';
import type { ParentDashboardStats } from '../models/ParentDashboardStats';
import type { ParentDto } from '../models/ParentDto';
import type { ParentRequest } from '../models/ParentRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ParentRestControllerService {

    /**
     * getAllParent
     * @returns Page_ParentDto_ OK
     * @throws ApiError
     */
    public static getAllParentUsingGet({
        limit,
        offset,
        search,
    }: {
        limit?: number,
        offset?: number,
        /**
         * search
         */
        search?: string,
    }): CancelablePromise<Page_ParentDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/parents',
            query: {
                'limit': limit,
                'offset': offset,
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
     * createParent
     * @returns ParentDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createParentUsingPost({
        parent,
        xTenantId,
        photo,
    }: {
        /**
         * parent
         */
        parent: string,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
        /**
         * photo
         */
        photo?: Blob,
    }): CancelablePromise<ParentDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/parents',
            headers: {
                'X-TENANT-ID': xTenantId,
            },
            query: {
                'parent': parent,
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
     * updateParent
     * @returns ParentDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateParentUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: ParentRequest,
    }): CancelablePromise<ParentDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/parents',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * downloadBulkUploadTemplate
     * @returns any OK
     * @throws ApiError
     */
    public static downloadBulkUploadTemplateUsingGet({
        xTenantId,
    }: {
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/parents/downloads/template',
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
     * linkStudents
     * @returns any OK
     * @throws ApiError
     */
    public static linkStudentsUsingPost({
        relationships,
    }: {
        /**
         * relationships
         */
        relationships: Array<CreateStudentRelationshipRequest>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/parents/link-students',
            body: relationships,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getParentStatistics
     * @returns ParentDashboardStats OK
     * @throws ApiError
     */
    public static getParentStatisticsUsingGet(): CancelablePromise<ParentDashboardStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/parents/statistics',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * filterParent
     * @returns Page_ParentDto_ OK
     * @throws ApiError
     */
    public static filterParentUsingGet({
        limit,
        offset,
        status,
    }: {
        limit?: number,
        offset?: number,
        /**
         * status
         */
        status?: 'ACTIVE' | 'INACTIVE',
    }): CancelablePromise<Page_ParentDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/parents/status',
            query: {
                'limit': limit,
                'offset': offset,
                'status': status,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * unLinkStudent
     * @returns any OK
     * @throws ApiError
     */
    public static unLinkStudentUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: DeleteRelationshipRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/parents/unlink-student',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * bulkUploadParentData
     * @returns any OK
     * @throws ApiError
     */
    public static bulkUploadParentDataUsingPost({
        file,
        xTenantId,
    }: {
        /**
         * file
         */
        file: Blob,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/parents/uploads/template',
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
     * getParent
     * @returns ParentDto OK
     * @throws ApiError
     */
    public static getParentUsingGet({
        parentId,
    }: {
        /**
         * parent-id
         */
        parentId: string,
    }): CancelablePromise<ParentDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/parents/{parent-id}',
            path: {
                'parent-id': parentId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteParent
     * @returns any OK
     * @throws ApiError
     */
    public static deleteParentUsingDelete({
        parentId,
    }: {
        /**
         * parent-id
         */
        parentId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/parents/{parent-id}',
            path: {
                'parent-id': parentId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getChildren
     * @returns BasicStudentInfo OK
     * @throws ApiError
     */
    public static getChildrenUsingGet({
        parentId,
    }: {
        /**
         * parent-id
         */
        parentId: string,
    }): CancelablePromise<Array<BasicStudentInfo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/parents/{parent-id}/children',
            path: {
                'parent-id': parentId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * uploadProfilePic
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static uploadProfilePicUsingPost({
        parentId,
        photo,
        xTenantId,
    }: {
        /**
         * parent-id
         */
        parentId: string,
        /**
         * photo
         */
        photo: Blob,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/parents/{parent-id}/uploads/profile-pic',
            path: {
                'parent-id': parentId,
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
