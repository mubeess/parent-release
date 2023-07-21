import { BankAccountDto, BankAccountRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useCallback, useEffect, useState } from 'react';

const useBankAccountFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [bankAccounts, setBankAccounts] = useState<BankAccountDto[]>([]);

  const fetchBanks = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        BankAccountRestControllerService.getBankAccountsUsingGet(),
      );
      setBankAccounts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  }, []);

  useEffect(() => {
    fetchBanks();
  }, [fetchBanks]);

  return {
    loading,
    fetchBanks,
    bankAccounts,
  };
};

export default useBankAccountFetch;
