/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateEvaluatorRoleRequest } from '../models/CreateEvaluatorRoleRequest';
import type { EvaluatorRoleDto } from '../models/EvaluatorRoleDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EvaluatorRoleRestControllerService {

    /**
     * createVocationalRole
     * @returns EvaluatorRoleDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createVocationalRoleUsingPost({
        roleRequest,
    }: {
        /**
         * roleRequest
         */
        roleRequest: CreateEvaluatorRoleRequest,
    }): CancelablePromise<EvaluatorRoleDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/evaluator-role',
            body: roleRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateVocationalRole
     * @returns EvaluatorRoleDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateVocationalRoleUsingPut({
        evaluatorRoleDto,
    }: {
        /**
         * evaluatorRoleDto
         */
        evaluatorRoleDto: EvaluatorRoleDto,
    }): CancelablePromise<EvaluatorRoleDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/evaluator-role',
            body: evaluatorRoleDto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getAllVocationalRoles
     * @returns EvaluatorRoleDto OK
     * @throws ApiError
     */
    public static getAllVocationalRolesUsingGet(): CancelablePromise<Array<EvaluatorRoleDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/evaluator-role/all',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * toggleUsesEvaluatorRole
     * @returns any OK
     * @throws ApiError
     */
    public static toggleUsesEvaluatorRoleUsingPut(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/evaluator-role/toggle',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getVocationalRole
     * @returns EvaluatorRoleDto OK
     * @throws ApiError
     */
    public static getVocationalRoleUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: string,
    }): CancelablePromise<EvaluatorRoleDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/evaluator-role/{id}',
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
     * deleteVocationalRole
     * @returns any OK
     * @throws ApiError
     */
    public static deleteVocationalRoleUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/evaluator-role/{id}',
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
