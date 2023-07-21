import { MessageChannelDto, MessageChannelRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useCallback, useEffect, useState } from 'react';

const useMessageChannelsGet = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [content, setContent] = useState<MessageChannelDto[]>([]);

  const fetchMessageChannels = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        MessageChannelRestControllerService.getAllMessageChannelsUsingGet(),
      );
      setContent(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setContent([]);
      handleError(error);
    }
  }, []);

  useEffect(() => {
    fetchMessageChannels();
  }, [fetchMessageChannels]);

  return {
    fetchMessageChannels,
    messageChannels: content,
    loadingChannels: loading,
  };
};

export default useMessageChannelsGet;
