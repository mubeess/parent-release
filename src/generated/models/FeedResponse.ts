/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserResponse } from './UserResponse';

export type FeedResponse = {
    attachments?: Array<string>;
    created_at?: string;
    group?: string;
    id?: string;
    message?: string;
    sender?: UserResponse;
    updated_at?: string;
};

