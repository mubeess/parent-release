import { useTheme } from '@react-navigation/native';
import Checkbox from '@safsims/components/Checkbox/Checkbox';
import EmptyState from '@safsims/components/EmptyState/EmptyState';
import AppHeader from '@safsims/components/Header/AppHeader';
import { ArrowLeftIcon, EmptyFees } from '@safsims/components/Images';
import Loader from '@safsims/components/Loader/Loader';
import Select from '@safsims/components/Select/Select';
import Text from '@safsims/components/Text/Text';
import useCurrentTermGet from '@safsims/general-hooks/useCurrentTermGet';
import useGroupTermsBySessions from '@safsims/general-hooks/useGroupTermsBySessions';
import useLogAnalytics from '@safsims/general-hooks/useLogAnalytics';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { lightTheme } from '@safsims/utils/Theme';
import { useEffect, useMemo, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { calculateSummaryTotals } from '../SchoolFeesScreen';
import FeesAccordion from '../components/Accordion/FeesAccordion';
import useChildrenInvoiceSummariesGet from '../hooks/useChildrenInvoiceSummariesGet';
import useTermAttendedByChildren from '../hooks/useTermsAttendedByChildren';

const InvoiceHistoryScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { logEvent } = useLogAnalytics();

  const { currentTerm } = useCurrentTermGet();

  const user = useAppSelector((state) => state.user.parent);
  const { linked_students } = user!;
  const children = useMemo(() => linked_students?.map((child) => child.student), [linked_students]);
  const student_ids = useMemo(() => (children || []).map((item) => item!.id!), [children]);

  const { groupedTermsBySessions } = useTermAttendedByChildren({
    studentIds: student_ids || [],
  });

  const { invoiceSummaries, loading, refetchSummaries } = useChildrenInvoiceSummariesGet({
    studentIds: student_ids || [],
  });
  const { sessionValue, setSessionValue } = useGroupTermsBySessions({});
  const [showAll, setShowAll] = useState<boolean>(true);

  const sessionArray = Object.keys(groupedTermsBySessions).filter((session) =>
    sessionValue ? sessionValue?.label === session : true,
  );

  const checkNotEmpty = () => {
    const session = sessionValue?.label || '';
    const arr = invoiceSummaries.filter(
      (item) => item.term?.session?.id === session && (item.invoice_summary?.balance || 0) <= 0,
    );
    return !sessionValue ? true : arr.length > 0 ? true : false;
  };
  useEffect(() => {
    logEvent('invoiceScreen');
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: colors.PrimaryBackground }}>
      <AppHeader navigation={navigation} pageTitle="Invoice History" />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Fees', {
            screen: 'FeesHome',
          })
        }
        style={styles.back}
      >
        <ArrowLeftIcon />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={() => refetchSummaries()} />
          }
        >
          <View style={[styles.banner]}>
            <Select
              style={{ width: 200 }}
              placeholder="Select session"
              value={sessionValue}
              options={Object.keys(groupedTermsBySessions).map((item) => ({
                label: item,
                value: groupedTermsBySessions[item],
              }))}
              onChange={(e) => {
                setSessionValue(e);
                setShowAll(false);
              }}
            />

            <View style={{ flexDirection: 'row', marginLeft: 20 }}>
              <Checkbox
                style={styles.check}
                value={showAll}
                onValueChange={() => {
                  const val = !showAll;
                  setShowAll(val);
                  if (val) {
                    setSessionValue(null);
                  }
                }}
                color={colors.PrimaryColor}
              />
              <Text>Show all</Text>
            </View>
          </View>
          {loading ? (
            <Loader section />
          ) : invoiceSummaries.length > 0 && sessionArray?.length > 0 && checkNotEmpty() ? (
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
              {sessionArray.map((session) => {
                return (
                  <View>
                    {invoiceSummaries
                      .filter((item) => item.term?.session?.id === session)
                      .find((item) => (item.invoice_summary?.balance || 0) <= 0) && (
                      <View>
                        <Text
                          style={{
                            marginTop: 10,
                            marginBottom: 20,
                          }}
                        >
                          {session}
                        </Text>
                      </View>
                    )}
                    {groupedTermsBySessions[session]
                      .filter((term) =>
                        invoiceSummaries.find(
                          (item) =>
                            item.term?.term_id === term.term_id &&
                            (item?.invoice_summary?.balance || 0) <= 0,
                        ),
                      )
                      .map((term) => {
                        const { totalDiscount, totalOutstanding, totalPaid } =
                          calculateSummaryTotals(
                            invoiceSummaries.filter((item) => item.term?.term_id === term.term_id),
                          );
                        return (
                          <>
                            <FeesAccordion
                              hideButton
                              term={term}
                              navigation={navigation}
                              outstandingAmount={totalOutstanding}
                              discount={totalDiscount}
                              paidAmount={totalPaid}
                              children={invoiceSummaries
                                .filter((item) => item.term?.term_id === term.term_id)
                                .sort((a, b) =>
                                  (a.invoice_summary?.student_info?.first_name || '').localeCompare(
                                    b.invoice_summary?.student_info?.first_name || '',
                                  ),
                                )}
                            />
                          </>
                        );
                      })}
                  </View>
                );
              })}
            </View>
          ) : (
            <EmptyState
              section
              Image={<EmptyFees />}
              title="No Paid Invoices"
              info={`There are no paid invoices${sessionValue && ' for the selected date'}.`}
            />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default InvoiceHistoryScreen;

const styles = StyleSheet.create({
  banner: {
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerHead: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  bannerText: {
    maxWidth: '95%',
  },
  recordButton: {
    marginTop: 10,
    borderRadius: 3,
    backgroundColor: lightTheme.colors.PrimaryFontColor,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
  check: {
    height: 18,
    width: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginRight: 10,
    elevation: 5,
  },
  back: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 40,
  },
});
