/* eslint-disable react-hooks/exhaustive-deps */

import { AppReleaseRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

const useCheckForAppUpdate = () => {
  const handle = useLoading();

  const [update, setUpdate] = useState<any>(null);

  const checkUpdate = async () => {
    handle.startLoading();
    try {
      const data = await apiWrapper(() =>
        AppReleaseRestControllerService.getLatestReleaseUsingGet(),
      );
      handle.stopLoading();
      setUpdate(data);
    } catch (error) {
      handle.stopLoading();
      handleError(error);
    }
  };

  useEffect(() => {
    checkUpdate();
  }, []);

  return {
    loading: handle.loading,
    update,
    refetch: checkUpdate,
  };
};

export default useCheckForAppUpdate;
