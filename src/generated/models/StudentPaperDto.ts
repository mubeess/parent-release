/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttemptDto } from './AttemptDto';
import type { PaperDto } from './PaperDto';
import type { StudentLiteDto } from './StudentLiteDto';

export type StudentPaperDto = {
  attempts?: Array<AttemptDto>;
  paper?: PaperDto;
  staus?: 'ONGOING' | 'STARTED' | 'SUBMITTED';
  student?: StudentLiteDto;
  time_started?: string;
  time_submitted?: string;
};
