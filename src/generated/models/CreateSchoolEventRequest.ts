/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateSchoolEventRequest = {
    all_day?: boolean;
    class_level_ids?: Array<string>;
    description?: string;
    end_date: string;
    event_type: 'ACTIVITY' | 'HOLIDAY';
    name: string;
    start_date: string;
    term_id: string;
};

