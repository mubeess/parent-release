/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Pageable } from './Pageable';
import type { ParentOfflinePaymentDto } from './ParentOfflinePaymentDto';
import type { Sort } from './Sort';

export type Page_ParentOfflinePaymentDto_ = {
  content?: Array<ParentOfflinePaymentDto>;
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
