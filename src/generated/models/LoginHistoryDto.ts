/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CountryDto } from './CountryDto';

export type LoginHistoryDto = {
  browser?: string;
  city?: string;
  country?: CountryDto;
  device?: string;
  id?: string;
  ip_address?: string;
  login_time?: string;
  logout_time?: string;
  roles?: Array<string>;
  system_name?: string;
  user_custom_id?: string;
  user_full_name?: string;
  user_id?: string;
  user_types?: Array<'PARENT' | 'STAFF' | 'STUDENT'>;
};
