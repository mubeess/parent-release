import { ActivityFeedRestControllerService, FeedResponse } from '@safsims/generated';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

const useGetMyFeeds = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [newData, setNewData] = useState<FeedResponse>(undefined);
  const [refresh, setRefresh] = useState(0);
  const refetch = () => {
    setRefresh((prev) => prev + 1);
  };
  const [feeds, setFeeds] = useState<FeedResponse[]>([]);
  const token = useAppSelector((user) => user.user.access_token);
  const getFeeds = async () => {
    startLoading();

    try {
      const data = await apiWrapper(() =>
        ActivityFeedRestControllerService.fetchMyFeedsUsingGet({
          authorization: token || '',
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

export default useGetMyFeeds;
