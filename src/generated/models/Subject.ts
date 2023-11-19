/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Assessment } from './Assessment';

export type Subject = {
    assessments?: Array<Assessment>;
    id?: string;
    name?: string;
    subject_comment?: string;
};

