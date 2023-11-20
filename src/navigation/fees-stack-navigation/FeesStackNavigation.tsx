import { createStackNavigator } from '@react-navigation/stack';
import AllChildrenPaymentScreen from '@safsims/screens/parent-screens/school-fees/AllChildrenPaymentScreen';
import ChildInvoiceScreen from '@safsims/screens/parent-screens/school-fees/ChildInvoiceScreen';
import InvoiceHistoryScreen from '@safsims/screens/parent-screens/school-fees/invoice-history/InvoiceHistoryScreen';
// import InvoiceHistoryScreen from '@safsims/screens/parent-screens/school-fees/invoice-history/InvoiceHistoryScreen';
import PaymentHistoryScreen from '@safsims/screens/parent-screens/school-fees/payment-history/PaymentHistoryScreen';
import SchoolFeesScreen from '@safsims/screens/parent-screens/school-fees/SchoolFeesScreen';
import useTabBarDisplay from '@safsims/utils/useTabBarDisplay/useTabBarDisplay';

const FeesStackScreens = () => {
  const FeesStack = createStackNavigator<any>();

  const { checkTabBar } = useTabBarDisplay();

  return (
    <FeesStack.Navigator
      initialRouteName="FeesHome"
      screenOptions={{ headerShown: false }}
      screenListeners={{
        state: (e) => checkTabBar(e),
      }}
    >
      <FeesStack.Screen name="FeesHome" component={SchoolFeesScreen} />
      <FeesStack.Screen name="PaymentHistory" component={PaymentHistoryScreen} />
      <FeesStack.Screen name="InvoiceHistory" component={InvoiceHistoryScreen} />
      <FeesStack.Screen name="ChildInvoice" component={ChildInvoiceScreen} />
      <FeesStack.Screen name="AllChildrenPayment" component={AllChildrenPaymentScreen} />
    </FeesStack.Navigator>
  );
};
export default FeesStackScreens;
