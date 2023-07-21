import { TermDto, TermRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useCallback, useEffect, useState } from 'react';

const useAllExisitingTermsFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [terms, setExistingTerms] = useState<TermDto[]>([]);

  const fetchTerms = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiWrapper(() => TermRestControllerService.getAllTermsUsingGet());
      setExistingTerms(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  }, []);

  useEffect(() => {
    fetchTerms();
  }, [fetchTerms]);

  return {
    loadingTerms: loading,
    fetchTerms,
    terms,
  };
};

export default useAllExisitingTermsFetch;
