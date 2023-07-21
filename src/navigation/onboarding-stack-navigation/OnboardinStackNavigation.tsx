import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '@safsims/screens/onboarding-screens/OnboardingScreen';

const OnboardingStackScreens = () => {
  const OnboardingStack = createStackNavigator<any>();
  return (
    <OnboardingStack.Navigator
      initialRouteName="OnboardingHome"
      screenOptions={{ headerShown: false }}
    >
      <OnboardingStack.Screen name="OnboardingHome" component={OnboardingScreen} />
    </OnboardingStack.Navigator>
  );
};
export default OnboardingStackScreens;
