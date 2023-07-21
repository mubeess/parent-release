import { useNavigation } from '@react-navigation/native';
import AppHeader from '@safsims/components/Header/AppHeader';
import Icon from '@safsims/components/Icon/Icon';

import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { lightTheme } from '@safsims/utils/Theme';
import { Image, StyleSheet, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import ProfileDetail from './components/ProfileDetail';
import Text from '@safsims/components/Text/Text';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const activeUser = useAppSelector((state) => state.user.activeUserType);
  const user = useAppSelector((state) => state.user.parent);
  const avatar = user?.profile_pic || '';

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <AppHeader navigation={navigation} onBack={() => navigation.goBack()} pageTitle="Profile" />
      <View style={styles.profileDetails}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.avatar}>
            {avatar && <Image resizeMode="cover" source={{ uri: avatar }} style={styles.image} />}
            {!avatar && <Icon name="user" size={100} color={lightTheme.colors.PrimaryGrey} />}
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text>
              {user?.first_name} {user?.surname}{' '}
            </Text>
            <View style={styles.active}>
              <Text style={{ color: lightTheme.colors.PrimaryGreen }}>{user?.active_status}</Text>
            </View>
            {/* <Button
              fontStyle={{ color: lightTheme.colors.PrimaryColor }}
              style={styles.button}
              label="Edit Profile"
            /> */}
          </View>
        </View>
        <Text style={{ marginTop: 50 }}>Biodata</Text>
        <View style={styles.line}>
          <View style={styles.lineBorder}></View>
          <View style={styles.lineDeco}></View>
        </View>
        <ProfileDetail
          firtsHeader="First name"
          firstValue={`${user?.first_name || '--/--'}`}
          secondHeader="Surname"
          secondValue={`${user?.surname || '--/--'}`}
        />
        <ProfileDetail
          firtsHeader="Other name"
          firstValue={user?.other_names || '--/--'}
          secondHeader="email"
          secondValue={user?.email}
        />
        <ProfileDetail
          firtsHeader="Phone Number"
          firstValue={user?.phone || '--/--'}
          secondHeader="Date Of Birth"
          secondValue={user?.dob || '--/--'}
        />
        <ProfileDetail
          firtsHeader="Country"
          firstValue={user?.country?.name || '--/--'}
          secondHeader="State Of Origin"
          secondValue={user?.state?.state_name || '--/--'}
        />
        <ProfileDetail
          firtsHeader="Home/Contact Address"
          firstValue={user?.home_address || '--/--'}
          secondHeader=""
          secondValue=""
        />
      </View>
    </Animated.ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.colors.PrimaryBackground,
  },
  profileDetails: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: lightTheme.colors.PrimaryBackground,
  },
  avatar: {
    backgroundColor: lightTheme.colors.PrimaryFade,
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  active: {
    height: 20,
    width: 50,
    backgroundColor: lightTheme.colors.PrimaryFadedBlue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: lightTheme.colors.PrimaryBackground,
    width: '50%',
    marginVertical: 20,
    borderColor: lightTheme.colors.PrimaryColor,
    borderWidth: 0.5,
    marginLeft: 0,
  },
  line: {
    width: '100%',
    height: 10,
    justifyContent: 'center',
    marginBottom: 20,
  },
  lineDeco: {
    width: '20%',
    minHeight: 3,
    backgroundColor: lightTheme.colors.PrimaryColor,
    position: 'absolute',
  },
  lineBorder: {
    height: 2,
    backgroundColor: lightTheme.colors.PrimaryBorderColor,
    position: 'absolute',
    width: '100%',
  },
});
