/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Approval } from './Approval';

export type UpdateAssessmentApprovalRequest = {
    approvals?: Array<Approval>;
    assessment_id: string;
    subject_id: string;
    term_id: string;
};

