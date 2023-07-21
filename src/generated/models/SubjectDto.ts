/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevel } from './ClassLevel';
import type { SubjectTeacherDto } from './SubjectTeacherDto';

export type SubjectDto = {
  abbreviation?: string;
  class_levels?: Array<ClassLevel>;
  id?: string;
  short_name?: string;
  subject_alias?: string;
  subject_code?: string;
  subject_name?: string;
  subject_order?: number;
  subject_teachers?: Array<SubjectTeacherDto>;
  tags?: string;
  units?: number;
};
