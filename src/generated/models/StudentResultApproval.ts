/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Breakdown } from './Breakdown';
import type { StudentLiteDto } from './StudentLiteDto';

export type StudentResultApproval = {
    approval_date?: string;
    approval_status?: 'APPROVED' | 'DECLINED' | 'PENDING';
    approver?: string;
    decline_reason?: string;
    score_breakdown?: Array<Breakdown>;
    student?: StudentLiteDto;
};

