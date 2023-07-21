import { TermDto, TermRestControllerService } from '@safsims/generated';
import { updateAppConfigState } from '@safsims/redux/configuration/actions';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useCurrentTermGet = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [currentTerm, setCurrentTerm] = useState<TermDto | undefined>(undefined);
  const dispatch = useDispatch();

  const fetchCurrentTerm = async () => {
    startLoading();
    try {
      const data = await apiWrapper(() => TermRestControllerService.getCurrentTermUsingGet());
      stopLoading();
      setCurrentTerm(data);
      dispatch(
        updateAppConfigState({
          currentTerm: data,
        }),
      );
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  useEffect(() => {
    fetchCurrentTerm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    currentTerm,
  };
};

export default useCurrentTermGet;
