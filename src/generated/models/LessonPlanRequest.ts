/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Field } from './Field';
import type { Row } from './Row';

export type LessonPlanRequest = {
    additional_fields?: Array<Field>;
    approver_id?: string;
    arm_id?: string;
    class_level_id?: string;
    content_data?: Array<Row>;
    duration?: number;
    is_draft: boolean;
    lesson_date?: string;
    period?: string;
    sub_topic?: string;
    subject_id?: string;
    tags?: Array<string>;
    term_id?: string;
    topic?: string;
    week_id?: string;
};

