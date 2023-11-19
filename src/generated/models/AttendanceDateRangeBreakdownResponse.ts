/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StudentAttendance } from './StudentAttendance';

export type AttendanceDateRangeBreakdownResponse = {
    student_attendance?: Array<StudentAttendance>;
    total_absent?: number;
    total_late?: number;
    total_present?: number;
    total_students?: number;
};

