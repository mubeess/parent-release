/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SchoolTermDefinition } from './SchoolTermDefinition';
import type { Session } from './Session';

export type Term = {
  current_term: boolean;
  end_date?: string;
  initialized: boolean;
  next_term_start_date?: string;
  school_term_definition?: SchoolTermDefinition;
  session?: Session;
  start_date?: string;
  term_id: string;
  term_order: number;
};
