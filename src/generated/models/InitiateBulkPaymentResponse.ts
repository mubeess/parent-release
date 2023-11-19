/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FeesPayment } from './FeesPayment';

export type InitiateBulkPaymentResponse = {
    charges?: number;
    fees?: number;
    fees_payments?: Array<FeesPayment>;
    link?: string;
    message?: string;
    safsims_transaction_ref?: string;
    split_code?: string;
    split_id?: number;
    status?: string;
    total?: number;
};

