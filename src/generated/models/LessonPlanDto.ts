/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArmDto } from './ArmDto';
import type { ClassLevelLiteDto } from './ClassLevelLiteDto';
import type { FieldData } from './FieldData';
import type { LessonPlanCommentDto } from './LessonPlanCommentDto';
import type { RowData } from './RowData';
import type { StaffDto } from './StaffDto';
import type { SubjectDto } from './SubjectDto';
import type { WeekDto } from './WeekDto';

export type LessonPlanDto = {
    additional_fields?: Array<FieldData>;
    approver?: StaffDto;
    arm?: ArmDto;
    class_level?: ClassLevelLiteDto;
    comments?: Array<LessonPlanCommentDto>;
    content_rows?: Array<RowData>;
    content_urls?: Array<string>;
    creator?: StaffDto;
    date_created?: string;
    date_submitted?: string;
    duration?: number;
    id?: string;
    last_reviewed?: string;
    lesson_date?: string;
    period?: string;
    status?: 'APPROVED' | 'CHANGE_REQUESTED' | 'DRAFT' | 'IN_REVIEW';
    sub_topic?: string;
    subject?: SubjectDto;
    tags?: Array<string>;
    topic?: string;
    week?: WeekDto;
};

