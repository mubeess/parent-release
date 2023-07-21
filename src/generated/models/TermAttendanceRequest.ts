/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StudentAttendanceCount } from './StudentAttendanceCount';

export type TermAttendanceRequest = {
  arm_id: string;
  class_level_id: string;
  student_attendance_count?: Array<StudentAttendanceCount>;
  term_id: string;
};
