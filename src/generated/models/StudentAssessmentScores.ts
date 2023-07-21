/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StudentLiteDto } from './StudentLiteDto';
import type { Subject } from './Subject';

export type StudentAssessmentScores = {
  student?: StudentLiteDto;
  subjects?: Array<Subject>;
};
