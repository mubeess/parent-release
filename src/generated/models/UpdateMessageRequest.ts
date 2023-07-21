/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocalTimeReq } from './LocalTimeReq';
import type { MessageAttachmentDto } from './MessageAttachmentDto';
import type { MessageRecipient } from './MessageRecipient';

export type UpdateMessageRequest = {
  attachments_to_remove?: Array<MessageAttachmentDto>;
  body?: string;
  channels?: Array<'EMAIL' | 'IN_APP' | 'WHATSAPP'>;
  frequency?: 'BI_WEEKLY' | 'DAILY' | 'MONTHLY' | 'WEEKLY';
  id: string;
  next_send_date?: string;
  recipients?: Array<MessageRecipient>;
  status?: 'ACTIVE' | 'INACTIVE' | 'SENT';
  template_id?: string;
  term_id?: string;
  time?: LocalTimeReq;
  title?: string;
};
