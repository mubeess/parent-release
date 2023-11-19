/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateExamRequest } from '../models/CreateExamRequest';
import type { CreatePaperRequest } from '../models/CreatePaperRequest';
import type { ExamDto } from '../models/ExamDto';
import type { ExamLiteDto } from '../models/ExamLiteDto';
import type { Page_ExamDto_ } from '../models/Page_ExamDto_';
import type { Page_StudentPaperResultResponse_ } from '../models/Page_StudentPaperResultResponse_';
import type { PaperDto } from '../models/PaperDto';
import type { PaperLiteDto } from '../models/PaperLiteDto';
import type { StartStudentPaperRequest } from '../models/StartStudentPaperRequest';
import type { StudentPaperAnswersRequest } from '../models/StudentPaperAnswersRequest';
import type { StudentPaperDto } from '../models/StudentPaperDto';
import type { StudentPaperResultResponse } from '../models/StudentPaperResultResponse';
import type { UpdateExamRequest } from '../models/UpdateExamRequest';
import type { UpdatePaperRequest } from '../models/UpdatePaperRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ExamRestControllerService {

    /**
     * getExams
     * @returns Page_ExamDto_ OK
     * @throws ApiError
     */
    public static getExamsUsingGet({
        classLevelId,
        limit,
        offset,
        search,
    }: {
        /**
         * class-level-id
         */
        classLevelId?: string,
        limit?: number,
        offset?: number,
        /**
         * search
         */
        search?: string,
    }): CancelablePromise<Page_ExamDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cbt/exams',
            query: {
                'class-level-id': classLevelId,
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
     * createExam
     * @returns ExamDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createExamUsingPost({
        createExamRequest,
    }: {
        /**
         * createExamRequest
         */
        createExamRequest: CreateExamRequest,
    }): CancelablePromise<ExamDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cbt/exams',
            body: createExamRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateExam
     * @returns ExamDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateExamUsingPut({
        updatePaperRequest,
    }: {
        /**
         * updatePaperRequest
         */
        updatePaperRequest: UpdateExamRequest,
    }): CancelablePromise<ExamDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/cbt/exams',
            body: updatePaperRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getClassLevelExamsLite
     * @returns ExamLiteDto OK
     * @throws ApiError
     */
    public static getClassLevelExamsLiteUsingGet({
        classLevelId,
    }: {
        /**
         * class-level-id
         */
        classLevelId: string,
    }): CancelablePromise<Array<ExamLiteDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cbt/exams/lite',
            query: {
                'class-level-id': classLevelId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deletePaper
     * @returns any OK
     * @throws ApiError
     */
    public static deletePaperUsingDelete({
        paperId,
    }: {
        /**
         * paper-id
         */
        paperId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/cbt/exams/papers/{paper-id}',
            path: {
                'paper-id': paperId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getPaperResults
     * @returns Page_StudentPaperResultResponse_ OK
     * @throws ApiError
     */
    public static getPaperResultsUsingGet({
        paperId,
        limit,
        offset,
        search,
    }: {
        /**
         * paper-id
         */
        paperId: string,
        limit?: number,
        offset?: number,
        /**
         * search
         */
        search?: string,
    }): CancelablePromise<Page_StudentPaperResultResponse_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cbt/exams/papers/{paper-id}/results',
            path: {
                'paper-id': paperId,
            },
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
     * getStudentPaperResults
     * @returns StudentPaperResultResponse OK
     * @throws ApiError
     */
    public static getStudentPaperResultsUsingGet({
        paperId,
        studentId,
    }: {
        /**
         * paper-id
         */
        paperId: string,
        /**
         * student-id
         */
        studentId: string,
    }): CancelablePromise<StudentPaperResultResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cbt/exams/papers/{paper-id}/results/{student-id}',
            path: {
                'paper-id': paperId,
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
     * getStudentExam
     * @returns ExamDto OK
     * @throws ApiError
     */
    public static getStudentExamUsingGet({
        studentId,
    }: {
        /**
         * student-id
         */
        studentId: string,
    }): CancelablePromise<ExamDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cbt/exams/students',
            query: {
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
     * getLitePaper
     * @returns PaperLiteDto OK
     * @throws ApiError
     */
    public static getLitePaperUsingGet({
        paperId,
    }: {
        /**
         * paper-id
         */
        paperId: string,
    }): CancelablePromise<PaperLiteDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cbt/exams/students/papers/{paper-id}',
            path: {
                'paper-id': paperId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * submitStudentPaperAnswers
     * @returns PaperDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static submitStudentPaperAnswersUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: StudentPaperAnswersRequest,
    }): CancelablePromise<PaperDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/cbt/exams/students/save-answers',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getPaperAndHideCorrectAnswers
     * @returns StudentPaperDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static getPaperAndHideCorrectAnswersUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: StartStudentPaperRequest,
    }): CancelablePromise<StudentPaperDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cbt/exams/students/start-paper',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getExam
     * @returns ExamDto OK
     * @throws ApiError
     */
    public static getExamUsingGet({
        examId,
    }: {
        /**
         * exam-id
         */
        examId: string,
    }): CancelablePromise<ExamDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cbt/exams/{exam-id}',
            path: {
                'exam-id': examId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteExam
     * @returns any OK
     * @throws ApiError
     */
    public static deleteExamUsingDelete({
        examId,
    }: {
        /**
         * exam-id
         */
        examId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/cbt/exams/{exam-id}',
            path: {
                'exam-id': examId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * addPaper
     * @returns PaperDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static addPaperUsingPost({
        createPaperRequest,
        examId,
    }: {
        /**
         * createPaperRequest
         */
        createPaperRequest: CreatePaperRequest,
        /**
         * exam-id
         */
        examId: string,
    }): CancelablePromise<PaperDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cbt/exams/{exam-id}/papers',
            path: {
                'exam-id': examId,
            },
            body: createPaperRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updatePaper
     * @returns PaperDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updatePaperUsingPut({
        examId,
        request,
    }: {
        /**
         * exam-id
         */
        examId: string,
        /**
         * request
         */
        request: UpdatePaperRequest,
    }): CancelablePromise<PaperDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/cbt/exams/{exam-id}/papers',
            path: {
                'exam-id': examId,
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
     * getPaper
     * @returns PaperDto OK
     * @throws ApiError
     */
    public static getPaperUsingGet({
        paperId,
    }: {
        /**
         * paper-id
         */
        paperId: string,
    }): CancelablePromise<PaperDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cbt/exams/{exam-id}/papers/{paper-id}',
            path: {
                'paper-id': paperId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
