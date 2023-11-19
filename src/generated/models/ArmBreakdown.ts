/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArmDto } from './ArmDto';
import type { AttendanceAnalysis } from './AttendanceAnalysis';
import type { MonthlyAttendanceBreakdown } from './MonthlyAttendanceBreakdown';

export type ArmBreakdown = {
    arm?: ArmDto;
    attendance_analysis?: AttendanceAnalysis;
    monthly_attendance_breakdowns?: Array<MonthlyAttendanceBreakdown>;
    number_of_students?: number;
};

