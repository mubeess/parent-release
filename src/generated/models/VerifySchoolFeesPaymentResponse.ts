/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifySchoolFeesPaymentResponse = {
    amount_paid?: number;
    full_name?: string;
    payment_status?: 'COMPLETED' | 'FAILED' | 'INVALID' | 'PENDING' | 'REVERSED' | 'SUCCESSFUL';
    student_id?: string;
};

