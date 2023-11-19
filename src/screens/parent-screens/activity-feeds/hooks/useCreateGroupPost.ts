import { ActivityFeedRestControllerService } from '@safsims/generated';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';

const useCreateGroupPost = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [groups, setGroups] = useState<any>(undefined);
  const token = useAppSelector((user) => user.user.access_token);
  const getGroups = async () => {
    startLoading();

    try {
      const data = await apiWrapper(() =>
        ActivityFeedRestControllerService.createGroupUsingPost({
          authorization: token || '',
          request: {
            name: 'Safsims',
          },
        }),
      );
      
      setGroups(data);
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  return {
    loading,
    groups,
    getGroups,
  };
};

export default useCreateGroupPost;
