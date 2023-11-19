/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StudentSubjectAttendanceRequest } from './StudentSubjectAttendanceRequest';

export type SubjectAttendanceRequest = {
    arm_id: string;
    class_level_id: string;
    lesson_date: string;
    student_subject_attendance_requests?: Array<StudentSubjectAttendanceRequest>;
    subject_id: string;
    term_id: string;
};

