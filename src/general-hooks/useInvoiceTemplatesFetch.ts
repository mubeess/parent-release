import { InvoiceTemplateDto, InvoiceTemplateRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

interface IProps {
  termId?: string;
}

const useInvoiceTemplatesFetch = ({ termId }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [invoiceTemplates, setInvoiceTemplates] = useState<InvoiceTemplateDto[]>([]);
  const [fetch, setFetch] = useState<number>(0);

  const refetch = () => setFetch(fetch + 1);

  const fetchTemplates = async (termId: string) => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        InvoiceTemplateRestControllerService.getByTermIdUsingGet({
          termId,
        }),
      );
      setInvoiceTemplates(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  useEffect(() => {
    if (termId) {
      fetchTemplates(termId);
    }
  }, [termId, fetch]);

  return {
    loading,
    invoiceTemplates,
    fetchTemplates,
    refetchTemplates: refetch,
  };
};

export default useInvoiceTemplatesFetch;
