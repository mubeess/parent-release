/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StaffDto } from './StaffDto';
import type { StudentLiteDto } from './StudentLiteDto';
import type { TermLiteDto } from './TermLiteDto';

export type TermCommentDto = {
  comments?: string;
  modified_by?: StaffDto;
  staff_comment_type?:
    | 'FORM_TEACHER_COMMENT'
    | 'FORM_TEACHER_CUMULATIVE_COMMENT'
    | 'HOUSE_MASTER_COMMENT'
    | 'PRINCIPAL_COMMENT'
    | 'PRINCIPAL_CUMULATIVE_COMMENT'
    | 'SUBJECT_TEACHER_COMMENT'
    | 'VICE_PRINCIPAL_COMMENT'
    | 'VICE_PRINCIPAL_CUMULATIVE_COMMENT';
  student?: StudentLiteDto;
  term?: TermLiteDto;
  term_comment_type?: 'END_OF_TERM' | 'MID_TERM';
};
