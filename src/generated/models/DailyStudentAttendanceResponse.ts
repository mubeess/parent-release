/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DailyStudentAttendanceResponse = {
  attendance_status?: 'ABSENT' | 'LATE' | 'PRESENT';
  comment?: string;
  created_by?: string;
  staff_profile_pic?: string;
  subject_id?: string;
  subject_name?: string;
};
