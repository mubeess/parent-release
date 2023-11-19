/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubBreakdownScore } from './SubBreakdownScore';

export type Breakdown = {
    breakdown_order?: number;
    id?: string;
    last_updated?: string;
    name?: string;
    score?: number;
    student_score?: number;
    sub_breakdown_scores?: Array<SubBreakdownScore>;
};

