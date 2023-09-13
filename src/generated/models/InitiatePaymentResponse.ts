/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JsonData } from './JsonData';

export type InitiatePaymentResponse = {
  client_secret?: string;
  data?: JsonData;
  message?: string;
  redirect_url?: string;
  split_code?: string;
  split_id?: number;
  status?: string;
};
