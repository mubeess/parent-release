/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttendanceAnalysis } from './AttendanceAnalysis';
import type { ClassLevelLiteDto } from './ClassLevelLiteDto';
import type { MonthlyAttendanceBreakdown } from './MonthlyAttendanceBreakdown';

export type ClassLevelBreakdown = {
    attendance_analysis?: AttendanceAnalysis;
    class_level?: ClassLevelLiteDto;
    monthly_attendance_breakdowns?: Array<MonthlyAttendanceBreakdown>;
    number_of_students?: number;
};

