/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttendanceSummaryResponse } from './AttendanceSummaryResponse';
import type { BasicSchoolInformationDto } from './BasicSchoolInformationDto';
import type { ClassInformationDto } from './ClassInformationDto';
import type { CumulativeResultAndAssessmentDef } from './CumulativeResultAndAssessmentDef';
import type { GradeDto } from './GradeDto';
import type { SkillRatingDefinitionDto } from './SkillRatingDefinitionDto';
import type { StudentDto } from './StudentDto';
import type { StudentSkillAssessmentDto } from './StudentSkillAssessmentDto';
import type { StudentTraitAssessmentDto } from './StudentTraitAssessmentDto';
import type { TermCommentDto } from './TermCommentDto';
import type { TermDto } from './TermDto';

export type StudentCumulativeReportResponse = {
  attendance?: AttendanceSummaryResponse;
  class_information?: ClassInformationDto;
  class_size?: number;
  grades?: Array<GradeDto>;
  result?: CumulativeResultAndAssessmentDef;
  school_information?: BasicSchoolInformationDto;
  skill_assessments?: Array<StudentSkillAssessmentDto>;
  skill_rating_definitions?: Array<SkillRatingDefinitionDto>;
  student?: StudentDto;
  student_trait_assessments?: Array<StudentTraitAssessmentDto>;
  term?: TermDto;
  term_comments?: Array<TermCommentDto>;
};
