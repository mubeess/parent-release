/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSchoolFeesDiscountRequest } from '../models/CreateSchoolFeesDiscountRequest';
import type { DiscountItemDto } from '../models/DiscountItemDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SchoolFeesDiscountRestControllerService {

    /**
     * getSchoolFeesDiscount
     * @returns DiscountItemDto OK
     * @throws ApiError
     */
    public static getSchoolFeesDiscountUsingGet({
        studentId,
        termId,
    }: {
        /**
         * student-id
         */
        studentId: string,
        /**
         * term-id
         */
        termId: string,
    }): CancelablePromise<Array<DiscountItemDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/school-fees-discounts',
            query: {
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
     * createSchoolFeesDiscount
     * @returns DiscountItemDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createSchoolFeesDiscountUsingPost({
        createSchoolFeesDiscountRequest,
    }: {
        /**
         * createSchoolFeesDiscountRequest
         */
        createSchoolFeesDiscountRequest: CreateSchoolFeesDiscountRequest,
    }): CancelablePromise<Array<DiscountItemDto> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/school-fees-discounts',
            body: createSchoolFeesDiscountRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteSchoolFeesDiscount
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSchoolFeesDiscountUsingDelete({
        payableItemId,
        studentId,
        termId,
    }: {
        /**
         * payable-item-id
         */
        payableItemId: string,
        /**
         * student-id
         */
        studentId: string,
        /**
         * term-id
         */
        termId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/school-fees-discounts',
            query: {
                'payable-item-id': payableItemId,
                'student-id': studentId,
                'term-id': termId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getByStudentAndTerm
     * @returns DiscountItemDto OK
     * @throws ApiError
     */
    public static getByStudentAndTermUsingGet({
        studentId,
        termId,
    }: {
        /**
         * student-id
         */
        studentId: string,
        /**
         * term-id
         */
        termId: string,
    }): CancelablePromise<Array<DiscountItemDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/school-fees-discounts/{student-id}',
            path: {
                'student-id': studentId,
            },
            query: {
                'term-id': termId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
