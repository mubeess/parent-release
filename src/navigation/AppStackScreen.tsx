import { createStackNavigator } from '@react-navigation/stack';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import BottomTabNavigation from './bottom-tab-navigation';

const AppStackScreens = () => {
  const AppStack = createStackNavigator<any>();
  const accessToken = useAppSelector((state) => state.user.access_token);
  const hasOnboarded = useAppSelector((state) => state.user.onboarded);

  return (
    <AppStack.Navigator
      // initialRouteName={hasOnboarded ? 'Main' : 'Onboarding'}
      initialRouteName={'Main'}
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen name="Main" component={BottomTabNavigation} />
    </AppStack.Navigator>
  );
};
export default AppStackScreens;
