/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EvaluationItemDto } from './EvaluationItemDto';

export type EvaluationDto = {
    abbreviation?: string;
    evaluation_items?: Array<EvaluationItemDto>;
    id?: string;
    title?: string;
};

