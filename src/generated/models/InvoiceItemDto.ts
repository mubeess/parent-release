/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PayableItemDto } from './PayableItemDto';

export type InvoiceItemDto = {
  id?: string;
  invoice_template_id?: string;
  item_type?: 'COMPULSORY' | 'OPTIONAL';
  payable_item?: PayableItemDto;
  quantity?: number;
  total_amount?: number;
  unit_price?: number;
};
