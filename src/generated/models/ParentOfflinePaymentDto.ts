/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BankDto } from './BankDto';
import type { ParentLiteDto } from './ParentLiteDto';
import type { StudentBreakdownDto } from './StudentBreakdownDto';
import type { TermDto } from './TermDto';

export type ParentOfflinePaymentDto = {
    account_name?: string;
    account_number?: string;
    amount_paid?: number;
    bank?: BankDto;
    date_created?: string;
    id?: string;
    parent_lite_dto?: ParentLiteDto;
    payment_date?: string;
    status?: 'APPROVED' | 'DECLINED' | 'PENDING';
    student_breakdown?: Array<StudentBreakdownDto>;
    teller_number?: string;
    teller_url?: string;
    term?: TermDto;
};

