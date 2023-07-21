/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Pageable } from './Pageable';
import type { SchoolFeesTransactionDto } from './SchoolFeesTransactionDto';
import type { Sort } from './Sort';

export type Page_SchoolFeesTransactionDto_ = {
  content?: Array<SchoolFeesTransactionDto>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  number_of_elements?: number;
  pageable?: Pageable;
  size?: number;
  sort?: Sort;
  total_elements?: number;
  total_pages?: number;
};
