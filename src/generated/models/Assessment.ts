/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Breakdown } from './Breakdown';

export type Assessment = {
  assessment_order?: number;
  breakdowns?: Array<Breakdown>;
  id?: string;
  name?: string;
  score?: number;
};
