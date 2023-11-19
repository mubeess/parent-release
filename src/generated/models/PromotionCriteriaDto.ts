/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GradeDto } from './GradeDto';

export type PromotionCriteriaDto = {
    id?: string;
    min_average_score?: number;
    min_pass_subjects?: number;
    min_subject_grade?: GradeDto;
    use_min_average_score?: boolean;
    use_min_pass_subjects?: boolean;
    use_min_subject_grade?: boolean;
};

