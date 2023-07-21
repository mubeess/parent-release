/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendOutstandingInvoiceNotificationRequest = {
  selected_methods?: Array<'EMAIL' | 'IN_APP' | 'WHATSAPP'>;
  session_id: string;
  student_ids: Array<string>;
  term_id: string;
};
