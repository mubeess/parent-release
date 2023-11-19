/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TermLiteDto } from './TermLiteDto';

export type WeekDto = {
    created_by?: string;
    date_created?: string;
    date_modified?: string;
    end_date?: string;
    id?: string;
    modified_by?: string;
    name?: string;
    start_date?: string;
    submitted_lesson_plans?: number;
    term?: TermLiteDto;
    week_order?: number;
};

