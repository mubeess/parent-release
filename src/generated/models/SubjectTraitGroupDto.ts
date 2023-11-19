/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubjectTraitDto } from './SubjectTraitDto';
import type { TermLiteDto } from './TermLiteDto';

export type SubjectTraitGroupDto = {
    date_created?: string;
    group_name?: string;
    id?: string;
    subject_traits?: Array<SubjectTraitDto>;
    term?: TermLiteDto;
};

