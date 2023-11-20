import { useNavigation, useTheme } from '@react-navigation/native';
import Button from '@safsims/components/Button/Button';
import Icon from '@safsims/components/Icon/Icon';
import { SendLink } from '@safsims/components/Images';
import Input from '@safsims/components/Input/Input';
import Text from '@safsims/components/Text/Text';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { lightTheme } from '@safsims/utils/Theme';
import { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import useResetLink from './hooks/useResetLink';

const ResetLinkScreen = () => {
  const { colors } = useTheme();
  const schoolInfo = useAppSelector((state) => state.configuration.selectedSchool);
  const navigation = useNavigation();
  const { loading, sendPasswordResetLink } = useResetLink();
  const [mail, setMail] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={
            schoolInfo?.logo ? { uri: schoolInfo?.logo } : require('../../../assets/logo-sm.png')
          }
        />
        <Text>{schoolInfo?.school_name || ''}</Text>
      </View>
      <SendLink />
      <Text style={{ marginVertical: 10 }} h1>
        Send Reset Link
      </Text>
      <Text>Enter your email to send the reset link</Text>
      <Input
        value={mail}
        onChange={(value) => setMail(value)}
        style={{ marginVertical: 40 }}
        label=""
        placeholder="Enter your email"
      />
      <Button
        onPress={() => {
          if (mail) {
            sendPasswordResetLink(mail);
          }
        }}
        isLoading={loading}
        label="Send reset link"
        IconRight={<Icon name="send-2" size={20} color="#fff" />}
        fontStyle={{
          fontSize: 16,
          fontWeight: '500',
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
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
    </View>
  );
};

export default ResetLinkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.colors.PrimaryWhite,
    alignItems: 'center',
    padding: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
  },
});
