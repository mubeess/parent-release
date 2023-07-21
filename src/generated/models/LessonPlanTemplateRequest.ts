/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Field } from './Field';

export type LessonPlanTemplateRequest = {
  active?: boolean;
  additional_fields?: Array<Field>;
  class_level_ids?: Array<string>;
  content_columns?: Array<Field>;
  name?: string;
  required_fields?: Array<Field>;
};
