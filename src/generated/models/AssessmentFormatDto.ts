/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevelLiteDto } from './ClassLevelLiteDto';

export type AssessmentFormatDto = {
    assessment_format_name: string;
    class_levels?: Array<ClassLevelLiteDto>;
    enable_sub_breakdown?: boolean;
    id?: string;
};

