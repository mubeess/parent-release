/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Country } from './Country';
import type { Lga } from './Lga';
import type { State } from './State';

export type EditStaffRequestData = {
  country?: Country;
  dob?: string;
  email?: string;
  first_name?: string;
  home_address?: string;
  lga?: Lga;
  marital_status?: 'MARRIED' | 'SINGLE';
  nok_address?: string;
  nok_email?: string;
  nok_first_name?: string;
  nok_other_names?: string;
  nok_phone?: string;
  nok_relationship?: string;
  nok_surname?: string;
  other_names?: string;
  phone?: string;
  staff_id?: string;
  state?: State;
  surname?: string;
};
