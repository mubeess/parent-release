/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SessionDto } from '../models/SessionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SessionRestControllerService {

    /**
     * getAllSessions
     * @returns SessionDto OK
     * @throws ApiError
     */
    public static getAllSessionsUsingGet(): CancelablePromise<Array<SessionDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sessions',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getSession
     * @returns SessionDto OK
     * @throws ApiError
     */
    public static getSessionUsingGet({
        sessionId,
    }: {
        /**
         * session-id
         */
        sessionId: string,
    }): CancelablePromise<SessionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sessions/{session-id}',
            path: {
                'session-id': sessionId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
