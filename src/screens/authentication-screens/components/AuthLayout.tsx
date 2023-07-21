import { useTheme } from '@react-navigation/native';
import SafeAreaComponent from '@safsims/components/SafeAreaComponent/SafeAreaComponent';
import useSchoolInfoGet from '@safsims/general-hooks/useSchoolInfoGet';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { lightTheme } from '@safsims/utils/Theme';
import moment from 'moment';
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface IProps {
  title: string;
  subTitle?: string;
  InputComponents?: any;
  ButtonComponents?: any;
  height?: any;
}

const AuthLayout = ({ title, InputComponents, ButtonComponents, height, subTitle }: IProps) => {
  // const { schoolInfo } = useSchoolInfoGet();
  const { colors } = useTheme();
  const dimension = useWindowDimensions();
  const schoolInfo = useAppSelector((state) => state.configuration.selectedSchool);
  useSchoolInfoGet();
  return (
    <View style={styles.container}>
      <SafeAreaComponent />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            backgroundColor: colors.PrimaryBackground,
            width: '100%',
            flexDirection: 'column',
            height: height || dimension.height,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Image
              source={
                schoolInfo?.logo
                  ? { uri: schoolInfo?.logo }
                  : require('../../../../assets/logo-sm.png')
              }
            />
            <Image
              style={{
                height: 70,
                width: 70,
                borderRadius: 35,
                borderWidth: 1,
                borderColor: colors.PrimaryBorderColor,
              }}
              resizeMode="contain"
              source={
                schoolInfo?.logo
                  ? { uri: schoolInfo?.logo }
                  : require('../../../../assets/logo-sm.png')
              }
            />
          </View>

          <View>
            <Text
              style={{
                fontSize: 40,
                marginBottom: subTitle ? 0 : 30,
                color: colors.PrimaryFontColor,
              }}
            >
              {title}
            </Text>
            {subTitle && <Text style={{ marginBottom: 30 }}>{subTitle}</Text>}

            {InputComponents}
          </View>

          {ButtonComponents && <View>{ButtonComponents}</View>}

          <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Text style={{ marginRight: 10 }}>Help</Text>
            <Text>Privacy Policy</Text>
          </View>
        </View>

        <View style={{ marginTop: 40 }}>
          <Text style={{ color: colors.SafsimsBlue }}>Version 0.1.14</Text>
          <Text style={{ color: colors.SafsimsBlue }}>
            Copyright © {moment().format('YYYY')}{' '}
            <Text style={{ fontWeight: 'bold' }}>Flexisaf Edusoft Limited</Text>. All rights
            reserved.
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
});
