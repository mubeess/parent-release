import { ActivityFeedRestControllerService } from '@safsims/generated';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';
import Toast from 'react-native-toast-message';

const usePostFeed = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [feeds, setFeeds] = useState<any>(undefined);
  const token = useAppSelector((user) => user.user.access_token);
  const postFeeds = async ({
    message,
    group,
    file,
  }: {
    message: string;
    group: string;
    file?: Blob[];
  }) => {
    startLoading();

    try {
      const data = await apiWrapper(() =>
        ActivityFeedRestControllerService.createFeedUsingPost({
          authorization: token || '',
          message,
          group,
          file,
        }),
      );

      setFeeds(data);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Feeds posted successfully',
      });
      stopLoading();
      return true;
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  return {
    loading,
    feeds,
    postFeeds,
  };
};

export default usePostFeed;
