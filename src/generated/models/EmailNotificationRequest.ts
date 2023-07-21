/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EmailNotificationRequest = {
  html?: boolean;
  message: string;
  recipients: Array<string>;
  subject: string;
};
