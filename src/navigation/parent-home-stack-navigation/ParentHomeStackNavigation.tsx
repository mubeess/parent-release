import { createStackNavigator } from '@react-navigation/stack';
import ParentDashboardScreen from '@safsims/screens/parent-screens/dashboard/ParentDashboardScreen';
import ProfileScreen from '@safsims/screens/parent-screens/profile/ProfileScreen';
import useTabBarDisplay from '@safsims/utils/useTabBarDisplay/useTabBarDisplay';

const ParentHomeStackScreens = () => {
  const ParentHomeStack = createStackNavigator<any>();

  const { checkTabBar } = useTabBarDisplay();

  return (
    <ParentHomeStack.Navigator
      initialRouteName="ParentDashboard"
      screenOptions={{ headerShown: false }}
      screenListeners={{
        state: (e) => checkTabBar(e),
      }}
    >
      <ParentHomeStack.Screen name="ParentDashboard" component={ParentDashboardScreen} />
      <ParentHomeStack.Screen name="Profile" component={ProfileScreen} />
    </ParentHomeStack.Navigator>
  );
};
export default ParentHomeStackScreens;
