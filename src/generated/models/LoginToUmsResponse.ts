/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClassInformationDto } from './ClassInformationDto';
import type { ParentDto } from './ParentDto';
import type { StaffDto } from './StaffDto';
import type { StudentDto } from './StudentDto';
import type { SubjectTeacherDto } from './SubjectTeacherDto';
import type { UmsLoginResponse } from './UmsLoginResponse';

export type LoginToUmsResponse = {
    form_teachers?: Array<ClassInformationDto>;
    login_count?: number;
    parent?: ParentDto;
    staff?: StaffDto;
    student?: StudentDto;
    subject_teachers?: Array<SubjectTeacherDto>;
    ums_login_response?: UmsLoginResponse;
    user_types?: Array<'PARENT' | 'STAFF' | 'STUDENT'>;
};

