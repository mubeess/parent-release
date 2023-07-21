/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LevelPaymentDistribution } from './LevelPaymentDistribution';
import type { MonthlyPaymentDistribution } from './MonthlyPaymentDistribution';

export type RevenueSummaryDto = {
  generated_revenue_percentage?: number;
  level_payment_distribution?: Array<LevelPaymentDistribution>;
  monthly_payment_distribution?: Array<MonthlyPaymentDistribution>;
  outstanding_percentage?: number;
  total_expected_revenue?: number;
  total_generated_revenue?: number;
  total_outstanding?: number;
};
