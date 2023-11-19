/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Assessment } from './Assessment';
import type { ClassLevel } from './ClassLevel';
import type { ScoreEntryTimeFramePK } from './ScoreEntryTimeFramePK';
import type { Term } from './Term';

export type ScoreEntryTimeframe = {
    assessment?: Assessment;
    class_level?: ClassLevel;
    end_date: string;
    score_entry_time_frame_pk?: ScoreEntryTimeFramePK;
    start_date: string;
    term?: Term;
};

