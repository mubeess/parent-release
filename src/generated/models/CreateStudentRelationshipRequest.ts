/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateStudentRelationshipRequest = {
  parent_id?: string;
  relationship_type?: 'FATHER' | 'GUARDIAN' | 'MOTHER';
  student_id?: string;
};
