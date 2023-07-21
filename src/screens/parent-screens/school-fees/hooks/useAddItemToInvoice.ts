import Toast from 'react-native-toast-message';

import {
  CreateStudentInvoiceItemRequest,
  StudentBillRestControllerService,
} from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';

interface IProps {
  callback?: () => void;
}

const useAddItemToInvoice = ({ callback }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const addItemToInvoice = async (studentId: string, item: CreateStudentInvoiceItemRequest) => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        StudentBillRestControllerService.createInvoiceItemUsingPost({
          studentId,
          request: item,
        }),
      );
      setLoading(false);
      callback?.();

      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Item added successfully.',
      });
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  return {
    addItemToInvoice,
    loading,
  };
};

export default useAddItemToInvoice;
