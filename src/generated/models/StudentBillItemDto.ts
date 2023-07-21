/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscountItemDto } from './DiscountItemDto';
import type { PayableItemDto } from './PayableItemDto';
import type { StudentLiteDto } from './StudentLiteDto';
import type { TermLiteDto } from './TermLiteDto';

export type StudentBillItemDto = {
  comments?: string;
  created_by?: string;
  date_created?: string;
  date_modified?: string;
  deleted?: boolean;
  discount?: number;
  discount_data?: DiscountItemDto;
  item_type?: 'COMPULSORY' | 'OPTIONAL';
  modified_by?: string;
  payable_item?: PayableItemDto;
  quantity?: number;
  student?: StudentLiteDto;
  term?: TermLiteDto;
  total_amount?: number;
  unit_price?: number;
};
