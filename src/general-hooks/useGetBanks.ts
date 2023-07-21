import { BankDto, BankRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useGetBanks = () => {
  const dispatch = useDispatch();
  const { loading, startLoading, stopLoading } = useLoading();
  const [banks, setBanks] = useState<BankDto[]>([]);

  const getBanks = async () => {
    startLoading();
    try {
      const data = await apiWrapper(() => BankRestControllerService.getAllBanksUsingGet());
      stopLoading();
      setBanks(data);
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  useEffect(() => {
    getBanks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    banks,
  };
};

export default useGetBanks;
