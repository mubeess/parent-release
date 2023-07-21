/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginHistoryDto } from './LoginHistoryDto';
import type { Pageable } from './Pageable';
import type { Sort } from './Sort';

export type Page_LoginHistoryDto_ = {
  content?: Array<LoginHistoryDto>;
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
