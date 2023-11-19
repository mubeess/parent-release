/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupedStudentSkillAssessment } from './GroupedStudentSkillAssessment';
import type { StudentLiteDto } from './StudentLiteDto';
import type { TermLiteDto } from './TermLiteDto';

export type GroupedStudentSkillAssessmentResponse = {
    assessments?: Array<GroupedStudentSkillAssessment>;
    student?: StudentLiteDto;
    term?: TermLiteDto;
};

