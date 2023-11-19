/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassInformationDto } from './ClassInformationDto';
import type { SubjectDto } from './SubjectDto';

export type ClassAndSubjects = {
    class_arm?: ClassInformationDto;
    subjects?: Array<SubjectDto>;
};

