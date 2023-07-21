/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateDiscountItemRequest } from './CreateDiscountItemRequest';

export type CreateSchoolFeesDiscountRequest = {
  create_discount_item_requests?: Array<CreateDiscountItemRequest>;
  student_id?: string;
  term_id?: string;
};
