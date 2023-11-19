/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssessmentDto } from './AssessmentDto';
import type { ClassLevelLiteDto } from './ClassLevelLiteDto';
import type { TermLiteDto } from './TermLiteDto';

export type ScoreEntryTimeframeDto = {
    assessment?: AssessmentDto;
    class_level?: ClassLevelLiteDto;
    end_date?: string;
    start_date?: string;
    term?: TermLiteDto;
};

