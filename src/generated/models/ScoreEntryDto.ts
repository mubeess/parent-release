/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassAndSubjects } from './ClassAndSubjects';
import type { StudentAssessmentScores } from './StudentAssessmentScores';

export type ScoreEntryDto = {
    arm_id: string;
    class_and_subjects?: Array<ClassAndSubjects>;
    class_level_id: string;
    students_assessments_scores?: Array<StudentAssessmentScores>;
    term_id: string;
};

