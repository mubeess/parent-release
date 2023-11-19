/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevelLiteDto } from './ClassLevelLiteDto';
import type { InvoiceItemDto } from './InvoiceItemDto';
import type { TermLiteDto } from './TermLiteDto';

export type InvoiceTemplateDto = {
    apply?: boolean;
    class_level?: ClassLevelLiteDto;
    has_payment?: boolean;
    invoice_items?: Array<InvoiceItemDto>;
    notes?: string;
    term?: TermLiteDto;
};

