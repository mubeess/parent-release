/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubjectDto } from './SubjectDto';

export type UpdateSubjectRequest = {
    class_level_ids?: Array<string>;
    subject: SubjectDto;
};

