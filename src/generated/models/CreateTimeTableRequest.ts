/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TimeTablePeriodRequest } from './TimeTablePeriodRequest';

export type CreateTimeTableRequest = {
  schedule: Array<TimeTablePeriodRequest>;
  term_id: string;
};
