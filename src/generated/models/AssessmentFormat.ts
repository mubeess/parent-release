/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevel } from './ClassLevel';

export type AssessmentFormat = {
    assessment_format_name: string;
    class_levels?: Array<ClassLevel>;
    enable_sub_breakdown?: boolean;
    id: string;
};

