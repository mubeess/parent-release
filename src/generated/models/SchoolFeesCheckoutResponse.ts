/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BasicStudentInfo } from './BasicStudentInfo';
import type { CheckoutItem } from './CheckoutItem';
import type { PurchasableItem } from './PurchasableItem';
import type { TermDto } from './TermDto';

export type SchoolFeesCheckoutResponse = {
    compulsory_items?: Array<CheckoutItem>;
    optional_items?: Array<CheckoutItem>;
    part_payment_allowed?: boolean;
    purchasable_items?: Array<PurchasableItem>;
    student_info?: BasicStudentInfo;
    term?: TermDto;
    total_amount_expected?: number;
    total_amount_paid?: number;
    total_balance?: number;
    total_discount?: number;
};

