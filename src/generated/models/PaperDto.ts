/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Instruction } from './Instruction';
import type { LocalTimeRes } from './LocalTimeRes';
import type { QuestionDto } from './QuestionDto';
import type { SubjectDto } from './SubjectDto';

export type PaperDto = {
    date_created?: string;
    duration?: number;
    end_date?: string;
    id?: string;
    instruction?: Instruction;
    name?: string;
    questions?: Array<QuestionDto>;
    start_date?: string;
    start_time?: LocalTimeRes;
    subject?: SubjectDto;
};

