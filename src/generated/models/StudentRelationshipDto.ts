/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StudentDto } from './StudentDto';

export type StudentRelationshipDto = {
    relationship_type?: 'FATHER' | 'GUARDIAN' | 'MOTHER';
    student?: StudentDto;
};

