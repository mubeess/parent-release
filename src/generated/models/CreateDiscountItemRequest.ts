/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateDiscountItemRequest = {
  amount?: number;
  comments?: string;
  discount_type: 'FIXED' | 'PERCENTAGE';
  invoice_item_total_amount?: number;
  payable_item_id: string;
  percentage?: number;
};
