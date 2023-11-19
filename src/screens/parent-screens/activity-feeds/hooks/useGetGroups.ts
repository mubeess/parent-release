import { ActivityFeedRestControllerService, GroupResponse } from '@safsims/generated';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';

const useGetGroups = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [groups, setGroups] = useState<GroupResponse[] | []>([]);
  const token = useAppSelector((user) => user.user.access_token);
  const getGroups = async () => {
    startLoading();

    try {
      const data = await apiWrapper(() =>
        ActivityFeedRestControllerService.fetchMyGroupsUsingGet({
          authorization: token || '',
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

export default useGetGroups;
