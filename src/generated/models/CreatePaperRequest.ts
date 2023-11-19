/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Instruction } from './Instruction';
import type { LocalTimeReq } from './LocalTimeReq';

export type CreatePaperRequest = {
    duration: number;
    end_date: string;
    instruction?: Instruction;
    name: string;
    question_ids?: Array<string>;
    start_date: string;
    start_time: LocalTimeReq;
    subject_id: string;
};

