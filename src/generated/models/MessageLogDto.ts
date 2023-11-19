/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserDto } from './UserDto';

export type MessageLogDto = {
    attachments?: Array<string>;
    batch_id?: string;
    body?: string;
    date_sent?: string;
    from?: string;
    id?: string;
    last_modified?: string;
    message_channel_type?: 'EMAIL' | 'IN_APP' | 'WHATSAPP';
    message_id?: string;
    message_service_id?: string;
    recipient?: UserDto;
    school_id?: string;
    status?: 'DELIVERED' | 'FAILED' | 'PENDING' | 'READ' | 'SENT' | 'UNKNOWN';
    to?: string;
};

