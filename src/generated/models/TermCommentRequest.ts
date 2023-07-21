/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TermCommentRequest = {
  comments: string;
  staff_comment_type:
    | 'FORM_TEACHER_COMMENT'
    | 'FORM_TEACHER_CUMULATIVE_COMMENT'
    | 'HOUSE_MASTER_COMMENT'
    | 'PRINCIPAL_COMMENT'
    | 'PRINCIPAL_CUMULATIVE_COMMENT'
    | 'SUBJECT_TEACHER_COMMENT'
    | 'VICE_PRINCIPAL_COMMENT'
    | 'VICE_PRINCIPAL_CUMULATIVE_COMMENT';
  staff_id: string;
  student_id: string;
  term_comment_type: 'END_OF_TERM' | 'MID_TERM';
  term_id: string;
};
