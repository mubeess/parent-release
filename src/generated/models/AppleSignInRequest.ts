/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AppleSigninRequest = {
    authorization_code: string;
    client?: 'SAFSIMS' | 'SAFSIMS_PARENT';
    organization: string;
    product?: string;
};

