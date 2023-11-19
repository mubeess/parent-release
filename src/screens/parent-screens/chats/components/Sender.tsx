import { lightTheme } from '@safsims/utils/Theme';
import { StyleSheet, Text, View } from 'react-native';

export default function Sender() {
  return (
    <View style={styles.container}>
      <View style={styles.mainMessage}>
        <Text style={styles.text}>
          I’m sorry to hear that. There are several home remedies that can help relieve headaches.
          Some of these remedies include:
        </Text>
      </View>
      <Text style={styles.time}>9am</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    minHeight: 38,
    marginVertical: 10,

    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '70%',
    marginLeft: 'auto',
  },
  text: {
    color: '#fff',
    textAlign: 'justify',
  },
  mainMessage: {
    backgroundColor: lightTheme.colors.PrimaryColor,
    borderRadius: 10,
    padding: 10,
  },
  time: {
    marginLeft: 'auto',
  },
});
