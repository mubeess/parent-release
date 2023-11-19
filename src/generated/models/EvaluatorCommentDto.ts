/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassMemberLiteDto } from './ClassMemberLiteDto';
import type { EvaluatorRoleDto } from './EvaluatorRoleDto';
import type { StaffLiteDto } from './StaffLiteDto';

export type EvaluatorCommentDto = {
    class_member?: ClassMemberLiteDto;
    comment?: string;
    commenter?: StaffLiteDto;
    evaluator_role?: EvaluatorRoleDto;
    last_modified?: string;
};

