/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassInformationDto } from './ClassInformationDto';

export type ClassMemberRequest = {
  class_information_dto?: ClassInformationDto;
  student_ids?: Array<string>;
};
