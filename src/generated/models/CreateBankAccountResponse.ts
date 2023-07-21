/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevelLiteDto } from './ClassLevelLiteDto';

export type CreateBankAccountResponse = {
  account_name?: string;
  account_number?: string;
  bank_account_id?: string;
  bank_code?: string;
  bank_name?: string;
  class_levels?: Array<ClassLevelLiteDto>;
  email?: string;
  phone_number?: string;
};
