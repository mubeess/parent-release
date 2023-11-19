/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EvaluationItem } from './EvaluationItem';

export type Evaluation = {
    abbreviation: string;
    deleted: boolean;
    evaluation_items?: Array<EvaluationItem>;
    id: string;
    title: string;
};

