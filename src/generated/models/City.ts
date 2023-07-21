/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Country } from './Country';
import type { State } from './State';

export type City = {
  country?: Country;
  id: number;
  name: string;
  state?: State;
};
