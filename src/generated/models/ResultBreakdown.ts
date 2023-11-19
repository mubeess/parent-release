/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AnswerOptionDto } from './AnswerOptionDto';

export type ResultBreakdown = {
    correct_option?: AnswerOptionDto;
    question_id?: string;
    question_image?: string;
    question_text?: string;
    question_type?: 'MULTIPLE_ANSWER' | 'MULTIPLE_CHOICE';
    selected_option?: AnswerOptionDto;
};

