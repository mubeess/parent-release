/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTimeTableRequest } from '../models/CreateTimeTableRequest';
import type { TimeTableDto } from '../models/TimeTableDto';
import type { UpdateTimeTableRequest } from '../models/UpdateTimeTableRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TimeTableRestControllerService {

    /**
     * createTimeTable
     * @returns TimeTableDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createTimeTableUsingPost({
        createTimeTableRequest,
    }: {
        /**
         * createTimeTableRequest
         */
        createTimeTableRequest: CreateTimeTableRequest,
    }): CancelablePromise<TimeTableDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/time-table',
            body: createTimeTableRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateTimeTable
     * @returns TimeTableDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateTimeTableUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: UpdateTimeTableRequest,
    }): CancelablePromise<TimeTableDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/time-table',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteTimeTable
     * @returns any OK
     * @throws ApiError
     */
    public static deleteTimeTableUsingDelete({
        termId,
    }: {
        /**
         * term_id
         */
        termId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/time-table/{term_id}',
            path: {
                'term_id': termId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getTimeTableForAdmin
     * @returns TimeTableDto OK
     * @throws ApiError
     */
    public static getTimeTableForAdminUsingGet({
        termId,
        subjectId,
    }: {
        /**
         * term_id
         */
        termId: string,
        /**
         * subject_id
         */
        subjectId?: string,
    }): CancelablePromise<TimeTableDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/time-table/{term_id}/admin',
            path: {
                'term_id': termId,
            },
            query: {
                'subject_id': subjectId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getTimeTableForFormTeacher
     * @returns TimeTableDto OK
     * @throws ApiError
     */
    public static getTimeTableForFormTeacherUsingGet({
        armId,
        classLevelId,
        termId,
        subjectId,
        traitId,
    }: {
        /**
         * arm_id
         */
        armId: string,
        /**
         * class_level_id
         */
        classLevelId: string,
        /**
         * term_id
         */
        termId: string,
        /**
         * subject_id
         */
        subjectId?: string,
        /**
         * trait_id
         */
        traitId?: string,
    }): CancelablePromise<TimeTableDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/time-table/{term_id}/form-teacher',
            path: {
                'term_id': termId,
            },
            query: {
                'arm_id': armId,
                'class_level_id': classLevelId,
                'subject_id': subjectId,
                'trait_id': traitId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getTimeTableForStudent
     * @returns TimeTableDto OK
     * @throws ApiError
     */
    public static getTimeTableForStudentUsingGet({
        studentId,
        termId,
    }: {
        /**
         * student_id
         */
        studentId: string,
        /**
         * term_id
         */
        termId: string,
    }): CancelablePromise<TimeTableDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/time-table/{term_id}/student/{student_id}',
            path: {
                'student_id': studentId,
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
     * getTimeTableForSubjectTeacher
     * @returns TimeTableDto OK
     * @throws ApiError
     */
    public static getTimeTableForSubjectTeacherUsingGet({
        staffId,
        termId,
        armId,
        classLevelId,
    }: {
        /**
         * staff_id
         */
        staffId: string,
        /**
         * term_id
         */
        termId: string,
        /**
         * arm_id
         */
        armId?: string,
        /**
         * class_level_id
         */
        classLevelId?: string,
    }): CancelablePromise<TimeTableDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/time-table/{term_id}/subject-teacher/{staff_id}',
            path: {
                'staff_id': staffId,
                'term_id': termId,
            },
            query: {
                'arm_id': armId,
                'class_level_id': classLevelId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
