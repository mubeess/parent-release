/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassInformationDto } from './ClassInformationDto';
import type { StudentDto } from './StudentDto';
import type { SubjectDto } from './SubjectDto';

export type ClassMemberDto = {
  class_information_dto?: ClassInformationDto;
  student_dto?: StudentDto;
  subject_dtos?: Array<SubjectDto>;
};
