/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Instruction } from './Instruction';

export type UpdateExamRequest = {
  active?: boolean;
  class_level_id?: string;
  end_date?: string;
  id?: string;
  instruction?: Instruction;
  name?: string;
  option_shuffle?: boolean;
  question_shuffle?: boolean;
  start_date?: string;
};
