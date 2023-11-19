/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Feed } from '../models/Feed';
import type { FeedResponse } from '../models/FeedResponse';
import type { GroupRequest } from '../models/GroupRequest';
import type { GroupResponse } from '../models/GroupResponse';
import type { PaginatedResponse_GroupResponse_ } from '../models/PaginatedResponse_GroupResponse_';
import type { PusherAuthRequest } from '../models/PusherAuthRequest';
import type { PusherAuthResponse } from '../models/PusherAuthResponse';
import type { ReactionRequest } from '../models/ReactionRequest';
import type { ReactionResponse } from '../models/ReactionResponse';
import type { UserGroupRequest } from '../models/UserGroupRequest';
import type { UserResponse } from '../models/UserResponse';
import type { UsersGroupAddRequest } from '../models/UsersGroupAddRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ActivityFeedRestControllerService {

    /**
     * fetchGroupFeeds
     * @returns Feed OK
     * @throws ApiError
     */
    public static fetchGroupFeedsUsingGet({
        authorization,
        groupId,
    }: {
        /**
         * Authorization
         */
        authorization: string,
        /**
         * groupId
         */
        groupId: string,
    }): CancelablePromise<Array<Feed>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activity-feed/feeds',
            headers: {
                'Authorization': authorization,
            },
            query: {
                'groupId': groupId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createFeed
     * @returns FeedResponse OK
     * @returns any Created
     * @throws ApiError
     */
    public static createFeedUsingPost({
        authorization,
        group,
        message,
        file,
    }: {
        /**
         * Authorization
         */
        authorization: string,
        group: string,
        message: string,
        file?: Array<Blob>,
    }): CancelablePromise<FeedResponse | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activity-feed/feeds',
            headers: {
                'Authorization': authorization,
            },
            query: {
                'file': file,
                'group': group,
                'message': message,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * fetchMyFeeds
     * @returns Feed OK
     * @throws ApiError
     */
    public static fetchMyFeedsUsingGet({
        authorization,
    }: {
        /**
         * Authorization
         */
        authorization: string,
    }): CancelablePromise<Array<Feed>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activity-feed/feeds/me',
            headers: {
                'Authorization': authorization,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * reactToFeed
     * @returns ReactionResponse OK
     * @returns any Created
     * @throws ApiError
     */
    public static reactToFeedUsingPut({
        authorization,
        feedId,
        request,
    }: {
        /**
         * Authorization
         */
        authorization: string,
        /**
         * feedId
         */
        feedId: string,
        /**
         * request
         */
        request: ReactionRequest,
    }): CancelablePromise<Array<ReactionResponse> | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/activity-feed/feeds/{feedId}/react',
            path: {
                'feedId': feedId,
            },
            headers: {
                'Authorization': authorization,
            },
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * fetchGroups
     * @returns PaginatedResponse_GroupResponse_ OK
     * @throws ApiError
     */
    public static fetchGroupsUsingGet({
        authorization,
        limit,
        offset,
    }: {
        /**
         * Authorization
         */
        authorization: string,
        limit?: number,
        offset?: number,
    }): CancelablePromise<PaginatedResponse_GroupResponse_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activity-feed/groups',
            headers: {
                'Authorization': authorization,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createGroup
     * @returns GroupResponse OK
     * @returns any Created
     * @throws ApiError
     */
    public static createGroupUsingPost({
        authorization,
        request,
    }: {
        /**
         * Authorization
         */
        authorization: string,
        /**
         * request
         */
        request: GroupRequest,
    }): CancelablePromise<GroupResponse | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activity-feed/groups',
            headers: {
                'Authorization': authorization,
            },
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * addUserToGroups
     * @returns UserResponse OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUserToGroupsUsingPost({
        authorization,
        request,
    }: {
        /**
         * Authorization
         */
        authorization: string,
        /**
         * request
         */
        request: UserGroupRequest,
    }): CancelablePromise<UserResponse | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activity-feed/groups/users',
            headers: {
                'Authorization': authorization,
            },
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * addUsersToGroup
     * @returns UserResponse OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUsersToGroupUsingPost({
        authorization,
        request,
    }: {
        /**
         * Authorization
         */
        authorization: string,
        /**
         * request
         */
        request: UsersGroupAddRequest,
    }): CancelablePromise<Array<UserResponse> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activity-feed/groups/users/bulk',
            headers: {
                'Authorization': authorization,
            },
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * fetchGroupUsers
     * @returns UserResponse OK
     * @throws ApiError
     */
    public static fetchGroupUsersUsingGet({
        authorization,
        groupId,
    }: {
        /**
         * Authorization
         */
        authorization: string,
        /**
         * groupId
         */
        groupId: string,
    }): CancelablePromise<Array<UserResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activity-feed/groups/{groupId}/users',
            path: {
                'groupId': groupId,
            },
            headers: {
                'Authorization': authorization,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * removeUserFromGroup
     * @returns any OK
     * @throws ApiError
     */
    public static removeUserFromGroupUsingDelete({
        authorization,
        groupId,
        userId,
    }: {
        /**
         * Authorization
         */
        authorization: string,
        /**
         * groupId
         */
        groupId: string,
        /**
         * userId
         */
        userId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/activity-feed/groups/{groupId}/users/{userId}',
            path: {
                'groupId': groupId,
                'userId': userId,
            },
            headers: {
                'Authorization': authorization,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * pusherAuthenticate
     * @returns PusherAuthResponse OK
     * @returns any Created
     * @throws ApiError
     */
    public static pusherAuthenticateUsingPost({
        authorization,
        request,
    }: {
        /**
         * Authorization
         */
        authorization: string,
        /**
         * request
         */
        request: PusherAuthRequest,
    }): CancelablePromise<PusherAuthResponse | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activity-feed/pusher/auth',
            headers: {
                'Authorization': authorization,
            },
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * fetchMyGroups
     * @returns GroupResponse OK
     * @throws ApiError
     */
    public static fetchMyGroupsUsingGet({
        authorization,
    }: {
        /**
         * Authorization
         */
        authorization: string,
    }): CancelablePromise<Array<GroupResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activity-feed/users/me/groups',
            headers: {
                'Authorization': authorization,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
