import { useNavigation } from '@react-navigation/native';
import Icon from '@safsims/components/Icon/Icon';
import { ArrowLeftIcon } from '@safsims/components/Images';
import Text from '@safsims/components/Text/Text';
import { lightTheme } from '@safsims/utils/Theme';
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function TimeTableHeader({ name, short_name, withMenu = false, onMenuPress }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={lightTheme.colors.PrimaryColor} barStyle="light-content" />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <ArrowLeftIcon />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text h2 style={{ textAlign: 'center', color: '#fff', fontSize: 14 }}>
          {name}
        </Text>
        {short_name && <Text style={{ textAlign: 'center', color: '#fff' }}>{short_name}</Text>}
      </View>

      {withMenu && (
        <TouchableOpacity onPress={onMenuPress} style={[styles.back, { marginLeft: 'auto' }]}>
          <Icon name="menu-1" size={20} color="#383A3F" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    backgroundColor: lightTheme.colors.PrimaryColor,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: '#E6E9EC',
    // marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    // marginTop: 40,
    // marginRight: 'auto',
  },
});
