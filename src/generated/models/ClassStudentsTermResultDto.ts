/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassInformation_ } from './ClassInformation_';
import type { ReportTemplateDto } from './ReportTemplateDto';
import type { StudentTermResultDto } from './StudentTermResultDto';
import type { SubjectDto } from './SubjectDto';
import type { Term_ } from './Term_';

export type ClassStudentsTermResultDto = {
  class_information?: ClassInformation_;
  report_templates?: Array<ReportTemplateDto>;
  student_results?: Array<StudentTermResultDto>;
  subjects_offered?: Array<SubjectDto>;
  term?: Term_;
};
