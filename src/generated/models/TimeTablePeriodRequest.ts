/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocalTimeReq } from './LocalTimeReq';

export type TimeTablePeriodRequest = {
  arm_id?: string;
  class_level_id: string;
  days_of_the_week: Array<
    'FRIDAY' | 'MONDAY' | 'SATURDAY' | 'SUNDAY' | 'THURSDAY' | 'TUESDAY' | 'WEDNESDAY'
  >;
  end_time: LocalTimeReq;
  is_break_period: boolean;
  is_early_years: boolean;
  start_time: LocalTimeReq;
  subject_id?: string;
  teacher_id?: string;
  trait_id?: string;
};
