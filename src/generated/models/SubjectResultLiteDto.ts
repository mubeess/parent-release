/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssessmentAnalysis } from './AssessmentAnalysis';

export type SubjectResultLiteDto = {
  abbreviation?: string;
  result?: AssessmentAnalysis;
  subject_code?: string;
  subject_comment?: string;
  subject_id?: string;
  subject_name?: string;
};
