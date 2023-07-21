import { createStackNavigator } from '@react-navigation/stack';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import ConfirmPasswordResetScreen from '@safsims/screens/authentication-screens/ConfirmPasswordResetScreen';
import LoginScreen from '@safsims/screens/authentication-screens/LoginScreen';
import ResetLinkScreen from '@safsims/screens/authentication-screens/ResetLinkScreen';
import SelectSchoolScreen from '@safsims/screens/authentication-screens/SelectSchoolScreen';
import ParentSignUpScreen from '@safsims/screens/parent-screens/sign-up/ParentSignUpScreen';

const AuthStackScreens = () => {
  const AuthStack = createStackNavigator<any>();
  const selectedSchool = useAppSelector((state) => state.configuration.selectedSchool);

  return (
    <AuthStack.Navigator
      initialRouteName={selectedSchool ? 'Login' : 'SelectSchool'}
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="ParentSignUp" component={ParentSignUpScreen} />
      <AuthStack.Screen name="ConfirmPassword" component={ConfirmPasswordResetScreen} />
      <AuthStack.Screen name="ResetLink" component={ResetLinkScreen} />
      <AuthStack.Screen name="SelectSchool" component={SelectSchoolScreen} />
    </AuthStack.Navigator>
  );
};
export default AuthStackScreens;
