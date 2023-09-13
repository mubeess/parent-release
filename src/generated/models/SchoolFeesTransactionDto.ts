/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BasicStudentInfo } from './BasicStudentInfo';
import type { StudentBillData } from './StudentBillData';
import type { TermLiteDto } from './TermLiteDto';

export type SchoolFeesTransactionDto = {
  amount?: number;
  bank_transaction_ref?: string;
  created_by?: string;
  date_created?: string;
  date_modified?: string;
  id?: string;
  modified_by?: string;
  payment_date?: string;
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
  safsims_transaction_ref?: string;
  student?: BasicStudentInfo;
  student_bill_data?: StudentBillData;
  term?: TermLiteDto;
};
