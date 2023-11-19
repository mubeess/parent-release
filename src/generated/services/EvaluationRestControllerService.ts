/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EvaluationDto } from '../models/EvaluationDto';
import type { EvaluationRequest } from '../models/EvaluationRequest';
import type { Page_EvaluationDto_ } from '../models/Page_EvaluationDto_';
import type { UpdateEvaluationRequest } from '../models/UpdateEvaluationRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EvaluationRestControllerService {

    /**
     * getAll
     * @returns Page_EvaluationDto_ OK
     * @throws ApiError
     */
    public static getAllUsingGet({
        limit,
        offset,
        search,
    }: {
        limit?: number,
        offset?: number,
        /**
         * search
         */
        search?: string,
    }): CancelablePromise<Page_EvaluationDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/evaluations',
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
     * create
     * @returns EvaluationDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: EvaluationRequest,
    }): CancelablePromise<EvaluationDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/evaluations',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * toggleUsesGradingEvaluation
     * @returns any OK
     * @throws ApiError
     */
    public static toggleUsesGradingEvaluationUsingPut(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/evaluations/toggle',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getOne
     * @returns EvaluationDto OK
     * @throws ApiError
     */
    public static getOneUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: string,
    }): CancelablePromise<EvaluationDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/evaluations/{id}',
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
     * update
     * @returns EvaluationDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateUsingPut({
        id,
        request,
    }: {
        /**
         * id
         */
        id: string,
        /**
         * request
         */
        request: UpdateEvaluationRequest,
    }): CancelablePromise<EvaluationDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/evaluations/{id}',
            path: {
                'id': id,
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
     * delete
     * @returns any OK
     * @throws ApiError
     */
    public static deleteUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/evaluations/{id}',
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
