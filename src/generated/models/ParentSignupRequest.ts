/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ParentStudentRelationshipRequest } from './ParentStudentRelationshipRequest';

export type ParentSignupRequest = {
  email?: string;
  first_name?: string;
  gender: 'FEMALE' | 'MALE';
  last_name?: string;
  parent_student_relationship_list?: Array<ParentStudentRelationshipRequest>;
  phone: string;
};
