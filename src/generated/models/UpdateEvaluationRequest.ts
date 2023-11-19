/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EvaluationItemUpdateRequest } from './EvaluationItemUpdateRequest';

export type UpdateEvaluationRequest = {
    abbreviation?: string;
    evaluation_items?: Array<EvaluationItemUpdateRequest>;
    title?: string;
};

