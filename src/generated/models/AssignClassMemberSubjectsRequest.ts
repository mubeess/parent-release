/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StudentSubjectsRequest } from './StudentSubjectsRequest';

export type AssignClassMemberSubjectsRequest = {
    arm_id: string;
    class_level_id: string;
    student_subjects_requests?: Array<StudentSubjectsRequest>;
    term_id: string;
};

