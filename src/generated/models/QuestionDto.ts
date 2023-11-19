/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AnswerOptionDto } from './AnswerOptionDto';
import type { ClassLevelLiteDto } from './ClassLevelLiteDto';
import type { StaffLiteDto } from './StaffLiteDto';
import type { SubjectDto } from './SubjectDto';

export type QuestionDto = {
    class_level?: ClassLevelLiteDto;
    created_by?: StaffLiteDto;
    date_created?: string;
    date_modified?: string;
    id?: string;
    image?: string;
    options?: Array<AnswerOptionDto>;
    question_type?: 'MULTIPLE_ANSWER' | 'MULTIPLE_CHOICE';
    subject?: SubjectDto;
    text?: string;
    topic?: string;
};

