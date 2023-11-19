/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PromotionCriteriaRequest } from '../models/PromotionCriteriaRequest';
import type { PromotionCriteriaResponse } from '../models/PromotionCriteriaResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PromotionCriteriaRestControllerService {

    /**
     * getPromotionCriteria
     * @returns PromotionCriteriaResponse OK
     * @throws ApiError
     */
    public static getPromotionCriteriaUsingGet({
        classLevelId,
        termId,
    }: {
        /**
         * class-level-id
         */
        classLevelId: string,
        /**
         * term-id
         */
        termId: string,
    }): CancelablePromise<PromotionCriteriaResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/promotion-criteria',
            query: {
                'class-level-id': classLevelId,
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
     * savePromotionCriteria
     * @returns PromotionCriteriaResponse OK
     * @returns any Created
     * @throws ApiError
     */
    public static savePromotionCriteriaUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: PromotionCriteriaRequest,
    }): CancelablePromise<PromotionCriteriaResponse | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/promotion-criteria',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
