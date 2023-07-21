/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Item } from './Item';

export type InvoiceTemplateRequest = {
  apply?: boolean;
  class_level_id: string;
  items?: Array<Item>;
  notes?: string;
  term_id: string;
};
