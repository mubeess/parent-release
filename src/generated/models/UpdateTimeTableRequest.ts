/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdateTimeTablePeriodRequest } from './UpdateTimeTablePeriodRequest';

export type UpdateTimeTableRequest = {
  periods_to_delete: Array<string>;
  periods_to_update: Array<UpdateTimeTablePeriodRequest>;
  term_id: string;
};
