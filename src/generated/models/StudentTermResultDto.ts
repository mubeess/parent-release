/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssessmentAnalysis } from './AssessmentAnalysis';
import type { ClassInformation_ } from './ClassInformation_';
import type { Student_ } from './Student_';
import type { SubjectResult } from './SubjectResult';
import type { Term_ } from './Term_';

export type StudentTermResultDto = {
  class_information?: ClassInformation_;
  end_of_term_comments?: Record<string, string>;
  result?: AssessmentAnalysis;
  result_approved?: boolean;
  student?: Student_;
  subject_results?: Array<SubjectResult>;
  term?: Term_;
};
