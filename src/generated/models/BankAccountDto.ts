/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BankDto } from './BankDto';
import type { ClassLevelLiteDto } from './ClassLevelLiteDto';
import type { SubaccountLiteDto } from './SubaccountLiteDto';

export type BankAccountDto = {
    account_name?: string;
    account_number?: string;
    bank?: BankDto;
    class_level?: ClassLevelLiteDto;
    default_account?: boolean;
    email?: string;
    id?: string;
    phone_number?: string;
    subaccounts?: Array<SubaccountLiteDto>;
};

