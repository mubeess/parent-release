/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DailyStudentAttendanceResponse } from './DailyStudentAttendanceResponse';

export type StudentSubjectAttendanceResponse = {
    lesson_date?: string;
    subject_attendance_records?: Array<DailyStudentAttendanceResponse>;
};

