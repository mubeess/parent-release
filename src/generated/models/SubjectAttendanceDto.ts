/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassMemberDto } from './ClassMemberDto';
import type { SubjectAttendancePKDto } from './SubjectAttendancePKDto';

export type SubjectAttendanceDto = {
  attendance_status?: 'ABSENT' | 'LATE' | 'PRESENT';
  class_member?: ClassMemberDto;
  comment?: string;
  pk?: SubjectAttendancePKDto;
};
