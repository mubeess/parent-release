/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttendanceData } from './AttendanceData';
import type { StudentLiteDto } from './StudentLiteDto';

export type StudentAttendance = {
  attendance?: Array<AttendanceData>;
  student?: StudentLiteDto;
};
