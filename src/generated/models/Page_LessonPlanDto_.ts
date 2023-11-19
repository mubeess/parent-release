/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LessonPlanDto } from './LessonPlanDto';
import type { Pageable } from './Pageable';
import type { Sort } from './Sort';

export type Page_LessonPlanDto_ = {
    content?: Array<LessonPlanDto>;
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

