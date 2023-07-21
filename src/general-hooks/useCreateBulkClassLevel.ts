import { Notify } from '@flexisaf/flexibull2';
import { ClassLevelRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useOnboarding } from 'components/onboarding/hooks/useOnboarding';
import { useState } from 'react';

const useCreateBulkClassLevel = (callback: () => void) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const { CheckIfFromOnboarding } = useOnboarding();

  const classLevelRequestList = async (classLevelRequestList) => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        ClassLevelRestControllerService.createClassLevelsUsingPost({
          classLevelRequestList,
        }),
      );
      setLoading(false);
      setSuccess(true);
      Notify('Levels Created succesfully.', { status: 'success' });
      callback();
      CheckIfFromOnboarding('CLASS_LEVEL');
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  return {
    buttonLoader: loading,
    classLevelRequestList,
    success,
  };
};

export default useCreateBulkClassLevel;
