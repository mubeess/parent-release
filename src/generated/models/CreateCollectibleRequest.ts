/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateCollectibleRequest = {
  collectible_item_id: string;
  quantity: number;
  status: 'COLLECTED' | 'PENDING_COLLECTION';
  student_id: string;
  term_id: string;
};
