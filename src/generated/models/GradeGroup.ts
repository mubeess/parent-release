/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevel } from './ClassLevel';
import type { Evaluation } from './Evaluation';
import type { GradeEntity } from './GradeEntity';

export type GradeGroup = {
    class_levels?: Array<ClassLevel>;
    deleted: boolean;
    evaluations?: Array<Evaluation>;
    grades?: Array<GradeEntity>;
    group_name: string;
    id: string;
};

