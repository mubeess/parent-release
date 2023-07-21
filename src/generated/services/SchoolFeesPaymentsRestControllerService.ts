/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePaymentIntentResponse } from '../models/CreatePaymentIntentResponse';
import type { FetchSchoolFeesTransactionRequest } from '../models/FetchSchoolFeesTransactionRequest';
import type { InitiateBulkPaymentRequest } from '../models/InitiateBulkPaymentRequest';
import type { InitiateBulkPaymentResponse } from '../models/InitiateBulkPaymentResponse';
import type { InitiatePaymentRequest } from '../models/InitiatePaymentRequest';
import type { InitiatePaymentResponse } from '../models/InitiatePaymentResponse';
import type { Page_SchoolFeesTransactionDto_ } from '../models/Page_SchoolFeesTransactionDto_';
import type { Page_TransactionAndInvoiceInfoDto_ } from '../models/Page_TransactionAndInvoiceInfoDto_';
import type { PaymentReceiptDto } from '../models/PaymentReceiptDto';
import type { RegisterOfflinePaymentRequest } from '../models/RegisterOfflinePaymentRequest';
import type { SchoolFeesTransactionDto } from '../models/SchoolFeesTransactionDto';
import type { SendPaymentLinkRequest } from '../models/SendPaymentLinkRequest';
import type { VerifySchoolFeesPaymentResponse } from '../models/VerifySchoolFeesPaymentResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SchoolFeesPaymentsRestControllerService {
  /**
   * createStripePaymentIntent
   * @returns CreatePaymentIntentResponse OK
   * @returns any Created
   * @throws ApiError
   */
  public static createStripePaymentIntentUsingPost({
    request,
    xTenantId,
  }: {
    /**
     * request
     */
    request: InitiatePaymentRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<CreatePaymentIntentResponse | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/payments/intent',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * makeOfflinePayment
   * @returns SchoolFeesTransactionDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static makeOfflinePaymentUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: RegisterOfflinePaymentRequest;
  }): CancelablePromise<SchoolFeesTransactionDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/payments/offline',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * deleteOfflinePayment
   * @returns any OK
   * @throws ApiError
   */
  public static deleteOfflinePaymentUsingDelete({
    transactionId,
  }: {
    /**
     * transactionId
     */
    transactionId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/payments/offline/{transactionId}',
      path: {
        transactionId: transactionId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }

  /**
   * initOnlinePayment
   * @returns InitiatePaymentResponse OK
   * @returns any Created
   * @throws ApiError
   */
  public static initOnlinePaymentUsingPost({
    request,
    xTenantId,
  }: {
    /**
     * request
     */
    request: InitiatePaymentRequest;
    /**
     * X-TENANT-ID
     */
    xTenantId: string;
  }): CancelablePromise<InitiatePaymentResponse | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/payments/online',
      headers: {
        'X-TENANT-ID': xTenantId,
      },
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * initOnlineBulkPayment
   * @returns InitiateBulkPaymentResponse OK
   * @returns any Created
   * @throws ApiError
   */
  public static initOnlineBulkPaymentUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: InitiateBulkPaymentRequest;
  }): CancelablePromise<InitiateBulkPaymentResponse | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/payments/online/bulk',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getPaymentReceipt
   * @returns PaymentReceiptDto OK
   * @throws ApiError
   */
  public static getPaymentReceiptUsingGet1({
    sessionId,
    studentId,
  }: {
    /**
     * session-id
     */
    sessionId: string;
    /**
     * student-id
     */
    studentId: string;
  }): CancelablePromise<Array<PaymentReceiptDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments/receipts',
      query: {
        'session-id': sessionId,
        'student-id': studentId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getPaymentReceipt
   * @returns PaymentReceiptDto OK
   * @throws ApiError
   */
  public static getPaymentReceiptUsingGet({
    transactionId,
  }: {
    /**
     * transactionId
     */
    transactionId: string;
  }): CancelablePromise<PaymentReceiptDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments/receipts/{transactionId}',
      path: {
        transactionId: transactionId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * sendPaymentLink
   * @returns any OK
   * @throws ApiError
   */
  public static sendPaymentLinkUsingPost({
    sendPaymentLinkRequest,
  }: {
    /**
     * sendPaymentLinkRequest
     */
    sendPaymentLinkRequest: SendPaymentLinkRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/payments/send-link',
      body: sendPaymentLinkRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * transactions
   * @returns Page_TransactionAndInvoiceInfoDto_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static transactionsUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: FetchSchoolFeesTransactionRequest;
  }): CancelablePromise<Page_TransactionAndInvoiceInfoDto_ | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/payments/transactions',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getParentPaymentHistory
   * @returns Page_SchoolFeesTransactionDto_ OK
   * @throws ApiError
   */
  public static getParentPaymentHistoryUsingGet({
    parentId,
    limit,
    maxDate,
    minDate,
    offset,
    paymentStatus,
  }: {
    parentId: string;
    limit?: number;
    maxDate?: string;
    minDate?: string;
    offset?: number;
    paymentStatus?: 'FAILED' | 'PENDING' | 'SUCCESSFUL';
  }): CancelablePromise<Page_SchoolFeesTransactionDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments/transactions/by-parent',
      query: {
        limit: limit,
        maxDate: maxDate,
        minDate: minDate,
        offset: offset,
        parentId: parentId,
        paymentStatus: paymentStatus,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * transactions
   * @returns SchoolFeesTransactionDto OK
   * @throws ApiError
   */
  public static transactionsUsingGet({
    studentId,
    termId,
  }: {
    /**
     * student-id
     */
    studentId: string;
    /**
     * term-id
     */
    termId: string;
  }): CancelablePromise<Array<SchoolFeesTransactionDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments/transactions/per-student',
      query: {
        'student-id': studentId,
        'term-id': termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getTransaction
   * @returns SchoolFeesTransactionDto OK
   * @throws ApiError
   */
  public static getTransactionUsingGet({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<SchoolFeesTransactionDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments/transactions/{id}',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * verifyPayment
   * @returns VerifySchoolFeesPaymentResponse OK
   * @throws ApiError
   */
  public static verifyPaymentUsingGet({
    safsimsTransactionRef,
  }: {
    /**
     * safsims_transaction_ref
     */
    safsimsTransactionRef: string;
  }): CancelablePromise<Array<VerifySchoolFeesPaymentResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments/verify/{safsims_transaction_ref}',
      path: {
        safsims_transaction_ref: safsimsTransactionRef,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
