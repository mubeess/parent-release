/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RatingDefinitionRequest } from './RatingDefinitionRequest';

export type CreateSkillRatingsRequest = {
    rating_definition_requests?: Array<RatingDefinitionRequest>;
    rating_name: string;
};

