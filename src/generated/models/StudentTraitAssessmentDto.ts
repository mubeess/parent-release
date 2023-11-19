/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StudentLiteDto } from './StudentLiteDto';
import type { TermDto } from './TermDto';
import type { TraitDefinitionDto } from './TraitDefinitionDto';
import type { TraitRatingDefinitionDto } from './TraitRatingDefinitionDto';

export type StudentTraitAssessmentDto = {
    comments?: string;
    group_comments?: string;
    student?: StudentLiteDto;
    term?: TermDto;
    trait_definition?: TraitDefinitionDto;
    trait_rating_definition?: TraitRatingDefinitionDto;
};

