/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTermDefinitionRequest } from '../models/CreateTermDefinitionRequest';
import type { SchoolTermDefinitionDto } from '../models/SchoolTermDefinitionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SchoolTermDefinitionRestControllerService {

    /**
     * getAllDefinitions
     * @returns SchoolTermDefinitionDto OK
     * @throws ApiError
     */
    public static getAllDefinitionsUsingGet(): CancelablePromise<Array<SchoolTermDefinitionDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/term-definitions',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createDefinition
     * @returns SchoolTermDefinitionDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createDefinitionUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: CreateTermDefinitionRequest,
    }): CancelablePromise<SchoolTermDefinitionDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/term-definitions',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateDefinition
     * @returns SchoolTermDefinitionDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateDefinitionUsingPut({
        dto,
    }: {
        /**
         * dto
         */
        dto: SchoolTermDefinitionDto,
    }): CancelablePromise<SchoolTermDefinitionDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/term-definitions',
            body: dto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getOneDefinition
     * @returns SchoolTermDefinitionDto OK
     * @throws ApiError
     */
    public static getOneDefinitionUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: string,
    }): CancelablePromise<SchoolTermDefinitionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/term-definitions/{id}',
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
     * deleteDefinition
     * @returns any OK
     * @throws ApiError
     */
    public static deleteDefinitionUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/term-definitions/{id}',
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
