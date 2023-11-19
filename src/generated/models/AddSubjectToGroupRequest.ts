/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubjectLiteDto } from './SubjectLiteDto';

export type AddSubjectToGroupRequest = {
    subject_group_id?: string;
    subject_group_name?: string;
    subjects?: Array<SubjectLiteDto>;
};

