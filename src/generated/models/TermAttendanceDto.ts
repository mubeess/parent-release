/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassMemberDto } from './ClassMemberDto';

export type TermAttendanceDto = {
    absent_count?: number;
    class_member?: ClassMemberDto;
    date_modified?: string;
    late_count?: number;
    modified_by?: string;
    present_count?: number;
};

