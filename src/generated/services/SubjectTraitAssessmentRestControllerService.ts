/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClassLevelSubjectTraitsResponse } from '../models/ClassLevelSubjectTraitsResponse';
import type { SubjectTraitAssessmentRequest } from '../models/SubjectTraitAssessmentRequest';
import type { SubjectTraitAssessmentResponse } from '../models/SubjectTraitAssessmentResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubjectTraitAssessmentRestControllerService {

    /**
     * saveSubjectTraitAssessments
     * @returns any OK
     * @throws ApiError
     */
    public static saveSubjectTraitAssessmentsUsingPost({
        requests,
        termId,
    }: {
        /**
         * requests
         */
        requests: Array<SubjectTraitAssessmentRequest>,
        /**
         * termId
         */
        termId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subject-trait-assessments',
            query: {
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

    /**
     * getSavedClassLevelSubjectTraits
     * @returns SubjectTraitAssessmentResponse OK
     * @throws ApiError
     */
    public static getSavedClassLevelSubjectTraitsUsingGet({
        armId,
        classLevelId,
        subjectId,
        termId,
    }: {
        /**
         * armId
         */
        armId: string,
        /**
         * classLevelId
         */
        classLevelId: string,
        /**
         * subjectId
         */
        subjectId: string,
        /**
         * termId
         */
        termId: string,
    }): CancelablePromise<Array<SubjectTraitAssessmentResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subject-trait-assessments/class/{classLevelId}/arm/{armId}/subject/{subjectId}',
            path: {
                'armId': armId,
                'classLevelId': classLevelId,
                'subjectId': subjectId,
            },
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
     * getClassLevelSubjectTraits
     * @returns ClassLevelSubjectTraitsResponse OK
     * @throws ApiError
     */
    public static getClassLevelSubjectTraitsUsingGet({
        classLevelId,
        subjectId,
        termId,
    }: {
        /**
         * classLevelId
         */
        classLevelId: string,
        /**
         * subjectId
         */
        subjectId: string,
        /**
         * termId
         */
        termId: string,
    }): CancelablePromise<ClassLevelSubjectTraitsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subject-trait-assessments/class/{classLevelId}/subject/{subjectId}',
            path: {
                'classLevelId': classLevelId,
                'subjectId': subjectId,
            },
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

}
