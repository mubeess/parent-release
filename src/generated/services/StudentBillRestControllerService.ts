/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateStudentInvoiceItemRequest } from '../models/CreateStudentInvoiceItemRequest';
import type { SendOutstandingInvoiceNotificationRequest } from '../models/SendOutstandingInvoiceNotificationRequest';
import type { StudentBillItemDto } from '../models/StudentBillItemDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StudentBillRestControllerService {

    /**
     * deleteInvoiceItem
     * @returns any OK
     * @throws ApiError
     */
    public static deleteInvoiceItemUsingDelete({
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
            url: '/students-invoice/bill-item',
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
     * sendOutstandingInvoiceNotification
     * @returns any OK
     * @throws ApiError
     */
    public static sendOutstandingInvoiceNotificationUsingPost({
        request,
        xTenantId,
    }: {
        /**
         * request
         */
        request: SendOutstandingInvoiceNotificationRequest,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/students-invoice/outstanding/notification',
            headers: {
                'X-TENANT-ID': xTenantId,
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
     * getStudentInvoiceItems
     * @returns StudentBillItemDto OK
     * @throws ApiError
     */
    public static getStudentInvoiceItemsUsingGet({
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
    }): CancelablePromise<Array<StudentBillItemDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/students-invoice/{student-id}',
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

    /**
     * createInvoiceItem
     * @returns any OK
     * @throws ApiError
     */
    public static createInvoiceItemUsingPost({
        request,
        studentId,
    }: {
        /**
         * request
         */
        request: CreateStudentInvoiceItemRequest,
        /**
         * student-id
         */
        studentId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/students-invoice/{student-id}',
            path: {
                'student-id': studentId,
            },
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
