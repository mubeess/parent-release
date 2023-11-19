/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReportTemplateDto } from '../models/ReportTemplateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReportTemplateRestControllerService {

    /**
     * getAllReportTemplates
     * @returns ReportTemplateDto OK
     * @throws ApiError
     */
    public static getAllReportTemplatesUsingGet(): CancelablePromise<Array<ReportTemplateDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/report-templates',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * saveReportTemplate
     * @returns ReportTemplateDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveReportTemplateUsingPost({
        dto,
    }: {
        /**
         * dto
         */
        dto: ReportTemplateDto,
    }): CancelablePromise<ReportTemplateDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/report-templates',
            body: dto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateReportTemplate
     * @returns ReportTemplateDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateReportTemplateUsingPut({
        dto,
    }: {
        /**
         * dto
         */
        dto: ReportTemplateDto,
    }): CancelablePromise<ReportTemplateDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/report-templates',
            body: dto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * saveAsposeReportTemplate
     * @returns any OK
     * @throws ApiError
     */
    public static saveAsposeReportTemplateUsingPost({
        templateType,
        name,
        templateFile,
    }: {
        templateType?: string,
        name?: string,
        templateFile?: Blob,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/report-templates/aspose',
            formData: {
                'templateType': templateType,
                'name': name,
                'templateFile': templateFile,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getReportTemplate
     * @returns ReportTemplateDto OK
     * @throws ApiError
     */
    public static getReportTemplateUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: string,
    }): CancelablePromise<ReportTemplateDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/report-templates/{id}',
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
     * deleteTemplate
     * @returns any OK
     * @throws ApiError
     */
    public static deleteTemplateUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/report-templates/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
