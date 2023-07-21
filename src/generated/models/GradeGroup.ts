/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevel } from './ClassLevel';
import type { GradeEntity } from './GradeEntity';

export type GradeGroup = {
  class_levels?: Array<ClassLevel>;
  deleted: boolean;
  grades?: Array<GradeEntity>;
  group_name: string;
  id: string;
};
