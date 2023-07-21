/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SkillConfiguration } from './SkillConfiguration';
import type { SkillRatingConfiguration } from './SkillRatingConfiguration';

export type CognitiveSkillConfigurationResponse = {
  skill_configurations?: Array<SkillConfiguration>;
  skill_rating_configurations?: Array<SkillRatingConfiguration>;
};
