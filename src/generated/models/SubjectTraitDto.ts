/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevelLiteDto } from './ClassLevelLiteDto';
import type { SubjectDto } from './SubjectDto';

export type SubjectTraitDto = {
    class_levels?: Array<ClassLevelLiteDto>;
    date_created?: string;
    id?: string;
    subject?: SubjectDto;
    subject_trait_group_id?: string;
    title?: string;
};

