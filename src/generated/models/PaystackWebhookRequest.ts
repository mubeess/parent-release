/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JsonData } from './JsonData';

export type PaystackWebhookRequest = {
  data?: JsonData;
  event?: string;
};
