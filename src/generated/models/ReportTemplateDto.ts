/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TemplateData } from './TemplateData';

export type ReportTemplateDto = {
  date_created?: string;
  id?: string;
  name: string;
  product_id?: string;
  template_data: TemplateData;
  template_type: 'RESULT';
};
