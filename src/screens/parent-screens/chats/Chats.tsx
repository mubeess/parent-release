import EmptyState from '@safsims/components/EmptyState/EmptyState';
import { EmptyPaper } from '@safsims/components/Images';
import Loader from '@safsims/components/Loader/Loader';
import { GroupResponse } from '@safsims/generated';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import useGetGroups from '../activity-feeds/hooks/useGetGroups';
import ChatList from './components/ChatList';

export default function Chats() {
  const { getGroups, loading, groups } = useGetGroups();

  useEffect(() => {
    getGroups();
  }, []);
  return (
    <View style={styles.container}>
      {loading && <Loader />}
      {groups.length > 0 && (
        <>
          {groups.map((group: GroupResponse, ind) => (
            <ChatList key={group.id} group={group} />
          ))}
        </>
      )}
      {!loading && groups?.length == 0 && (
        <EmptyState
          info="You are not added to group!"
          title="Not added to group!"
          Image={<EmptyPaper />}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
});
