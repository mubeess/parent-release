import httpClient from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';

const useStudentInvoiceEdit = () => {
  const { startLoading, loading, stopLoading } = useLoading();

  const editInvoice = async (payload) => {
    startLoading();
    try {
      const { data } = await httpClient.put(`/students-invoice/`, {
        ...payload,
        enforce_minimum_quantity: true,
      });
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  return {
    loading,
    editInvoice,
  };
};

export default useStudentInvoiceEdit;
