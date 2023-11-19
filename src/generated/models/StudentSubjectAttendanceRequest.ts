/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StudentSubjectAttendanceRequest = {
    attendance_status?: 'ABSENT' | 'LATE' | 'PRESENT';
    comment?: string;
    student_id?: string;
};

