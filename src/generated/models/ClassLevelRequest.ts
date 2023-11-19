/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StaffLiteDto } from './StaffLiteDto';

export type ClassLevelRequest = {
    active_status: 'ACTIVE' | 'INACTIVE';
    class_level_head_teacher?: StaffLiteDto;
    class_level_signature?: string;
    class_order: number;
    early_years?: boolean;
    name: string;
    short_name: string;
};

