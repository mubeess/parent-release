import { PaymentReceiptDto, SchoolFeesPaymentsRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

interface IProps {
  id?: string;
}

const useSingleReceiptFetch = ({ id }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [receipt, setReceipt] = useState<PaymentReceiptDto | undefined>(undefined);

  const fetchReceipt = async (id: string) => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        SchoolFeesPaymentsRestControllerService.getPaymentReceiptUsingGet({ transactionId: id }),
      );
      setReceipt(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchReceipt(id);
    }
  }, [id]);

  return {
    receipt,
    loading,
    setReceipt,
  };
};

export default useSingleReceiptFetch;
