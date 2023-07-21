/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmountBreakdown } from './AmountBreakdown';

export type InitiateBulkPaymentRequest = {
  breakdown?: Array<AmountBreakdown>;
  email: string;
  payment_method:
    | 'BANK_DEPOSIT'
    | 'BANK_TRANSFER'
    | 'CASH'
    | 'FLUTTERWAVE'
    | 'PAYSTACK'
    | 'POS'
    | 'STRIPE';
  redirect_url: string;
  term_id: string;
  total: number;
};
