/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Approval = {
  approval_status: 'APPROVED' | 'DECLINED' | 'PENDING';
  decline_reason?: string;
  student_id: string;
};
