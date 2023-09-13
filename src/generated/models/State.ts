/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Country } from './Country';
import type { StatePK } from './StatePK';

export type State = {
  country?: Country;
  state_name: string;
  state_pk?: StatePK;
};
