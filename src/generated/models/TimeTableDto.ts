/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TermDto } from './TermDto';
import type { TimeTablePeriodDto } from './TimeTablePeriodDto';

export type TimeTableDto = {
    id?: string;
    term?: TermDto;
    time_table_periods?: Array<TimeTablePeriodDto>;
};

