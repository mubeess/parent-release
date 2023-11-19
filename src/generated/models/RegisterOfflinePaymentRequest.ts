/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RegisterOfflinePaymentRequest = {
    amount: number;
    bank_account_id?: string;
    date_created?: string;
    id?: string;
    payment_date: string;
    payment_method: 'BANK_DEPOSIT' | 'BANK_TRANSFER' | 'CASH' | 'FLUTTERWAVE' | 'PAYSTACK' | 'PESAPAL' | 'POS' | 'STRIPE';
    reference_number: string;
    student_id: string;
    term_id: string;
};

