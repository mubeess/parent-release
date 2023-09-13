/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubscriptionPlanDto } from './SubscriptionPlanDto';
import type { TermDto } from './TermDto';

export type SubscriptionDto = {
  id?: string;
  subscription_end_date?: string;
  subscription_plan?: SubscriptionPlanDto;
  subscription_start_date?: string;
  term?: TermDto;
  trial?: boolean;
  trial_expiry_date?: string;
};
