/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DiscountItemDto = {
    amount?: number;
    comments?: string;
    discount_type?: 'FIXED' | 'PERCENTAGE';
    invoice_item_total_amount?: number;
    item_type?: 'COMPULSORY' | 'OPTIONAL';
    payable_item_id?: string;
    payable_item_name?: string;
    percentage?: number;
};

