/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SchoolTermDefinitionDto } from './SchoolTermDefinitionDto';
import type { SessionDto } from './SessionDto';

export type TermDto = {
    current_term?: boolean;
    end_date?: string;
    initialized?: boolean;
    next_term_start_date?: string;
    school_term_definition?: SchoolTermDefinitionDto;
    session?: SessionDto;
    start_date?: string;
    term_id?: string;
};

