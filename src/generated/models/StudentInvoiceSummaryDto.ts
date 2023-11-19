/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BasicStudentInfo } from './BasicStudentInfo';
import type { TermLiteDto } from './TermLiteDto';

export type StudentInvoiceSummaryDto = {
    amount_expected?: number;
    amount_paid?: number;
    balance?: number;
    discount?: number;
    payment_type?: 'ALL' | 'FULL' | 'OVER_PAID' | 'PART' | 'UNPAID';
    student_info?: BasicStudentInfo;
    term?: TermLiteDto;
    total_bill?: number;
};

