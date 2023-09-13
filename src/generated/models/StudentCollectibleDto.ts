/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PayableItemDto } from './PayableItemDto';
import type { StudentLiteDto } from './StudentLiteDto';
import type { TermDto } from './TermDto';

export type StudentCollectibleDto = {
  created_by?: string;
  date_issued?: string;
  id?: string;
  last_modified?: string;
  modified_by?: string;
  payable_item?: PayableItemDto;
  payment_type?: 'ALL' | 'FULL' | 'OVER_PAID' | 'PART' | 'UNPAID';
  quantity?: number;
  status?: 'COLLECTED' | 'PENDING_COLLECTION';
  student?: StudentLiteDto;
  term?: TermDto;
};
