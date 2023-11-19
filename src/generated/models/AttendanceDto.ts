/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttendancePkDto } from './AttendancePkDto';
import type { ClassMemberDto } from './ClassMemberDto';

export type AttendanceDto = {
    absence_reason?: string;
    afternoon_status?: 'ABSENT' | 'LATE' | 'PRESENT';
    class_member?: ClassMemberDto;
    date_recorded?: string;
    late?: boolean;
    morning_status?: 'ABSENT' | 'LATE' | 'PRESENT';
    pk?: AttendancePkDto;
};

