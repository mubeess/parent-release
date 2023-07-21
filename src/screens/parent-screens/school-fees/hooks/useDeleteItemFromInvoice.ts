import {
  SchoolFeesPaymentsRestControllerService,
  StudentBillRestControllerService,
} from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';

import { useState } from 'react';
import Toast from 'react-native-toast-message';
import useInvoiceDiscountDelete from './useInvoiceDiscountDelete';

interface IProps {
  callback?: () => void;
}

const useDeleteItemFromInvoice = ({ callback }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { loading: loadingDiscount, deleteDiscount } = useInvoiceDiscountDelete();

  const deleteItemFromInvoice = async (
    studentId,
    payableItemId,
    termId,
    sessionId,
    onFail?: () => void,
  ) => {
    setLoading(true);
    try {
      const receipts = await apiWrapper(() =>
        SchoolFeesPaymentsRestControllerService.getPaymentReceiptUsingGet1({
          studentId,
          sessionId,
        }),
      );

      if (receipts) {
        const exists = !!receipts.find((item) =>
          item.student_bill_data?.student_bill?.find(
            (data) => data.payable_item?.id === payableItemId,
          ),
        );

        if (!exists) {
          await apiWrapper(() =>
            StudentBillRestControllerService.deleteInvoiceItemUsingDelete({
              studentId,
              payableItemId,
              termId,
            }),
          );
          callback?.();
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Item deleted successfully',
          });
          deleteDiscount({
            studentId,
            termId,
            payableItemId,
          });
        } else {
          Toast.show({
            type: 'error',
            text1: 'Warning',
            text2: 'Payment has already been made for this item.',
          });

          onFail?.();
        }
      }
      setLoading(false);
    } catch (error) {
      onFail?.();
      setLoading(false);
      handleError(error);
    }
  };

  return {
    deleteItemFromInvoice,
    loading: loading || loadingDiscount,
  };
};

export default useDeleteItemFromInvoice;
