/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocalTimeReq } from './LocalTimeReq';

export type UpdateTimeTablePeriodRequest = {
  arm_id?: string;
  class_level_id?: string;
  day_of_week?: 'FRIDAY' | 'MONDAY' | 'SATURDAY' | 'SUNDAY' | 'THURSDAY' | 'TUESDAY' | 'WEDNESDAY';
  end_time?: LocalTimeReq;
  is_break_period?: boolean;
  period_id: string;
  start_time?: LocalTimeReq;
  subject_id?: string;
  teacher_id?: string;
  trait_id?: string;
};
