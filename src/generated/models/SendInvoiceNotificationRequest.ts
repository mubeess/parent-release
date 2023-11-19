/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendInvoiceNotificationRequest = {
    class_level_ids: Array<string>;
    selected_methods?: Array<'EMAIL' | 'IN_APP' | 'WHATSAPP'>;
    term_id: string;
};

