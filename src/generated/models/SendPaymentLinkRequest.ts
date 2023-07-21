/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendPaymentLinkRequest = {
  class_level_ids?: Array<string>;
  selected_methods?: Array<'EMAIL' | 'IN_APP' | 'WHATSAPP'>;
  student_ids?: Array<string>;
  term_id: string;
};
