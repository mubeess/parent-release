/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocalTimeRes } from './LocalTimeRes';
import type { MessageAttachmentDto } from './MessageAttachmentDto';
import type { MessageChannelDto } from './MessageChannelDto';
import type { MessageRecipient } from './MessageRecipient';

export type MessageDto = {
    attachments?: Array<MessageAttachmentDto>;
    batch_id?: string;
    body?: string;
    channels?: Array<MessageChannelDto>;
    date_created?: string;
    delivery_day?: 'FRIDAY' | 'MONDAY' | 'SATURDAY' | 'SUNDAY' | 'THURSDAY' | 'TUESDAY' | 'WEDNESDAY';
    frequency?: 'BI_WEEKLY' | 'DAILY' | 'MONTHLY' | 'WEEKLY';
    id?: string;
    last_sent_date?: string;
    next_send_date?: string;
    recipients?: Array<MessageRecipient>;
    start_date?: string;
    status?: 'ACTIVE' | 'INACTIVE' | 'SENT';
    template_id?: string;
    term_id?: string;
    time?: LocalTimeRes;
    title?: string;
    type?: 'INSTANT' | 'ONE_OFF' | 'RECURRING';
};

