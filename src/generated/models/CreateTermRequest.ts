/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTermRequest = {
  current_term?: boolean;
  end_date: string;
  next_term_start_date: string;
  school_term_definition_id: string;
  session_id: string;
  start_date: string;
  term_order: number;
};
