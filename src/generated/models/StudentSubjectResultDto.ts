/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassInformation_ } from './ClassInformation_';
import type { Student_ } from './Student_';
import type { SubjectResult } from './SubjectResult';
import type { Term_ } from './Term_';

export type StudentSubjectResultDto = {
    class_information?: ClassInformation_;
    student?: Student_;
    subject_result?: SubjectResult;
    term?: Term_;
};

