/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ParentStudentRelationshipRequest } from './ParentStudentRelationshipRequest';

export type ParentSignupDto = {
    children_count?: number;
    date_created?: string;
    email?: string;
    first_name?: string;
    gender?: 'FEMALE' | 'MALE';
    last_name?: string;
    parent_id?: string;
    parent_student_relationship_requests?: Array<ParentStudentRelationshipRequest>;
    phone?: string;
    status?: 'APPROVED' | 'DECLINED' | 'PENDING';
};

