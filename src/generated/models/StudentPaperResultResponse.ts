/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaperLiteDto } from './PaperLiteDto';
import type { Result } from './Result';
import type { ResultBreakdown } from './ResultBreakdown';
import type { StudentLiteDto } from './StudentLiteDto';

export type StudentPaperResultResponse = {
    paper?: PaperLiteDto;
    result?: Result;
    result_breakdown?: Array<ResultBreakdown>;
    student?: StudentLiteDto;
};

