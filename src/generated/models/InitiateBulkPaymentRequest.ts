/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmountBreakdown } from './AmountBreakdown';

export type InitiateBulkPaymentRequest = {
  breakdown?: Array<AmountBreakdown>;
  email: string;
  latest_version?: boolean;
  payment_method:
    | 'BANK_DEPOSIT'
    | 'BANK_TRANSFER'
    | 'CASH'
    | 'FLUTTERWAVE'
    | 'PAYSTACK'
    | 'PESAPAL'
    | 'POS'
    | 'STRIPE';
  redirect_url: string;
  term_id: string;
  total: number;
  web?: boolean;
};
