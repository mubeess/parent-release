/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GradeDto } from './GradeDto';
import type { PromotionCriteriaDto } from './PromotionCriteriaDto';
import type { SubjectDto } from './SubjectDto';

export type PromotionCriteriaResponse = {
  class_level_id?: string;
  grades?: Array<GradeDto>;
  promotion_criteria?: PromotionCriteriaDto;
  promotion_on_trial_criteria?: PromotionCriteriaDto;
  promotion_on_trial_subject_ids?: Array<string>;
  promotion_subject_ids?: Array<string>;
  subjects_offered?: Array<SubjectDto>;
  term_id?: string;
};
