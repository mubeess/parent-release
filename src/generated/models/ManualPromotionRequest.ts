/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassInfoParam } from './ClassInfoParam';

export type ManualPromotionRequest = {
    from_class_info_param: ClassInfoParam;
    student_ids?: Array<string>;
    to_class_info_param: ClassInfoParam;
};

