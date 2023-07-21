/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifySchoolFeesPaymentResponse = {
  amount_paid?: number;
  full_name?: string;
  payment_status?: 'FAILED' | 'PENDING' | 'SUCCESSFUL';
  student_id?: string;
};
