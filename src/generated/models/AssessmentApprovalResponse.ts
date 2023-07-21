/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssessmentDto } from './AssessmentDto';
import type { StudentResultApproval } from './StudentResultApproval';

export type AssessmentApprovalResponse = {
  approvals?: Array<StudentResultApproval>;
  assessment?: AssessmentDto;
};
