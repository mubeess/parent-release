/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EditStaffRequestData } from './EditStaffRequestData';
import type { StaffDto } from './StaffDto';

export type ProfileEditRequestDto = {
    approval_status?: 'APPROVED' | 'DECLINED' | 'PENDING';
    date_approved?: string;
    date_created?: string;
    date_declined?: string;
    decline_reason?: string;
    edit_staff_request_data?: EditStaffRequestData;
    request_id?: string;
    staff?: StaffDto;
};

