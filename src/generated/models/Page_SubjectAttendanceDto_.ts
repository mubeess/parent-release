/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Pageable } from './Pageable';
import type { Sort } from './Sort';
import type { SubjectAttendanceDto } from './SubjectAttendanceDto';

export type Page_SubjectAttendanceDto_ = {
  content?: Array<SubjectAttendanceDto>;
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
