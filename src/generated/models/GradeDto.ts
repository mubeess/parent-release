/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EvaluationItemDto } from './EvaluationItemDto';

export type GradeDto = {
    color?: string;
    end_range?: number;
    evaluation_items?: Array<EvaluationItemDto>;
    id?: string;
    letter_grade?: string;
    principal_auto_comment?: string;
    remark?: string;
    start_range?: number;
    teacher_auto_comment?: string;
};

