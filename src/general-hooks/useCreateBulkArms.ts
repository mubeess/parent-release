import { Notify } from '@flexisaf/flexibull2';
import { ArmRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';

const useCreateBulkClassArm = (callback: () => void) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const createArmRequestList = async (createArmRequestList) => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        ArmRestControllerService.createArmsUsingPost({ createArmRequestList }),
      );
      setLoading(false);
      setSuccess(true);
      Notify('Arms Created succesfully.', { status: 'success' });
      callback();
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  return {
    buttonLoader: loading,
    createArmRequestList,
    success,
  };
};

export default useCreateBulkClassArm;
