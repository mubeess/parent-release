/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevelDto } from './ClassLevelDto';
import type { TemplateField } from './TemplateField';

export type LessonPlanTemplateDto = {
  additional_fields?: Array<TemplateField>;
  class_level_dto?: ClassLevelDto;
  content_columns?: Array<TemplateField>;
  date_created?: string;
  id?: string;
  name?: string;
  required_fields?: Array<TemplateField>;
};
