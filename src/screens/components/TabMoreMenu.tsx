import { useNavigation } from '@react-navigation/native';
import Icon from '@safsims/components/Icon/Icon';
import { PrivacyPolicyIcon } from '@safsims/components/Images';
import { lightTheme } from '@safsims/utils/Theme';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TabMoreMenu({ close }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.decoration} />
      <View style={styles.menuList}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://safsims.com/privacy-policy/')}
          style={styles.menu}
        >
          <PrivacyPolicyIcon />

          <Text>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('More', {
              screen: 'CalendarHome',
            });
            close();
          }}
          style={styles.menu}
        >
          <Icon name="calendar" size={24} color="#000" />

          <Text>Time Table</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('More', {
              screen: 'AttendanceHome',
            });
            close();
          }}
          style={styles.menu}
        >
          <Icon name="medal" size={24} color="#000" />

          <Text>Attendance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuList}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Fees', {
              screen: 'PaymentHistory',
            });
            close();
          }}
          style={styles.menu}
        >
          <Icon name="layer" size={24} color="#000" />

          <Text>Payment History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Fees', {
              screen: 'InvoiceHistory',
            });
            close();
          }}
          style={styles.menu}
        >
          <Icon name="stickynote" size={24} color="#000" />

          <Text>Invoice History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: 100,
    width: '100%',
  },
  decoration: {
    width: 50,
    height: 3,
    borderRadius: 5,
    backgroundColor: lightTheme.colors.PrimaryGrey,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10,
  },
  menuList: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu: {
    minWidth: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
