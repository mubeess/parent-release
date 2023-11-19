/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PromotionCriteriaDto } from './PromotionCriteriaDto';

export type PromotionCriteriaRequest = {
    class_level_id: string;
    promotion_criteria?: PromotionCriteriaDto;
    promotion_on_trial_criteria?: PromotionCriteriaDto;
    promotion_on_trial_subject_ids: Array<string>;
    promotion_subject_ids: Array<string>;
    term_id: string;
};

