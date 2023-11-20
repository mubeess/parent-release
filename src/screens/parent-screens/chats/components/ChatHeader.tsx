import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from '@safsims/components/Images';
import Text from '@safsims/components/Text/Text';
import { lightTheme } from '@safsims/utils/Theme';
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ChatHeader({ name, short_name }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <ArrowLeftIcon />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text h2 style={{ textAlign: 'center' }}>
          {name}
        </Text>
        <Text style={{ textAlign: 'center' }}>{short_name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
  },
  back: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: '#E6E9EC',
    // marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 'auto',
  },
  content: {
    // marginTop: 40,
    marginRight: 'auto',
  },
});
