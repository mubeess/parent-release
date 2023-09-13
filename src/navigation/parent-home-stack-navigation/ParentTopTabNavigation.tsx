import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActivityFeeds from '@safsims/screens/parent-screens/activity-feeds/ActivityFeeds';
import Chats from '@safsims/screens/parent-screens/chats/Chats';
import { lightTheme } from '@safsims/utils/Theme';
import CustomTabBar from './components/CustomTabBar';

const Tab = createMaterialTopTabNavigator();

export default function ParentTopTabNavigation() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarIndicatorStyle: {
          borderColor: lightTheme.colors.PrimaryColor,
          borderWidth: 1,
        },
        tabBarLabelStyle: {
          textTransform: 'capitalize',
        },
      }}
    >
      <Tab.Screen name="Activity feeds" component={ActivityFeeds} />
      <Tab.Screen name="Chats" component={Chats} />
    </Tab.Navigator>
  );
}
