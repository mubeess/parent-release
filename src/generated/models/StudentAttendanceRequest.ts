/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StudentAttendanceRequest = {
    absence_reason?: string;
    afternoon_status?: 'ABSENT' | 'LATE' | 'PRESENT';
    late?: boolean;
    morning_status?: 'ABSENT' | 'LATE' | 'PRESENT';
    student_id?: string;
};

