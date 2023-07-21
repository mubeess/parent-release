/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GradeRequest } from './GradeRequest';

export type GradeGroupRequest = {
  grades?: Array<GradeRequest>;
  group_name: string;
  id: string;
};
