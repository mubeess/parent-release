import { ActivityFeedRestControllerService, Feed } from '@safsims/generated';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

const useGetAllFeeds = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [newData, setNewData] = useState<Feed>(undefined);
  const [refresh, setRefresh] = useState(0);
  const refetch = () => {
    setRefresh((prev) => prev + 1);
  };
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const token = useAppSelector((user) => user.user.access_token);
  const getFeeds = async () => {
    startLoading();

    try {
      const data = await apiWrapper(() =>
        ActivityFeedRestControllerService.fetchGroupFeedsUsingGet({
          authorization: token || '',
          groupId: '82727842-0e18-487d-9c02-a45b2550560e',
        }),
      );

      setFeeds(data);
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };
  useEffect(() => {
    setFeeds((prev) => [newData, ...prev]);
  }, [newData]);

  useEffect(() => {
    getFeeds();
  }, [refresh]);
  return {
    loadingFeeds: loading,
    feeds,
    getFeeds,
    setNewData,
    refetch,
    refresh,
  };
};

export default useGetAllFeeds;
