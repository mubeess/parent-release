/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClassLevelSubjectTraitRatingRequest } from '../models/ClassLevelSubjectTraitRatingRequest';
import type { SubjectTraitRatingResponse } from '../models/SubjectTraitRatingResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubjectTraitRatingRestControllerService {

    /**
     * getSubjectTraitRatings
     * @returns SubjectTraitRatingResponse OK
     * @throws ApiError
     */
    public static getSubjectTraitRatingsUsingGet({
        termId,
    }: {
        /**
         * termId
         */
        termId: string,
    }): CancelablePromise<Array<SubjectTraitRatingResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subject-trait-ratings',
            query: {
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
     * createClassLevelSubjectTraitRatings
     * @returns any OK
     * @throws ApiError
     */
    public static createClassLevelSubjectTraitRatingsUsingPost({
        requests,
        termId,
    }: {
        /**
         * requests
         */
        requests: Array<ClassLevelSubjectTraitRatingRequest>,
        /**
         * termId
         */
        termId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subject-trait-ratings/{termId}',
            path: {
                'termId': termId,
            },
            body: requests,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
