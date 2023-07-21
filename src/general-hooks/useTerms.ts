import { TermDto, TermRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useCallback, useEffect, useState } from 'react';

export const useAllTermsGet = ({ stopAutoFetch }: { stopAutoFetch?: boolean }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<TermDto[]>([]);

  const fetchAllTerms = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiWrapper(() => TermRestControllerService.getAllTermsUsingGet());
      setList(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setList([]);
      handleError(error);
    }
  }, []);

  useEffect(() => {
    if (!stopAutoFetch) {
      fetchAllTerms();
    }
  }, [fetchAllTerms, stopAutoFetch]);

  return {
    loadingTerms: loading,
    fetchAllTerms,
    termList: list,
  };
};
