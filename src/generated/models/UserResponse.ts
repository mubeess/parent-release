/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseContact } from './ResponseContact';
import type { UmsRole } from './UmsRole';

export type UserResponse = {
  contacts?: Array<ResponseContact>;
  first_name?: string;
  id?: string;
  last_name?: string;
  other_name?: string;
  roles?: Array<UmsRole>;
  secret?: string;
  status?: boolean;
  username?: string;
};
