/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_SubjectAttendanceDto_ } from '../models/Page_SubjectAttendanceDto_';
import type { StudentSubjectAttendanceResponse } from '../models/StudentSubjectAttendanceResponse';
import type { SubjectAttendanceDto } from '../models/SubjectAttendanceDto';
import type { SubjectAttendanceRequest } from '../models/SubjectAttendanceRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubjectAttendanceRestControllerService {

    /**
     * getClassSubjectAttendance
     * @returns Page_SubjectAttendanceDto_ OK
     * @throws ApiError
     */
    public static getClassSubjectAttendanceUsingGet1({
        armId,
        classLevelId,
        lessonDate,
        limit,
        offset,
        subjectId,
        termId,
    }: {
        armId?: string,
        classLevelId?: string,
        lessonDate?: string,
        limit?: number,
        offset?: number,
        subjectId?: string,
        termId?: string,
    }): CancelablePromise<Page_SubjectAttendanceDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subject-attendance',
            query: {
                'armId': armId,
                'classLevelId': classLevelId,
                'lessonDate': lessonDate,
                'limit': limit,
                'offset': offset,
                'subjectId': subjectId,
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
     * createSubjectAttendance
     * @returns any OK
     * @throws ApiError
     */
    public static createSubjectAttendanceUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: SubjectAttendanceRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subject-attendance',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateSubjectAttendance
     * @returns any OK
     * @throws ApiError
     */
    public static updateSubjectAttendanceUsingPut({
        subjectAttendanceRequest,
    }: {
        /**
         * subjectAttendanceRequest
         */
        subjectAttendanceRequest: SubjectAttendanceRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subject-attendance',
            body: subjectAttendanceRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteClassSubjectAttendance
     * @returns any OK
     * @throws ApiError
     */
    public static deleteClassSubjectAttendanceUsingDelete({
        armId,
        classLevelId,
        lessonDate,
        subjectId,
        termId,
    }: {
        armId?: string,
        classLevelId?: string,
        lessonDate?: string,
        subjectId?: string,
        termId?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subject-attendance',
            query: {
                'armId': armId,
                'classLevelId': classLevelId,
                'lessonDate': lessonDate,
                'subjectId': subjectId,
                'termId': termId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getClassSubjectAttendance
     * @returns SubjectAttendanceDto OK
     * @throws ApiError
     */
    public static getClassSubjectAttendanceUsingGet({
        armId,
        classLevelId,
        lessonDate,
        subjectId,
        termId,
    }: {
        armId?: string,
        classLevelId?: string,
        lessonDate?: string,
        subjectId?: string,
        termId?: string,
    }): CancelablePromise<Array<SubjectAttendanceDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subject-attendance/all',
            query: {
                'armId': armId,
                'classLevelId': classLevelId,
                'lessonDate': lessonDate,
                'subjectId': subjectId,
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
     * getStudentSubjectAttendanceByDateRange
     * @returns StudentSubjectAttendanceResponse OK
     * @throws ApiError
     */
    public static getStudentSubjectAttendanceByDateRangeUsingGet({
        studentId,
        armId,
        classLevelId,
        endDate,
        startDate,
    }: {
        /**
         * student-id
         */
        studentId: string,
        armId?: string,
        classLevelId?: string,
        endDate?: string,
        startDate?: string,
    }): CancelablePromise<Array<StudentSubjectAttendanceResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subject-attendance/student-daily',
            query: {
                'armId': armId,
                'classLevelId': classLevelId,
                'endDate': endDate,
                'startDate': startDate,
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
     * getStudentSubjectAttendance
     * @returns SubjectAttendanceDto OK
     * @throws ApiError
     */
    public static getStudentSubjectAttendanceUsingGet({
        studentId,
        armId,
        classLevelId,
        lessonDate,
        subjectId,
        termId,
    }: {
        /**
         * student-id
         */
        studentId: string,
        armId?: string,
        classLevelId?: string,
        lessonDate?: string,
        subjectId?: string,
        termId?: string,
    }): CancelablePromise<SubjectAttendanceDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subject-attendance/student/{student-id}',
            path: {
                'student-id': studentId,
            },
            query: {
                'armId': armId,
                'classLevelId': classLevelId,
                'lessonDate': lessonDate,
                'subjectId': subjectId,
                'termId': termId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
