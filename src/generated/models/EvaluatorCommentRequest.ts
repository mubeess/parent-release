/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommentData } from './CommentData';

export type EvaluatorCommentRequest = {
    arm_id: string;
    class_level_id: string;
    comments?: Array<CommentData>;
    evaluator_role_id: string;
    term_id: string;
};

