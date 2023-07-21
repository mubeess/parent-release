import { useTheme } from '@react-navigation/native';
import Button from '@safsims/components/Button/Button';
import Icon from '@safsims/components/Icon/Icon';
import AuthInput from '@safsims/components/Input/AuthInput';
import { lightTheme } from '@safsims/utils/Theme';
import { StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import AuthLayout from './components/AuthLayout';
import Text from '@safsims/components/Text/Text';

const ResetLinkScreen = () => {
  const { colors } = useTheme();
  const { height } = useWindowDimensions();
  return (
    <>
      <AuthLayout
        height={height - 200}
        title={'Send Reset Link'}
        subTitle={'Enter your email to send the reset link'}
        InputComponents={
          <>
            <AuthInput label="Email" text="some mail" onChange={(val) => {}} />

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
                  width: '50%',
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
                label="Send reset link"
                IconRight={<Icon name="send-2" size={20} color="#fff" />}
                fontStyle={{
                  fontSize: 16,
                  fontWeight: '500',
                }}
                style={{
                  height: 60,
                  width: '50%',
                }}
              />
            </View>
          </>
        }
      />
    </>
  );
};

export default ResetLinkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
});
