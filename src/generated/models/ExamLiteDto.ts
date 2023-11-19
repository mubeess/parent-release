/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevelLiteDto } from './ClassLevelLiteDto';
import type { Instruction } from './Instruction';
import type { PaperLiteDto } from './PaperLiteDto';
import type { StudentLiteDto } from './StudentLiteDto';

export type ExamLiteDto = {
    active?: boolean;
    class_level?: ClassLevelLiteDto;
    date_created?: string;
    end_date?: string;
    id?: string;
    instruction?: Instruction;
    name?: string;
    option_shuffle?: boolean;
    papers?: Array<PaperLiteDto>;
    question_shuffle?: boolean;
    start_date?: string;
    student?: StudentLiteDto;
};

