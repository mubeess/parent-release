/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SkillAssessment } from './SkillAssessment';

export type UpdateStudentSkillAssessmentRequest = {
    skill_assessments?: Array<SkillAssessment>;
    student_id: string;
    term_id: string;
};

