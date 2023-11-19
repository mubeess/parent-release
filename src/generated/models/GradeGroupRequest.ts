/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GradeRequest } from './GradeRequest';

export type GradeGroupRequest = {
    evaluation_uuids?: Array<string>;
    grades?: Array<GradeRequest>;
    group_name: string;
    id: string;
};

