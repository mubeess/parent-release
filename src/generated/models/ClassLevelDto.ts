/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArmDto } from './ArmDto';
import type { AssessmentDto } from './AssessmentDto';
import type { ScoreEntryTimeframeDto } from './ScoreEntryTimeframeDto';
import type { StaffLiteDto } from './StaffLiteDto';

export type ClassLevelDto = {
  active_status?: 'ACTIVE' | 'INACTIVE';
  arms?: Array<ArmDto>;
  assessments?: Array<AssessmentDto>;
  class_level_head_teacher?: StaffLiteDto;
  class_level_signature?: string;
  class_order?: number;
  date_created?: string;
  deleted?: boolean;
  early_years?: boolean;
  id?: string;
  last_modified?: string;
  name?: string;
  score_entry_timeframes?: Array<ScoreEntryTimeframeDto>;
  short_name?: string;
  student_count?: number;
};
