import { ActivityFeedRestControllerService } from '@safsims/generated';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';

const useAddParentToGroupPost = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [groups, setGroups] = useState<any>(undefined);
  const token = useAppSelector((user) => user.user.access_token);
  const id = useAppSelector((user) => user.user.parent?.parent_ums_id);
  const getGroups = async () => {
    startLoading();

    try {
      const data = await apiWrapper(() =>
        ActivityFeedRestControllerService.addUserToGroupsUsingPost({
          authorization: token || '',
          request: {
            groups: ['82727842-0e18-487d-9c02-a45b2550560e'],
            user_id: id,
            username: 'Mubis',
          },
        }),
      );
      console.log(data);
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

export default useAddParentToGroupPost;
