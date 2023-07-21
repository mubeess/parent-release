/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attempt } from './Attempt';

export type StudentPaperAnswersRequest = {
  attempts: Array<Attempt>;
  final_submission: boolean;
  paper_id: string;
  student_id: string;
};
