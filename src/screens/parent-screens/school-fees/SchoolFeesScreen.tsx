import { useTheme } from '@react-navigation/native';
import EmptyState from '@safsims/components/EmptyState/EmptyState';
import AppHeader from '@safsims/components/Header/AppHeader';
import Icon from '@safsims/components/Icon/Icon';
import { EmptyFees } from '@safsims/components/Images';
import Loader from '@safsims/components/Loader/Loader';
import Text from '@safsims/components/Text/Text';
import useCurrentTermGet from '@safsims/general-hooks/useCurrentTermGet';
import useLogAnalytics from '@safsims/general-hooks/useLogAnalytics';
import { BasicStudentInfo, StudentTermInvoiceSummaryDto } from '@safsims/generated';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import FeesAccordion from '@safsims/screens/parent-screens/school-fees/components/Accordion/FeesAccordion';
import { lightTheme } from '@safsims/utils/Theme';
import { useEffect, useMemo, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import useChildrenInvoiceSummariesGet from './hooks/useChildrenInvoiceSummariesGet';
import useTermAttendedByChildren from './hooks/useTermsAttendedByChildren';
import RecordBankPaymentModal from './modals/RecordBankPaymentModal';

export const calculateSummaryTotals = (summaries: StudentTermInvoiceSummaryDto[]) => {
  const totalOutstanding = summaries.reduce((t, a) => t + (a.invoice_summary?.balance || 0), 0);
  const totalPaid = summaries.reduce((t, a) => t + (a.invoice_summary?.amount_paid || 0), 0);
  const totalDiscount = summaries.reduce((t, a) => t + (a.invoice_summary?.discount || 0), 0);
  return { totalDiscount, totalPaid, totalOutstanding };
};

const SchoolFeesScreen = ({ navigation }) => {
  const { currentTerm } = useCurrentTermGet();
  const { logEvent } = useLogAnalytics();
  const [modalOPen, setModalOpen] = useState(false);
  const { colors } = useTheme();
  const user = useAppSelector((state) => state.user.parent!);
  const { linked_students } = user;

  const children = useMemo(() => linked_students?.map((child) => child.student), [linked_students]);
  const student_ids = useMemo(() => (children || []).map((item) => item?.id!), [children]);

  const { groupedTermsBySessions } = useTermAttendedByChildren({
    studentIds: student_ids || [],
  });

  const { invoiceSummaries, loading, refetchSummaries } = useChildrenInvoiceSummariesGet({
    studentIds: student_ids || [],
  });

  const [students, setStudents] = useState<(Partial<BasicStudentInfo> & { amount?: number })[]>([]);
  const [offlineTermId, setOfflineTermId] = useState<string>(currentTerm?.term_id || '');

  const handleOfflineRecord = (
    students: (Partial<BasicStudentInfo> & { amount?: number })[],
    termId: string,
  ) => {
    setStudents(students);
    setOfflineTermId(termId);
    setModalOpen(true);
  };

  useEffect(() => {
    logEvent('schoolFeesScreen');
    setStudents(
      invoiceSummaries
        .filter((item) => item.term?.term_id === currentTerm?.term_id)
        .map((item) => ({
          ...(item.invoice_summary?.student_info || {}),
          amount: item.invoice_summary?.balance || 0,
        }))
        .filter((item) => item.amount > 0),
    );
  }, [invoiceSummaries, currentTerm]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.PrimaryBackground }}>
      <AppHeader pageTitle="School Fees" navigation={navigation} />
      {loading ? (
        <Loader />
      ) : !invoiceSummaries.filter((item) => (item?.invoice_summary?.balance || 0) > 0).length ? (
        <EmptyState
          section
          Image={<EmptyFees />}
          title="Keeping it clean, nice!!!"
          info="There are currently no unpaid invoice"
        />
      ) : (
        <View style={{ flex: 1 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={() => refetchSummaries()} />
            }
          >
            <View style={[styles.banner]}>
              <View style={{ marginRight: 20 }}>
                <Icon name="bank" size={30} />
              </View>
              <View>
                <Text style={[styles.bannerHead]}>Record payments made outside the portal</Text>
                <Text style={[styles.bannerText]}>
                  By recording all payments (i.e., POS, Bank Transfer, USSD) made to the bank, the
                  school can easily track your payment without any inconvenience. Upload evidence of
                  payment by clicking the{' '}
                  <Text style={{ fontWeight: 'bold' }}>“Record payment”</Text> button
                </Text>

                <TouchableOpacity onPress={() => setModalOpen(true)} style={[styles.recordButton]}>
                  <Text style={{ color: '#FFF' }}>Record payment</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
              {Object.keys(groupedTermsBySessions).map((session, index) => {
                return (
                  <View key={index.toString()}>
                    {invoiceSummaries
                      .filter((item) => item.term?.session?.id === session)
                      .find((item) => (item.invoice_summary?.balance || 0) > 0) && (
                      <View key={index.toString()}>
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
                            (item?.invoice_summary?.balance || 0) > 0,
                        ),
                      )
                      .map((term, index) => {
                        const { totalDiscount, totalOutstanding, totalPaid } =
                          calculateSummaryTotals(
                            invoiceSummaries.filter((item) => item.term?.term_id === term.term_id),
                          );
                        return (
                          <>
                            <FeesAccordion
                              key={index.toString()}
                              handleOfflineRecord={handleOfflineRecord}
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
          </ScrollView>
        </View>
      )}

      <RecordBankPaymentModal
        termId={offlineTermId}
        students={students}
        isOpen={modalOPen}
        onClose={() => setModalOpen(false)}
      />
    </View>
  );
};

export default SchoolFeesScreen;

const styles = StyleSheet.create({
  banner: {
    padding: 20,
    backgroundColor: '#EEDEFE',
    marginBottom: 20,
    flexDirection: 'row',
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
});
