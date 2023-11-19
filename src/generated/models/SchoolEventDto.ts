/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevelLiteDto } from './ClassLevelLiteDto';

export type SchoolEventDto = {
    all_day?: boolean;
    class_levels?: Array<ClassLevelLiteDto>;
    date_created?: string;
    description?: string;
    end_date?: string;
    event_type?: 'ACTIVITY' | 'HOLIDAY';
    id?: string;
    modified_date?: string;
    name?: string;
    start_date?: string;
};

