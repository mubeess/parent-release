/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StudentClassAttendanceResponse = {
    absence_reason?: string;
    afternoon_status?: 'ABSENT' | 'LATE' | 'PRESENT';
    created_by?: string;
    date_recorded?: string;
    late?: boolean;
    morning_status?: 'ABSENT' | 'LATE' | 'PRESENT';
    staff_profile_pic?: string;
};

