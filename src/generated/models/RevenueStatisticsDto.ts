/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArmDto } from './ArmDto';
import type { ClassLevel } from './ClassLevel';

export type RevenueStatisticsDto = {
  arm?: ArmDto;
  class_level?: ClassLevel;
  session_id?: string;
  term_id?: string;
  total_expected_revenue?: number;
  total_generated_revenue?: number;
  total_outstanding?: number;
};
