/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MonthlyAttendance } from './MonthlyAttendance';

export type StudentAttendanceSummaryResponse = {
    days_school_opened?: number;
    monthly_attendance?: Array<MonthlyAttendance>;
    total_days_absent?: number;
    total_days_late?: number;
    total_days_not_recorded?: number;
    total_days_present?: number;
    total_days_recorded?: number;
};

