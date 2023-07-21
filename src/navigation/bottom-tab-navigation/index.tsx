import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import Icon from '@safsims/components/Icon/Icon';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { Platform, useWindowDimensions } from 'react-native';
import FeesStackScreens from '../fees-stack-navigation/FeesStackNavigation';
import ParentHomeStackScreens from '../parent-home-stack-navigation/ParentHomeStackNavigation';
import ResultStackScreens from '../result-stack-navigation/ResultStackNavigation';

const Tab = createBottomTabNavigator();

const hideBottomTabRoutes = [
  'BankDetails',
  'BudgetDetails',
  'BudgetItem',
  'Notifications',
  'NotificationDetails',
  'CreateMarketList',
  'UseMarketList',
];

const BottomTabNavigation = ({ navigation }) => {
  const dimensions = useWindowDimensions();
  const { colors } = useTheme();

  const tabBarStyle = useAppSelector((state) => state.user.tabBarStyle);
  const theme = useAppSelector((state) => state.user?.theme);
  const isDark = theme === 'dark';
  const isAndroid = Platform.OS === 'android';

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // @ts-ignore
        tabBarStyle: {
          ...tabBarStyle,
          backgroundColor: colors.PrimaryWhite,
          borderTopColor: isDark ? colors.PrimaryBorderColor : '#BBB',
        },

        tabBarInactiveTintColor: colors.PrimaryFontColor,
        tabBarActiveTintColor: isDark ? '#448aff' : undefined,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <Icon name="grid-3" {...props} />,
        }}
        name="Home"
        component={ParentHomeStackScreens}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <Icon name="receipt-item" {...props} />,
        }}
        name="Fees"
        component={FeesStackScreens}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <Icon name="medal" {...props} />,
        }}
        name="Results"
        component={ResultStackScreens}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
