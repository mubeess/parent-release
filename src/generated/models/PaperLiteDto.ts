/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Instruction } from './Instruction';
import type { LocalTimeRes } from './LocalTimeRes';
import type { SubjectDto } from './SubjectDto';

export type PaperLiteDto = {
    date_created?: string;
    duration?: number;
    end_date?: string;
    id?: string;
    instruction?: Instruction;
    name?: string;
    number_of_questions?: number;
    start_date?: string;
    start_time?: LocalTimeRes;
    subject?: SubjectDto;
};

