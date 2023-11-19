/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArmDto } from '../models/ArmDto';
import type { CreateArmRequest } from '../models/CreateArmRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ArmRestControllerService {

    /**
     * getAllArms
     * @returns ArmDto OK
     * @throws ApiError
     */
    public static getAllArmsUsingGet(): CancelablePromise<Array<ArmDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/arms',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createArm
     * @returns ArmDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createArmUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: CreateArmRequest,
    }): CancelablePromise<ArmDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/arms',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateArm
     * @returns ArmDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateArmUsingPut({
        armDto,
    }: {
        /**
         * armDto
         */
        armDto: ArmDto,
    }): CancelablePromise<ArmDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/arms',
            body: armDto,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getAllActiveArms
     * @returns ArmDto OK
     * @throws ApiError
     */
    public static getAllActiveArmsUsingGet(): CancelablePromise<Array<ArmDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/arms/active-arms',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createArms
     * @returns ArmDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createArmsUsingPost({
        createArmRequestList,
    }: {
        /**
         * createArmRequestList
         */
        createArmRequestList: Array<CreateArmRequest>,
    }): CancelablePromise<Array<ArmDto> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/arms/multiple',
            body: createArmRequestList,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteArm
     * @returns any OK
     * @throws ApiError
     */
    public static deleteArmUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/arms/{id}',
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
