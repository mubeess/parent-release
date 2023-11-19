/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SkillDto } from './SkillDto';
import type { SkillRatingDefinitionDto } from './SkillRatingDefinitionDto';
import type { StudentLiteDto } from './StudentLiteDto';
import type { TermLiteDto } from './TermLiteDto';

export type StudentSkillAssessmentDto = {
    assessment_date?: string;
    assessor_id?: string;
    skill?: SkillDto;
    skill_rating_definition?: SkillRatingDefinitionDto;
    student?: StudentLiteDto;
    term?: TermLiteDto;
};

