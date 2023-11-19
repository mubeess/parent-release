/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssessmentAndBreakdownsDto } from '../models/AssessmentAndBreakdownsDto';
import type { AssessmentBreakdownDto } from '../models/AssessmentBreakdownDto';
import type { AssessmentBreakdownRequest } from '../models/AssessmentBreakdownRequest';
import type { AssessmentConfigurationDto } from '../models/AssessmentConfigurationDto';
import type { AssessmentConfigurationRequest } from '../models/AssessmentConfigurationRequest';
import type { ClassLevelAssessmentFormatRequest } from '../models/ClassLevelAssessmentFormatRequest';
import type { SubAssessmentBreakdownDto } from '../models/SubAssessmentBreakdownDto';
import type { SubAssessmentBreakdownRequest } from '../models/SubAssessmentBreakdownRequest';
import type { UpdateAssessmentBreakdownNameRequest } from '../models/UpdateAssessmentBreakdownNameRequest';
import type { UpdateAssessmentNameRequest } from '../models/UpdateAssessmentNameRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AssessmentConfigurationRestControllerService {

    /**
     * getAssessmentConfigs
     * @returns AssessmentConfigurationDto OK
     * @throws ApiError
     */
    public static getAssessmentConfigsUsingGet(): CancelablePromise<Array<AssessmentConfigurationDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assessment-config',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createAssessmentConfig
     * @returns AssessmentConfigurationDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createAssessmentConfigUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: AssessmentConfigurationRequest,
    }): CancelablePromise<AssessmentConfigurationDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assessment-config',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateAssessmentName
     * @returns AssessmentAndBreakdownsDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateAssessmentNameUsingPut({
        updateAssessmentNameRequest,
    }: {
        /**
         * updateAssessmentNameRequest
         */
        updateAssessmentNameRequest: UpdateAssessmentNameRequest,
    }): CancelablePromise<AssessmentAndBreakdownsDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/assessment-config',
            body: updateAssessmentNameRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getAssessmentBreakdowns
     * @returns AssessmentConfigurationDto OK
     * @throws ApiError
     */
    public static getAssessmentBreakdownsUsingGet({
        armId,
        classLevelId,
        subjectId,
        termId,
    }: {
        /**
         * arm-id
         */
        armId?: string,
        /**
         * class-level-id
         */
        classLevelId?: string,
        /**
         * subject-id
         */
        subjectId?: string,
        /**
         * term-id
         */
        termId?: string,
    }): CancelablePromise<AssessmentConfigurationDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assessment-config/breakdown',
            query: {
                'arm-id': armId,
                'class-level-id': classLevelId,
                'subject-id': subjectId,
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
     * createBreakdown
     * @returns AssessmentBreakdownDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static createBreakdownUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: AssessmentBreakdownRequest,
    }): CancelablePromise<AssessmentBreakdownDto | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assessment-config/breakdown',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateAssessmentBreakdownName
     * @returns AssessmentBreakdownDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateAssessmentBreakdownNameUsingPut({
        updateAssessmentBreakdownNameRequest,
    }: {
        /**
         * updateAssessmentBreakdownNameRequest
         */
        updateAssessmentBreakdownNameRequest: UpdateAssessmentBreakdownNameRequest,
    }): CancelablePromise<AssessmentBreakdownDto | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/assessment-config/breakdown',
            body: updateAssessmentBreakdownNameRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteBreakdown
     * @returns any OK
     * @throws ApiError
     */
    public static deleteBreakdownUsingDelete({
        breakdownId,
    }: {
        /**
         * breakdown-id
         */
        breakdownId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/assessment-config/breakdown/{breakdown-id}',
            path: {
                'breakdown-id': breakdownId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * createClassLevelAssessmentFormat
     * @returns any OK
     * @throws ApiError
     */
    public static createClassLevelAssessmentFormatUsingPost({
        requests,
        termId,
    }: {
        /**
         * requests
         */
        requests: Array<ClassLevelAssessmentFormatRequest>,
        /**
         * term_id
         */
        termId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assessment-config/class-levels/{term_id}',
            path: {
                'term_id': termId,
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
     * updateAssessmentSubBreakdown
     * @returns SubAssessmentBreakdownDto OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateAssessmentSubBreakdownUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: SubAssessmentBreakdownRequest,
    }): CancelablePromise<Array<SubAssessmentBreakdownDto> | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/assessment-config/sub-breakdown',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteAssessmentSubBreakdown
     * @returns any OK
     * @throws ApiError
     */
    public static deleteAssessmentSubBreakdownUsingDelete({
        assessmentBreakdownId,
        subAssessmentBreakdownId,
    }: {
        /**
         * assessmentBreakdownId
         */
        assessmentBreakdownId: string,
        /**
         * subAssessmentBreakdownId
         */
        subAssessmentBreakdownId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/assessment-config/sub-breakdown',
            query: {
                'assessmentBreakdownId': assessmentBreakdownId,
                'subAssessmentBreakdownId': subAssessmentBreakdownId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getTermAssessmentFormats
     * @returns AssessmentConfigurationDto OK
     * @throws ApiError
     */
    public static getTermAssessmentFormatsUsingGet({
        termId,
    }: {
        /**
         * term_id
         */
        termId: string,
    }): CancelablePromise<Array<AssessmentConfigurationDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assessment-config/termly/{term_id}',
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

    /**
     * getAssessmentConfig
     * @returns AssessmentConfigurationDto OK
     * @throws ApiError
     */
    public static getAssessmentConfigUsingGet({
        assessmentFormatId,
    }: {
        /**
         * assessment-format-id
         */
        assessmentFormatId: string,
    }): CancelablePromise<AssessmentConfigurationDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assessment-config/{assessment-format-id}',
            path: {
                'assessment-format-id': assessmentFormatId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteAssessmentConfig
     * @returns any OK
     * @throws ApiError
     */
    public static deleteAssessmentConfigUsingDelete({
        assessmentFormatId,
    }: {
        /**
         * assessment-format-id
         */
        assessmentFormatId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/assessment-config/{assessment-format-id}',
            path: {
                'assessment-format-id': assessmentFormatId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
