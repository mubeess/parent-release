/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignClassMemberSubjectsRequest } from '../models/AssignClassMemberSubjectsRequest';
import type { ClassMemberDto } from '../models/ClassMemberDto';
import type { ClassMemberLiteDto } from '../models/ClassMemberLiteDto';
import type { ClassMemberRequest } from '../models/ClassMemberRequest';
import type { DeleteClassMembersRequest } from '../models/DeleteClassMembersRequest';
import type { ManualPromotionRequest } from '../models/ManualPromotionRequest';
import type { TransferClassMemberRequest } from '../models/TransferClassMemberRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ClassMemberRestControllerService {

    /**
     * getAllClassMembers
     * @returns ClassMemberDto OK
     * @throws ApiError
     */
    public static getAllClassMembersUsingGet({
        armId,
        classLevelId,
        search,
        termId,
    }: {
        armId?: string,
        classLevelId?: string,
        /**
         * search
         */
        search?: string,
        termId?: string,
    }): CancelablePromise<Array<ClassMemberDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/class-members',
            query: {
                'armId': armId,
                'classLevelId': classLevelId,
                'search': search,
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
     * assign
     * @returns ClassMemberDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static assignUsingPost({
        classMemberRequest,
    }: {
        /**
         * classMemberRequest
         */
        classMemberRequest: ClassMemberRequest,
    }): CancelablePromise<Array<ClassMemberDto> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/class-members',
            body: classMemberRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * assignClassMemberSubjects
     * @returns any OK
     * @throws ApiError
     */
    public static assignClassMemberSubjectsUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: AssignClassMemberSubjectsRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/class-members/assign-subjects',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getLiteClassMembers
     * @returns ClassMemberLiteDto OK
     * @throws ApiError
     */
    public static getLiteClassMembersUsingGet({
        armId,
        classLevelId,
        search,
        termId,
    }: {
        armId?: string,
        classLevelId?: string,
        /**
         * search
         */
        search?: string,
        termId?: string,
    }): CancelablePromise<Array<ClassMemberLiteDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/class-members/lite',
            query: {
                'armId': armId,
                'classLevelId': classLevelId,
                'search': search,
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
     * manuallyPromote
     * @returns any OK
     * @throws ApiError
     */
    public static manuallyPromoteUsingPost({
        manualPromotionRequest,
    }: {
        /**
         * manualPromotionRequest
         */
        manualPromotionRequest: ManualPromotionRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/class-members/promote',
            body: manualPromotionRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getClassMemberByTerm
     * @returns ClassMemberDto OK
     * @throws ApiError
     */
    public static getClassMemberByTermUsingGet({
        termId,
    }: {
        /**
         * termId
         */
        termId: string,
    }): CancelablePromise<Array<ClassMemberDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/class-members/term/{termId}',
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
     * transfer
     * @returns any OK
     * @throws ApiError
     */
    public static transferUsingPut({
        transferClassMemberRequest,
    }: {
        /**
         * transferClassMemberRequest
         */
        transferClassMemberRequest: TransferClassMemberRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/class-members/transfer',
            body: transferClassMemberRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * unassignClassMembers
     * @returns any OK
     * @throws ApiError
     */
    public static unassignClassMembersUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: DeleteClassMembersRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/class-members/unassign',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getClassMember
     * @returns ClassMemberDto OK
     * @throws ApiError
     */
    public static getClassMemberUsingGet({
        studentId,
        armId,
        classLevelId,
        termId,
    }: {
        /**
         * studentId
         */
        studentId: string,
        armId?: string,
        classLevelId?: string,
        termId?: string,
    }): CancelablePromise<ClassMemberDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/class-members/{studentId}',
            path: {
                'studentId': studentId,
            },
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
     * deleteClassMember
     * @returns any OK
     * @throws ApiError
     */
    public static deleteClassMemberUsingDelete({
        studentId,
        armId,
        classLevelId,
        termId,
    }: {
        /**
         * studentId
         */
        studentId: string,
        armId?: string,
        classLevelId?: string,
        termId?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/class-members/{studentId}',
            path: {
                'studentId': studentId,
            },
            query: {
                'armId': armId,
                'classLevelId': classLevelId,
                'termId': termId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
