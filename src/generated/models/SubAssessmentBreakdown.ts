/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Arm } from './Arm';
import type { AssessmentBreakdown } from './AssessmentBreakdown';
import type { ClassLevel } from './ClassLevel';
import type { Subject } from './Subject';
import type { Term } from './Term';

export type SubAssessmentBreakdown = {
    arm?: Arm;
    assessment_breakdown?: AssessmentBreakdown;
    class_level?: ClassLevel;
    id: string;
    max_score: number;
    name: string;
    order: number;
    subject?: Subject;
    term?: Term;
};

