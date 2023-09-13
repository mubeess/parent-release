/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageParam } from './PageParam';

export type FetchSchoolFeesTransactionRequest = {
  end_date: string;
  page_param: PageParam;
  payment_method?:
    | 'BANK_DEPOSIT'
    | 'BANK_TRANSFER'
    | 'CASH'
    | 'FLUTTERWAVE'
    | 'PAYSTACK'
    | 'PESAPAL'
    | 'POS'
    | 'STRIPE';
  payment_status?: 'COMPLETED' | 'FAILED' | 'INVALID' | 'PENDING' | 'REVERSED' | 'SUCCESSFUL';
  search_text?: string;
  start_date: string;
};
