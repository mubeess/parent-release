/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassInformation_ } from './ClassInformation_';
import type { StudentCumulativeResultLiteDto } from './StudentCumulativeResultLiteDto';
import type { SubjectDto } from './SubjectDto';
import type { Term_ } from './Term_';

export type ClassStudentsCumulativeResultLiteDto = {
    class_information?: ClassInformation_;
    student_results?: Array<StudentCumulativeResultLiteDto>;
    subjects_offered?: Array<SubjectDto>;
    term?: Term_;
};

