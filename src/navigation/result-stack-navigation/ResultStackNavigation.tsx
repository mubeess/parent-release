import { createStackNavigator } from '@react-navigation/stack';
import ChildResultScreen from '@safsims/screens/parent-screens/results/ChildResultScreen';
import ResulDetailsScreen from '@safsims/screens/parent-screens/results/ResulDetailsScreen';
import useTabBarDisplay from '@safsims/utils/useTabBarDisplay/useTabBarDisplay';

const ResultStackScreens = () => {
  const ResultStack = createStackNavigator<any>();
  const { checkTabBar } = useTabBarDisplay();

  return (
    <ResultStack.Navigator
      initialRouteName="ResultList"
      screenOptions={{ headerShown: false }}
      screenListeners={{
        state: (e) => checkTabBar(e),
      }}
    >
      <ResultStack.Screen name="ResultList" component={ChildResultScreen} />
      <ResultStack.Screen name="ResultDetails" component={ResulDetailsScreen} />
    </ResultStack.Navigator>
  );
};
export default ResultStackScreens;
