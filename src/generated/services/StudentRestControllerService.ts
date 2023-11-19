/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkDeleteStudentsRequest } from '../models/BulkDeleteStudentsRequest';
import type { Page_StudentDto_ } from '../models/Page_StudentDto_';
import type { StudentDashboardStats } from '../models/StudentDashboardStats';
import type { StudentDto } from '../models/StudentDto';
import type { StudentLiteDto } from '../models/StudentLiteDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StudentRestControllerService {

    /**
     * getAllStudents
     * @returns Page_StudentDto_ OK
     * @throws ApiError
     */
    public static getAllStudentsUsingGet1({
        limit,
        offset,
        search = ' ',
    }: {
        limit?: number,
        offset?: number,
        /**
         * search
         */
        search?: string,
    }): CancelablePromise<Page_StudentDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/students',
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
     * createStudent
     * @returns StudentDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createStudentUsingPost({
        student,
        xTenantId,
        photo,
    }: {
        /**
         * student
         */
        student: string,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
        /**
         * photo
         */
        photo?: Blob,
    }): CancelablePromise<StudentDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/students',
            headers: {
                'X-TENANT-ID': xTenantId,
            },
            query: {
                'student': student,
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
     * updateStudent
     * @returns StudentDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateStudentUsingPut({
        dto,
    }: {
        /**
         * dto
         */
        dto: StudentDto,
    }): CancelablePromise<StudentDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/students',
            body: dto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getAllStudents
     * @returns StudentLiteDto OK
     * @throws ApiError
     */
    public static getAllStudentsUsingGet(): CancelablePromise<Array<StudentLiteDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/students/all-students',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteStudentsInBulk
     * @returns any OK
     * @throws ApiError
     */
    public static deleteStudentsInBulkUsingDelete({
        bulkDeleteStudentsRequest,
    }: {
        /**
         * bulkDeleteStudentsRequest
         */
        bulkDeleteStudentsRequest: BulkDeleteStudentsRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/students/bulk',
            body: bulkDeleteStudentsRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * downloadBulkUploadTemplate
     * @returns any OK
     * @throws ApiError
     */
    public static downloadBulkUploadTemplateUsingGet3({
        xTenantId,
    }: {
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/students/downloads/template',
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
     * filterStudent
     * @returns Page_StudentDto_ OK
     * @throws ApiError
     */
    public static filterStudentUsingGet({
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
    }): CancelablePromise<Page_StudentDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/students/filter',
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
     * getAllStudentsWithoutClass
     * @returns Page_StudentDto_ OK
     * @throws ApiError
     */
    public static getAllStudentsWithoutClassUsingGet({
        termId,
        limit,
        offset,
        search,
    }: {
        /**
         * term-id
         */
        termId: string,
        limit?: number,
        offset?: number,
        /**
         * search
         */
        search?: string,
    }): CancelablePromise<Page_StudentDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/students/no-class',
            query: {
                'limit': limit,
                'offset': offset,
                'search': search,
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
     * getStudentsStatistics
     * @returns StudentDashboardStats OK
     * @throws ApiError
     */
    public static getStudentsStatisticsUsingGet(): CancelablePromise<StudentDashboardStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/students/statistics',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * bulkUploadStudentData
     * @returns any OK
     * @throws ApiError
     */
    public static bulkUploadStudentDataUsingPost1({
        file,
        xTenantId,
        armId,
        classLevelId,
        termId,
    }: {
        /**
         * file
         */
        file: Blob,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
        armId?: string,
        classLevelId?: string,
        termId?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/students/uploads/template',
            headers: {
                'X-TENANT-ID': xTenantId,
            },
            query: {
                'armId': armId,
                'classLevelId': classLevelId,
                'termId': termId,
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
     * getStudent
     * @returns StudentDto OK
     * @throws ApiError
     */
    public static getStudentUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: string,
    }): CancelablePromise<StudentDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/students/{id}',
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
     * deleteStudent
     * @returns any OK
     * @throws ApiError
     */
    public static deleteStudentUsingDelete({
        hardDelete,
        id,
    }: {
        /**
         * hard-delete
         */
        hardDelete: boolean,
        /**
         * id
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/students/{id}/hard-delete/{hard-delete}',
            path: {
                'hard-delete': hardDelete,
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * uploadProfilePic
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static uploadProfilePicUsingPost2({
        id,
        photo,
        xTenantId,
    }: {
        /**
         * id
         */
        id: string,
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
            url: '/students/{id}/uploads/profile-pic',
            path: {
                'id': id,
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
