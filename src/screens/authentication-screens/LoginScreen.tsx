import { useTheme } from '@react-navigation/native';
import Button from '@safsims/components/Button/Button';
import Icon from '@safsims/components/Icon/Icon';
import { AppleLogo, GoogleIcon } from '@safsims/components/Images';
import AuthInput from '@safsims/components/Input/AuthInput';
import Text from '@safsims/components/Text/Text';
import { lightTheme } from '@safsims/utils/Theme';
import config from '@safsims/utils/config';
import useDeepLink from '@safsims/utils/useDeepLink/useDeepLink';
import { useState } from 'react';
import { ActivityIndicator, Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native-ui-lib';
import AuthLayout from './components/AuthLayout';
import useAppleAuth from './hooks/useAppleAuth';
import useGoogleAuth from './hooks/useGoogleAuth';
import useLogin from './hooks/useLogin';
const { API_BASE_URL } = config;

const LoginScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [values, setValues] = useState({ username: '', password: '' });
  const { value } = useDeepLink();

  const { loginUser, loading } = useLogin({
    transfer_code: value,
  });

  const onSubmit = () => {
    const { username, password } = values;
    if (username && password) {
      loginUser(values);
    }
  };

  const { loading: googleLoading, startGoogleLogin } = useGoogleAuth();
  const { loading: appleLoading, startAppleLogin } = useAppleAuth();

  return (
    <>
      <AuthLayout
        title={'Login'}
        InputComponents={
          <>
            {appleLoading && <ActivityIndicator style={{ marginVertical: 20 }} color="#000" />}
            <AuthInput
              label="Email"
              text={values.username}
              type="email-address"
              onChange={(val) => setValues((prev) => ({ ...prev, username: val }))}
            />
            <AuthInput
              label="Password"
              style={{
                marginTop: 15,
                zIndex: 10,
              }}
              secureEntry
              text={values.password}
              onChange={(val) => setValues((prev) => ({ ...prev, password: val }))}
            />
          </>
        }
        ButtonComponents={
          <>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
              <Text style={{ color: colors.PrimaryFontColor }}>Forgot your password?</Text>
              <TouchableOpacity style={{ marginLeft: 5 }}>
                <Text style={{ color: colors.SafsimsBlue }}>Click here</Text>
              </TouchableOpacity>
            </View>

            <Button
              label="Login"
              onPress={() => onSubmit()}
              isLoading={loading}
              IconRight={<Icon name="arrow-right-1" size={20} color="#fff" />}
              fontStyle={{
                fontSize: 16,
                fontWeight: '500',
              }}
              style={{
                marginTop: 30,
                height: 60,
              }}
            />
            <Button
              label="Login with Apple"
              onPress={() => startAppleLogin()}
              IconLeft={<AppleLogo />}
              fontStyle={{
                fontSize: 16,
                fontWeight: '500',
                color: '#666',
              }}
              style={{
                marginTop: 30,
                height: 60,
                marginVertical: 20,
                backgroundColor: '#FFF',
                borderWidth: 1,
                borderColor: colors.PrimaryBorderColor,
              }}
            />

            <Button
              label="Login with Google"
              onPress={async () => {
                const res = await startGoogleLogin();
                Linking.openURL(res?.redirect_url || '');
              }}
              isLoading={googleLoading}
              IconLeft={<GoogleIcon />}
              fontStyle={{
                fontSize: 16,
                fontWeight: '500',
                color: '#666',
              }}
              style={{
                marginTop: 20,
                height: 60,
                marginVertical: 20,
                backgroundColor: '#FFF',
                borderWidth: 1,
                borderColor: colors.PrimaryBorderColor,
              }}
            />

            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
              <Text>Not your child's school?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SelectSchool')}
                style={{ marginLeft: 5 }}
              >
                <Text style={{ color: colors.SafsimsBlue }}>Change School</Text>
              </TouchableOpacity>
            </View>
          </>
        }
      />
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  google: {
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 20,
    backgroundColor: '#FFF',
    borderRadius: 3,
    height: 60,
    alignItems: 'center',
    shadowColor: Colors.grey40,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    borderWidth: 1,
  },
  appleButton: {
    width: '100%',
    height: 60,
    marginTop: 20,
  },
});
