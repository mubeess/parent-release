/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from '../models/Link';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WebMvcLinksHandlerService {

    /**
     * links
     * @returns Link OK
     * @throws ApiError
     */
    public static linksUsingGet(): CancelablePromise<Record<string, Record<string, Link>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/actuator',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
