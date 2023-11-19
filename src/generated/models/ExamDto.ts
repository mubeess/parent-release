/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevelDto } from './ClassLevelDto';
import type { Instruction } from './Instruction';
import type { PaperDto } from './PaperDto';
import type { StudentLiteDto } from './StudentLiteDto';
import type { StudentPaperDto } from './StudentPaperDto';

export type ExamDto = {
    active?: boolean;
    class_level?: ClassLevelDto;
    date_created?: string;
    end_date?: string;
    id?: string;
    instruction?: Instruction;
    name?: string;
    option_shuffle?: boolean;
    papers?: Array<PaperDto>;
    question_shuffle?: boolean;
    start_date?: string;
    student?: StudentLiteDto;
    submitted_papers?: Array<StudentPaperDto>;
};

