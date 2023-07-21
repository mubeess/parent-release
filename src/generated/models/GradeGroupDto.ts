/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevelLiteDto } from './ClassLevelLiteDto';
import type { GradeDto } from './GradeDto';

export type GradeGroupDto = {
  class_levels?: Array<ClassLevelLiteDto>;
  grades?: Array<GradeDto>;
  group_name?: string;
  id?: string;
};
