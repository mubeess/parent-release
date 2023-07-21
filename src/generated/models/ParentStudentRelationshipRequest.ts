/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ParentStudentRelationshipRequest = {
  arm_name?: string;
  class_level_name?: string;
  first_name?: string;
  last_name?: string;
  profile_pic?: string;
  relationship_type?: 'FATHER' | 'GUARDIAN' | 'MOTHER';
  student_id?: string;
  student_school_id?: string;
};
