import { useTheme } from '@react-navigation/native';
import Button from '@safsims/components/Button/Button';
import Icon from '@safsims/components/Icon/Icon';
import AuthInput from '@safsims/components/Input/AuthInput';
import { lightTheme } from '@safsims/utils/Theme';
import { StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import AuthLayout from './components/AuthLayout';
import Text from '@safsims/components/Text/Text';

const ConfirmPasswordResetScreen = () => {
  const { colors } = useTheme();
  const { height } = useWindowDimensions();
  return (
    <>
      <AuthLayout
        height={height - 200}
        title={'Set Your Password'}
        subTitle={'Choose a password to start/continue using the app'}
        InputComponents={
          <>
            <AuthInput label="Password" secureEntry text="some mail" onChange={(val) => {}} />
            <AuthInput
              label="Re-type Password"
              secureEntry
              style={{ marginTop: 20 }}
              text="some mail"
              onChange={(val) => {}}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 30,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '30%',
                }}
              >
                <Icon name="arrow-left" color={colors.SafsimsBlue} />
                <Text
                  style={{
                    color: colors.SafsimsBlue,
                    marginLeft: 5,
                  }}
                >
                  Back to login
                </Text>
              </TouchableOpacity>
              <Button
                label="Set My Password & Login"
                IconRight={<Icon name="send-2" size={20} color="#fff" />}
                fontStyle={{
                  fontSize: 16,
                  fontWeight: '500',
                }}
                style={{
                  height: 60,
                  width: '70%',
                }}
              />
            </View>
          </>
        }
      />
    </>
  );
};

export default ConfirmPasswordResetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
});
