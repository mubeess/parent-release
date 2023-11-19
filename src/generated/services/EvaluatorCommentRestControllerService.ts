/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EvaluatorCommentDto } from '../models/EvaluatorCommentDto';
import type { EvaluatorCommentRequest } from '../models/EvaluatorCommentRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EvaluatorCommentRestControllerService {

    /**
     * getEvaluatorCommentsByClass
     * @returns EvaluatorCommentDto OK
     * @throws ApiError
     */
    public static getEvaluatorCommentsByClassUsingGet({
        armId,
        classLevelId,
        termId,
    }: {
        armId?: string,
        classLevelId?: string,
        termId?: string,
    }): CancelablePromise<Array<EvaluatorCommentDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/evaluator-comment',
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
     * saveEvaluatorComments
     * @returns EvaluatorCommentDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveEvaluatorCommentsUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: EvaluatorCommentRequest,
    }): CancelablePromise<Array<EvaluatorCommentDto> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/evaluator-comment',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
