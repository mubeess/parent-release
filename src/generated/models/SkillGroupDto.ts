/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevelLiteDto } from './ClassLevelLiteDto';
import type { SkillDto } from './SkillDto';

export type SkillGroupDto = {
  class_levels?: Array<ClassLevelLiteDto>;
  group_name?: string;
  id?: string;
  skills?: Array<SkillDto>;
};
