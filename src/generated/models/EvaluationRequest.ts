/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EvaluationItemRequest } from './EvaluationItemRequest';

export type EvaluationRequest = {
    abbreviation: string;
    evaluation_items?: Array<EvaluationItemRequest>;
    title: string;
};

