/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SchoolInfo } from './SchoolInfo';

export type ContactResponse = {
  basic_school_info?: SchoolInfo;
  email_address?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  tenant?: string;
};
