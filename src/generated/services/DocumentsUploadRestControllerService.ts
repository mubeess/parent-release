/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteArrayResource } from '../models/ByteArrayResource';
import type { Document } from '../models/Document';
import type { DownloadDocumentRequest } from '../models/DownloadDocumentRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DocumentsUploadRestControllerService {

    /**
     * downloadDocument
     * @returns ByteArrayResource OK
     * @returns any Created
     * @throws ApiError
     */
    public static downloadDocumentUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: DownloadDocumentRequest,
    }): CancelablePromise<ByteArrayResource | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/documents/download',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listStaffDocuments
     * @returns Document OK
     * @throws ApiError
     */
    public static listStaffDocumentsUsingGet({
        staffId,
    }: {
        /**
         * staff-id
         */
        staffId: string,
    }): CancelablePromise<Array<Document>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/documents/staff/{staff-id}',
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

    /**
     * uploadStaffDocument
     * @returns any OK
     * @throws ApiError
     */
    public static uploadStaffDocumentUsingPost({
        document,
        staffId,
        xTenantId,
    }: {
        /**
         * document
         */
        document: Blob,
        /**
         * staff-id
         */
        staffId: string,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/documents/staff/{staff-id}',
            path: {
                'staff-id': staffId,
            },
            headers: {
                'X-TENANT-ID': xTenantId,
            },
            body: document,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteStaffDocument
     * @returns any OK
     * @throws ApiError
     */
    public static deleteStaffDocumentUsingDelete({
        staffId,
        documentKey,
    }: {
        /**
         * staff-id
         */
        staffId: string,
        /**
         * documentKey
         */
        documentKey?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/documents/staff/{staff-id}',
            path: {
                'staff-id': staffId,
            },
            body: documentKey,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * listStudentDocuments
     * @returns Document OK
     * @throws ApiError
     */
    public static listStudentDocumentsUsingGet({
        studentId,
    }: {
        /**
         * student-id
         */
        studentId: string,
    }): CancelablePromise<Array<Document>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/documents/student/{student-id}',
            path: {
                'student-id': studentId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * uploadStudentDocument
     * @returns any OK
     * @throws ApiError
     */
    public static uploadStudentDocumentUsingPost({
        document,
        studentId,
        xTenantId,
    }: {
        /**
         * document
         */
        document: Blob,
        /**
         * student-id
         */
        studentId: string,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/documents/student/{student-id}',
            path: {
                'student-id': studentId,
            },
            headers: {
                'X-TENANT-ID': xTenantId,
            },
            body: document,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteStudentDocument
     * @returns any OK
     * @throws ApiError
     */
    public static deleteStudentDocumentUsingDelete({
        studentId,
        documentKey,
    }: {
        /**
         * student-id
         */
        studentId: string,
        /**
         * documentKey
         */
        documentKey?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/documents/student/{student-id}',
            path: {
                'student-id': studentId,
            },
            body: documentKey,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
