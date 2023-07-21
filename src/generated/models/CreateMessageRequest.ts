/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocalTimeReq } from './LocalTimeReq';
import type { MessageRecipient } from './MessageRecipient';

export type CreateMessageRequest = {
  body?: string;
  channels: Array<'EMAIL' | 'IN_APP' | 'WHATSAPP'>;
  date: string;
  frequency?: 'BI_WEEKLY' | 'DAILY' | 'MONTHLY' | 'WEEKLY';
  recipients: Array<MessageRecipient>;
  template_id: string;
  term_id?: string;
  time: LocalTimeReq;
  title: string;
  type: 'INSTANT' | 'ONE_OFF' | 'RECURRING';
};
