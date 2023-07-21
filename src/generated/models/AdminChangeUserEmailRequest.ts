/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AdminChangeUserEmailRequest = {
  email: string;
  user_id: string;
  user_type: 'PARENT' | 'STAFF' | 'STUDENT';
};
