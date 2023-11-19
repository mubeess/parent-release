/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Sort } from './Sort';

export type Pageable = {
    offset?: number;
    page_number?: number;
    page_size?: number;
    paged?: boolean;
    sort?: Sort;
    unpaged?: boolean;
};

