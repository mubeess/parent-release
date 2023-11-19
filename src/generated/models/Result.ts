/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Result = {
    score?: number;
    status?: 'ONGOING' | 'STARTED' | 'SUBMITTED';
    time_started?: string;
    time_submitted?: string;
    time_taken_mins?: number;
};

