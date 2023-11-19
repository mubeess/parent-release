/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevelLiteDto } from './ClassLevelLiteDto';
import type { EvaluationDto } from './EvaluationDto';
import type { GradeDto } from './GradeDto';

export type GradeGroupDto = {
    class_levels?: Array<ClassLevelLiteDto>;
    evaluations?: Array<EvaluationDto>;
    grades?: Array<GradeDto>;
    group_name?: string;
    id?: string;
};

