/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Country } from './Country';
import type { LgaPK } from './LgaPK';
import type { State } from './State';

export type Lga = {
  country?: Country;
  lga_name: string;
  lga_pk?: LgaPK;
  state?: State;
};
