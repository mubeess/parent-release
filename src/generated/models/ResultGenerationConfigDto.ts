/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassLevelDto } from './ClassLevelDto';
import type { GradeGroupDto } from './GradeGroupDto';
import type { TemplateData } from './TemplateData';
import type { TermAssessmentConfiguration } from './TermAssessmentConfiguration';
import type { TermDto } from './TermDto';

export type ResultGenerationConfigDto = {
    active?: boolean;
    assessment_configuration?: Array<TermAssessmentConfiguration>;
    class_level?: ClassLevelDto;
    config_name?: string;
    date_created?: string;
    date_modified?: string;
    grade_group?: GradeGroupDto;
    id?: string;
    report_template_id?: string;
    report_template_name?: string;
    template_data?: TemplateData;
    term?: TermDto;
};

