/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendResultLinkRequest = {
  class_level_ids?: Array<string>;
  selected_channels?: Array<'EMAIL' | 'IN_APP' | 'WHATSAPP'>;
  student_ids?: Array<string>;
  term_id: string;
};
