/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkInvoiceTemplateRequest } from '../models/BulkInvoiceTemplateRequest';
import type { InvoiceTemplateDto } from '../models/InvoiceTemplateDto';
import type { InvoiceTemplateRequest } from '../models/InvoiceTemplateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InvoiceTemplateRestControllerService {

    /**
     * createTemplate
     * @returns InvoiceTemplateDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createTemplateUsingPost({
        request,
        xTenantId,
    }: {
        /**
         * request
         */
        request: InvoiceTemplateRequest,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<InvoiceTemplateDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/invoice-templates',
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
     * updateTemplate
     * @returns InvoiceTemplateDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateTemplateUsingPut({
        invoiceTemplateRequest,
    }: {
        /**
         * invoiceTemplateRequest
         */
        invoiceTemplateRequest: InvoiceTemplateRequest,
    }): CancelablePromise<InvoiceTemplateDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/invoice-templates',
            body: invoiceTemplateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * delete
     * @returns any OK
     * @throws ApiError
     */
    public static deleteUsingDelete1({
        classLevelId,
        termId,
    }: {
        /**
         * class_level_id
         */
        classLevelId: string,
        /**
         * term_id
         */
        termId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/invoice-templates',
            query: {
                'class_level_id': classLevelId,
                'term_id': termId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * createTemplates
     * @returns InvoiceTemplateDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createTemplatesUsingPost({
        request,
        xTenantId,
    }: {
        /**
         * request
         */
        request: BulkInvoiceTemplateRequest,
        /**
         * X-TENANT-ID
         */
        xTenantId: string,
    }): CancelablePromise<Array<InvoiceTemplateDto> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/invoice-templates/bulk',
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
     * getByTermId
     * @returns InvoiceTemplateDto OK
     * @throws ApiError
     */
    public static getByTermIdUsingGet({
        termId,
    }: {
        /**
         * term_id
         */
        termId: string,
    }): CancelablePromise<Array<InvoiceTemplateDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/invoice-templates/{term_id}',
            path: {
                'term_id': termId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
