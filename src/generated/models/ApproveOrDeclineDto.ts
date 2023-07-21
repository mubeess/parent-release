/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApproveOrDeclineDto = {
  decline_reason?: string;
  status?: 'APPROVED' | 'DECLINED' | 'PENDING';
};
