import { PusherEvent } from '@pusher/pusher-websocket-react-native';
import EmptyState from '@safsims/components/EmptyState/EmptyState';
import { EmptyPaper } from '@safsims/components/Images';
import Loader from '@safsims/components/Loader/Loader';
import useNotification from '@safsims/general-hooks/useNotification';
import { GroupResponse } from '@safsims/generated';
import pusherService from '@safsims/utils/pusherService';
import { handleError } from '@safsims/utils/utils';
import { useEffect } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';
import useGetGroups from '../dashboard/hooks/useGetGroups';
import FeedMenu from './components/FeedMenu';
import useGetMyFeeds from './hooks/useGetMyFeeds';

export default function ActivityFeeds() {
  const { notify } = useNotification();

  const { getGroups, loading, groups } = useGetGroups();

  const { getFeeds, loadingFeeds, feeds, setNewData, refetch, refresh } = useGetMyFeeds();

  const SubscribeToChannel = async (channel: string) => {
    try {
      const myChannel = await pusherService.pusher.subscribe({
        channelName: channel,
        onEvent: (event: PusherEvent) => {
          if (event.eventName == 'incoming_feed') {
            setNewData(JSON.parse(event.data));
            Toast.show({
              type: 'success',
              text1: 'New Post',
              text2: JSON.parse(event.data).object?.content,
            });
            notify({
              id: event.channelName,
              title: JSON.parse(event.data).actor?.name,
              body: JSON.parse(event.data).object?.content,
            });
          }
        },
      });

      // await pusher.connect();
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    getGroups();
    getFeeds();
  }, []);

  useEffect(() => {
    if (groups.length > 0) {
      groups.map((group: GroupResponse) => {
        SubscribeToChannel(group.id || '');
      });
    }
  }, [groups]);

  return (
    <>
      <View style={styles.container}>
        {loadingFeeds && refresh == 0 && <Loader />}
        <>
          {!loadingFeeds && feeds?.length > 0 && (
            <FlatList
              refreshControl={
                <RefreshControl refreshing={loadingFeeds && refresh > 0} onRefresh={refetch} />
              }
              data={feeds !== undefined ? feeds : []}
              renderItem={({ item }) => <FeedMenu feed={item} />}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </>
        {!loading && feeds?.length == 0 && (
          <EmptyState info="There are no feeds for you" title="No Feeds!" Image={<EmptyPaper />} />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
});
