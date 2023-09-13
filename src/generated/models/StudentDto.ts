/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CityDto } from './CityDto';
import type { CountryDto } from './CountryDto';
import type { LgaDto } from './LgaDto';
import type { ParentLiteDto } from './ParentLiteDto';
import type { StateDto } from './StateDto';

export type StudentDto = {
  active_status?: 'ACTIVE' | 'INACTIVE';
  arm_id?: string;
  arm_name?: string;
  city?: CityDto;
  class_level_id?: string;
  class_level_name?: string;
  country?: CountryDto;
  date_created?: string;
  deleted?: boolean;
  dob?: string;
  early_years?: boolean;
  email?: string;
  first_name?: string;
  gender?: 'FEMALE' | 'MALE';
  height?: string;
  home_address?: string;
  id?: string;
  last_modified?: string;
  lga?: LgaDto;
  other_names?: string;
  parents?: Array<ParentLiteDto>;
  phone?: string;
  profile_pic?: string;
  state?: StateDto;
  student_id?: string;
  surname?: string;
  weight?: string;
};
