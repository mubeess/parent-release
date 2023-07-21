/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateStripeBankAccountRequest = {
  account_holder_name?: string;
  account_number: string;
  country_code?: string;
  currency?: 'EUR' | 'GBP' | 'NGN' | 'USD';
  object?: string;
  routing_number?: string;
};
