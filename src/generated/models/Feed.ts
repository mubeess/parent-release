/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FeedActor } from './FeedActor';
import type { FeedObject } from './FeedObject';
import type { Reaction } from './Reaction';

export type Feed = {
    actor?: FeedActor;
    id?: string;
    object?: FeedObject;
    published?: string;
    reactions?: Array<Reaction>;
    type?: string;
};

