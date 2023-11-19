/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyEmailLinkRequest = {
    code: string;
    email: string;
    user_id: string;
    user_type: 'PARENT' | 'STAFF' | 'STUDENT';
};

