/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BankAccountDto } from './BankAccountDto';
import type { BasicStudentInfo } from './BasicStudentInfo';
import type { StudentBillData } from './StudentBillData';
import type { TermDto } from './TermDto';

export type PaymentReceiptDto = {
    amount_paid?: number;
    bank_account?: BankAccountDto;
    cumulative_amount_paid?: number;
    expected_amount?: number;
    outstanding_balance?: number;
    payment_date?: string;
    payment_method?: 'BANK_DEPOSIT' | 'BANK_TRANSFER' | 'CASH' | 'FLUTTERWAVE' | 'PAYSTACK' | 'PESAPAL' | 'POS' | 'STRIPE';
    reference_number?: string;
    session_id?: string;
    student_bill_data?: StudentBillData;
    student_info?: BasicStudentInfo;
    term?: TermDto;
    transaction_id?: string;
};

