/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApproveClassLevelTermResultRequest } from '../models/ApproveClassLevelTermResultRequest';
import type { ApproveTermResultRequest } from '../models/ApproveTermResultRequest';
import type { StudentTermResultApprovalDto } from '../models/StudentTermResultApprovalDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TermResultApprovalRestControllerService {

    /**
     * getAllApprovals
     * @returns StudentTermResultApprovalDto OK
     * @throws ApiError
     */
    public static getAllApprovalsUsingGet({
        armId,
        classLevelId,
        termId,
    }: {
        armId: string,
        classLevelId: string,
        termId: string,
    }): CancelablePromise<Array<StudentTermResultApprovalDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/term-result-approvals',
            query: {
                'armId': armId,
                'classLevelId': classLevelId,
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
     * approveResult
     * @returns StudentTermResultApprovalDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static approveResultUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: ApproveTermResultRequest,
    }): CancelablePromise<StudentTermResultApprovalDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/term-result-approvals',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * disapproveResult
     * @returns any OK
     * @throws ApiError
     */
    public static disapproveResultUsingDelete({
        armId,
        classLevelId,
        studentId,
        termId,
    }: {
        armId: string,
        classLevelId: string,
        studentId: string,
        termId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/term-result-approvals',
            query: {
                'armId': armId,
                'classLevelId': classLevelId,
                'studentId': studentId,
                'termId': termId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * approveAllResults
     * @returns any OK
     * @throws ApiError
     */
    public static approveAllResultsUsingPut({
        termId,
    }: {
        /**
         * term-id
         */
        termId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/term-result-approvals/approve-all/{term-id}',
            path: {
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
     * approveClassResults
     * @returns any OK
     * @throws ApiError
     */
    public static approveClassResultsUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: ApproveClassLevelTermResultRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/term-result-approvals/class-level-arm',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getStudentApproval
     * @returns StudentTermResultApprovalDto OK
     * @throws ApiError
     */
    public static getStudentApprovalUsingGet({
        armId,
        classLevelId,
        studentId,
        termId,
    }: {
        armId: string,
        classLevelId: string,
        studentId: string,
        termId: string,
    }): CancelablePromise<StudentTermResultApprovalDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/term-result-approvals/single-student',
            query: {
                'armId': armId,
                'classLevelId': classLevelId,
                'studentId': studentId,
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
