/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArmDto } from './ArmDto';
import type { ClassLevelDto } from './ClassLevelDto';
import type { FormTeacherDto } from './FormTeacherDto';
import type { TermDto } from './TermDto';

export type ClassInformationDto = {
  arm?: ArmDto;
  assistant_form_teacher?: FormTeacherDto;
  class_level?: ClassLevelDto;
  main_form_teacher?: FormTeacherDto;
  term?: TermDto;
};
