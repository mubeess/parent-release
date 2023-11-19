/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevelLiteDto } from './ClassLevelLiteDto';
import type { SkillDto } from './SkillDto';
import type { SkillGroupDto } from './SkillGroupDto';

export type SkillConfiguration = {
    class_levels?: Array<ClassLevelLiteDto>;
    skill_group?: SkillGroupDto;
    skills?: Array<SkillDto>;
};

