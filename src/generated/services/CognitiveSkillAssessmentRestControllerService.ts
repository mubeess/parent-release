/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupedStudentSkillAssessmentResponse } from '../models/GroupedStudentSkillAssessmentResponse';
import type { StudentSkillAssessmentDto } from '../models/StudentSkillAssessmentDto';
import type { UpdateStudentSkillAssessmentRequest } from '../models/UpdateStudentSkillAssessmentRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CognitiveSkillAssessmentRestControllerService {

    /**
     * getStudentSkillAssessments
     * @returns StudentSkillAssessmentDto OK
     * @throws ApiError
     */
    public static getStudentSkillAssessmentsUsingGet({
        studentId,
        termId,
        skillGroupId,
    }: {
        studentId: string,
        termId: string,
        skillGroupId?: string,
    }): CancelablePromise<Array<StudentSkillAssessmentDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cognitive-skill-assessment',
            query: {
                'skillGroupId': skillGroupId,
                'studentId': studentId,
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
     * updateStudentSkillAssessments
     * @returns any OK
     * @throws ApiError
     */
    public static updateStudentSkillAssessmentsUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: UpdateStudentSkillAssessmentRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/cognitive-skill-assessment',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getStudentSkillAssessmentsGrouped
     * @returns GroupedStudentSkillAssessmentResponse OK
     * @throws ApiError
     */
    public static getStudentSkillAssessmentsGroupedUsingGet({
        studentId,
        termId,
        skillGroupId,
    }: {
        studentId: string,
        termId: string,
        skillGroupId?: string,
    }): CancelablePromise<GroupedStudentSkillAssessmentResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cognitive-skill-assessment/grouped',
            query: {
                'skillGroupId': skillGroupId,
                'studentId': studentId,
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
