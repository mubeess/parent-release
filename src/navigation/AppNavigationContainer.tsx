import { NavigationContainer } from '@react-navigation/native';
import NewAppUpdateModal from '@safsims/components/updates/NewAppUpdateModal';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { updateAppUserState } from '@safsims/redux/users/actions';
import { darkTheme, lightTheme } from '@safsims/utils/Theme';
import { useCallback, useEffect } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import CodePush from 'react-native-code-push';
import 'react-native-gesture-handler';
import { ThemeManager } from 'react-native-ui-lib';
import { useDispatch } from 'react-redux';
import AppStackScreens from './AppStackScreen';
import AuthStackScreens from './auth-stack-navigation/AuthStackNavigation';
import OnboardingStackScreens from './onboarding-stack-navigation/OnboardinStackNavigation';
const codePushOptions = { checkFrequesncy: CodePush.CheckFrequency.ON_APP_RESUME };
const AppNavigationContainer = () => {
  const dispatch = useDispatch();
  const theme = useAppSelector((state) => state.user?.theme);
  const token = useAppSelector((state) => state.user?.access_token);
  const onboarded = useAppSelector((state) => state.user.onboarded);
  const setTheme = (theme: ColorSchemeName) => {
    dispatch(
      updateAppUserState({
        theme: theme || 'light',
      }),
    );
  };

  const themeChangeListener = useCallback(() => {
    setTheme(Appearance.getColorScheme());
  }, []);

  useEffect(() => {
    const event = Appearance.addChangeListener(themeChangeListener);
    return () => event.remove();
  }, [themeChangeListener]);

  ThemeManager.setComponentTheme('Text', (props: any, context: any) => {
    return {
      // this will apply a different backgroundColor
      // depending on whether the Button has an outline or not
      //fontFamily: props.font ? "Nunito-Regular" : "",
    };
  });

  // const colorScheme = useColorScheme();

  return (
    <>
      <NewAppUpdateModal />
      <NavigationContainer
        // @ts-ignore
        theme={theme === 'dark' ? darkTheme : lightTheme}
      >
        {token ? (
          <AppStackScreens />
        ) : (
          <>{onboarded ? <AuthStackScreens /> : <OnboardingStackScreens />}</>
        )}
      </NavigationContainer>
    </>
  );
};

export default CodePush(codePushOptions)(AppNavigationContainer);
