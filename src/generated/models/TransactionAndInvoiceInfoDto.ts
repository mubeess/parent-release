/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvoiceItemDto } from './InvoiceItemDto';
import type { SchoolFeesTransactionDto } from './SchoolFeesTransactionDto';

export type TransactionAndInvoiceInfoDto = {
    invoice_items?: Array<InvoiceItemDto>;
    transaction?: SchoolFeesTransactionDto;
};

