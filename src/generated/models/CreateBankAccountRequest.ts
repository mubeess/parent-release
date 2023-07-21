/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateBankAccountRequest = {
  account_name: string;
  account_number: string;
  bank_code: string;
  class_level_ids: Array<string>;
  default_account?: boolean;
  email: string;
  phone_number: string;
};
