/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessageRecipient } from './MessageRecipient';

export type MessageTemplateResponse = {
    allow_additional_recipients?: 'EDITABLE' | 'NON_EDITABLE';
    allow_attachments?: 'ALLOWED' | 'NOT_ALLOWED';
    filters?: Array<string>;
    id?: string;
    recipients?: Array<MessageRecipient>;
    value?: string;
    value_is_editable?: 'EDITABLE' | 'NON_EDITABLE';
};

