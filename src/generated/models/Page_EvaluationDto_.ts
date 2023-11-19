/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EvaluationDto } from './EvaluationDto';
import type { Pageable } from './Pageable';
import type { Sort } from './Sort';

export type Page_EvaluationDto_ = {
    content?: Array<EvaluationDto>;
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

