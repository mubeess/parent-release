import Avatar from '@safsims/components/Avatar/Avatar';
import AppHeader from '@safsims/components/Header/AppHeader';
import { FeesLine, InvoiceLine, PaymentLine, ResultLine } from '@safsims/components/Images';
import SafeAreaComponent from '@safsims/components/SafeAreaComponent/SafeAreaComponent';
import Text from '@safsims/components/Text/Text';

import useCurrentTermGet from '@safsims/general-hooks/useCurrentTermGet';
import useLogAnalytics from '@safsims/general-hooks/useLogAnalytics';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { lightTheme } from '@safsims/utils/Theme';
import { useEffect, useMemo } from 'react';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { View } from 'react-native-ui-lib';
import useBulkPayment from '../school-fees/hooks/useBulkPayment';
import MenuItem from './components/MenuItem';
import PaymentOverview from './components/PaymentOverview';
const ParentDashboardScreen = ({ navigation }) => {
  const user = useAppSelector((state) => state.user.parent);
  const schoolInfo = useAppSelector((state) => state.configuration.selectedSchool);
  const { currentTerm } = useCurrentTermGet();
  // const currentTerm = useAppSelector((state) => state.configuration.currentTerm);

  // const currentTerm = useAppSelector((state) => state.configuration.currentTerm);
  const { logEvent } = useLogAnalytics();
  const linked_students = user?.linked_students;

  const parentChildren = useMemo(
    () => (linked_students || [])?.map((child) => child.student!),
    [linked_students],
  );

  const student_ids = useMemo(() => parentChildren.map((item) => item.id || ''), [parentChildren]);

  const { bulkCheckout, loading, refetch } = useBulkPayment({
    studentIds: student_ids,
    termId: currentTerm?.term_id,
  });

  const outstandingAmount = bulkCheckout.map((item) => item.total_balance || 0);
  const total_amount = outstandingAmount.reduce((a, b) => a + b, 0);

  useEffect(() => {
    logEvent('parentDashboard');
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.container}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={refetch} />}
      >
        <SafeAreaComponent />
        <AppHeader navigation={navigation} pageTitle="Dashboard" />
        <View style={styles.content}>
          <View style={styles.schoolInfo}>
            <Avatar image={schoolInfo?.logo} isSchool style={{ marginRight: 10 }} />

            <View>
              <Text h3>{schoolInfo?.school_name}</Text>
              <Text>{schoolInfo?.motto}</Text>
            </View>
          </View>

          <PaymentOverview amount={total_amount} navigation={navigation} />
        </View>
        <View style={styles.menus}>
          <View style={styles.menuList}>
            <MenuItem
              onPress={() => navigation.navigate('Fees')}
              BgLine={<FeesLine />}
              icon="receipt-item"
              title="Fees"
            />
            <MenuItem
              BgLine={<ResultLine />}
              bgColor="rgba(239, 126, 35, 0.9)"
              icon="medal"
              title="Results"
              onPress={() => navigation.navigate('Results')}
            />
          </View>
          <View style={styles.menuList}>
            <MenuItem
              bgColor="rgba(44, 218, 157, 0.9)"
              BgLine={<PaymentLine />}
              icon="layer"
              title="PAYMENT
            HISTORY"
              onPress={() =>
                navigation.navigate('Fees', {
                  screen: 'PaymentHistory',
                })
              }
            />
            <MenuItem
              BgLine={<InvoiceLine />}
              bgColor="rgba(242, 192, 46, 0.9)"
              icon="stickynote"
              title="Invoice
            HISTORY"
              onPress={() =>
                navigation.navigate('Fees', {
                  screen: 'InvoiceHistory',
                })
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: lightTheme.colors.PrimaryBackground,
  },
  schoolInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
  },
  content: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  menus: {
    flex: 1,
    backgroundColor: '#F5F5F7',
    paddingHorizontal: 20,
  },
  menuList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default ParentDashboardScreen;
