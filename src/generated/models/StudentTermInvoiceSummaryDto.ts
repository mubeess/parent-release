/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StudentInvoiceSummaryDto } from './StudentInvoiceSummaryDto';
import type { TermDto } from './TermDto';

export type StudentTermInvoiceSummaryDto = {
  invoice_summary?: StudentInvoiceSummaryDto;
  term?: TermDto;
};
