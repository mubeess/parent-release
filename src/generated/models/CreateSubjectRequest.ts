/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateSubjectRequest = {
  abbreviation: string;
  class_level_ids?: Array<string>;
  short_name: string;
  subject_alias?: string;
  subject_code: string;
  subject_name: string;
  subject_order?: number;
  tags?: string;
  units?: number;
};
