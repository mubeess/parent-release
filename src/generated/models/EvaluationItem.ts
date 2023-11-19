/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Evaluation } from './Evaluation';

export type EvaluationItem = {
    deleted: boolean;
    evaluation?: Evaluation;
    id: string;
    key: string;
    value: string;
};

