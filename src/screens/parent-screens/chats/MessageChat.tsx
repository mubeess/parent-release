import Icon from '@safsims/components/Icon/Icon';
import { lightTheme } from '@safsims/utils/Theme';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import ChatHeader from './components/ChatHeader';
import Reciever from './components/Reciever';
import Sender from './components/Sender';

export default function MessageChat() {
  return (
    <View style={styles.container}>
      <ChatHeader name="General [group chat]" short_name="School chat, parent and teachers" />
      <ScrollView style={styles.chats}>
        <Sender />
        <Reciever />
        <Sender />
        <Reciever />
        <Sender />
        <Reciever />
      </ScrollView>
      <View style={styles.input}>
        <Icon name="sticker" size={20} color={lightTheme.colors.PrimaryGrey} />
        <Icon name="paperclip-2" size={20} color={lightTheme.colors.PrimaryGrey} />
        <TextInput multiline style={styles.mainInput} placeholder="Type message here" />
        <Icon name="send-2" size={20} color={lightTheme.colors.PrimaryGrey} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chats: {
    paddingHorizontal: 10,
    flex: 1,
  },
  input: {
    height: 66,
    borderTopColor: lightTheme.colors.PrimaryBorderColor,
    borderTopWidth: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainInput: {
    width: '70%',
  },
});
