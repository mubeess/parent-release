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
  status?: string;
  total?: number;
};
