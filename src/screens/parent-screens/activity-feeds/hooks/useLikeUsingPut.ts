import { ActivityFeedRestControllerService, Feed, ReactionRequest } from '@safsims/generated';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';
import Toast from 'react-native-toast-message';

const useLikeUsingPut = () => {
  const { loading, startLoading, stopLoading } = useLoading();

  const [feeds, setFeeds] = useState<Feed[]>([]);
  const token = useAppSelector((user) => user.user.access_token);
  const likeFeed = async ({ feedId, request }: { feedId: string; request: ReactionRequest }) => {
    startLoading();

    try {
      const data = await apiWrapper(() =>
        ActivityFeedRestControllerService.reactToFeedUsingPut({
          authorization: token || '',
          feedId,
          request,
        }),
      );
      console.log(data);
      setFeeds(data);
      stopLoading();
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Liked',
      });
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  return {
    likingFeed: loading,
    feeds,
    likeFeed,
  };
};

export default useLikeUsingPut;
