/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StudentAttendanceRequest } from './StudentAttendanceRequest';

export type AttendanceRequest = {
    arm_id: string;
    class_level_id: string;
    date_recorded: string;
    student_attendance_requests?: Array<StudentAttendanceRequest>;
    term_id: string;
};

