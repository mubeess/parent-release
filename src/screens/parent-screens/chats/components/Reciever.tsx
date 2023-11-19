import { lightTheme } from '@safsims/utils/Theme';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Reciever() {
  return (
    <View style={styles.container}>
      <View style={styles.profilePic}>
        <Image style={styles.image} source={require('../../../../../assets/avatar.png')} />
        <Text>@mubarak</Text>
      </View>
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
    maxWidth: '70%',
    marginRight: 'auto',
  },
  text: {
    color: '#000',
    textAlign: 'justify',
  },
  mainMessage: {
    backgroundColor: lightTheme.colors.PrimaryFade,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    marginRight: 'auto',
  },
  profilePic: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginRight: 10,
  },
});
