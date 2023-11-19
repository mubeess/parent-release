import { useTheme } from '@react-navigation/native';
import Button from '@safsims/components/Button/Button';
import DatePicker from '@safsims/components/DatePicker/DatePicker';
import EmptyState from '@safsims/components/EmptyState/EmptyState';
import AppHeader from '@safsims/components/Header/AppHeader';
import Icon from '@safsims/components/Icon/Icon';
import { ArrowLeftIcon, EmptyFees } from '@safsims/components/Images';
import InfiniteScrollView from '@safsims/components/InfiniteScrollView/InfiniteScrollView';
import Loader from '@safsims/components/Loader/Loader';
import Select, { ISelectOptionType } from '@safsims/components/Select/Select';
import Text from '@safsims/components/Text/Text';
import { SchoolFeesTransactionDto } from '@safsims/generated';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { lightTheme } from '@safsims/utils/Theme';
import moment from 'moment';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import useSingleReceiptFetch from '../hooks/useSingleReceiptFetch';
import useTransactionsByParentFetch from '../hooks/useTransactionsByParentFetch';
import RetryTransactionModal from '../modals/RetryTransactionModal';
import ViewRecieptModal from '../modals/ViewRecieptModal';
import HistoryCard from './components/HistoryCard';

const STATUS_OPTION = [
  { value: null, label: 'All' },
  { value: 'SUCCESSFUL', label: 'Successful' },
  { value: 'PENDING', label: 'Pending' },
  { value: 'FAILED', label: 'Failed' },
];

const PaymentHistoryScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const user = useAppSelector((state) => state.user.currentUser);
  const schoolInfo = useAppSelector((state) => state.configuration.schoolInfo);
  const currentTerm = useAppSelector((state) => state.configuration.currentTerm);
  const photo = schoolInfo?.basic_school_information_dto?.logo;
  const schoolName = schoolInfo?.basic_school_information_dto?.school_name;

  const [status, setStatus] = useState<ISelectOptionType>({
    value: 'SUCCESSFUL',
    label: 'Successful',
  });
  const [activeTransaction, setActiveTransaction] = useState<SchoolFeesTransactionDto | undefined>(
    undefined,
  );

  const [fetchId, setFetchId] = useState<string | undefined>(undefined);
  const {
    receipt,
    loading: loadingReceipt,
    setReceipt,
  } = useSingleReceiptFetch({
    id: fetchId,
  });

  const [showReceipt, setShowReceipt] = useState<boolean>(false);
  const [retry, setRetry] = useState<boolean>(false);

  const viewReceipt = (id: string) => {
    setFetchId(id);
    setShowReceipt(true);
  };

  const handleRetry = (transaction: SchoolFeesTransactionDto) => {
    setActiveTransaction(transaction);
    setRetry(true);
  };

  const [dateData, setDateData] = useState<any>([undefined, moment()]);

  const filterParams = {
    parentId: user?.parent_id,
  };

  if (dateData[0] && dateData[1] && dateData[1] > dateData[0]) {
    filterParams.min = dateData[0];
    filterParams.max = dateData[1];
  }

  if (status?.value) {
    filterParams.status = status.value;
  }

  const { loading, transactions, refetchTransactions, infiniteScrollCallback } =
    useTransactionsByParentFetch(filterParams);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const { height } = useWindowDimensions();

  return (
    <>
      <View style={{ flex: 1, backgroundColor: colors.PrimaryBackground, position: 'relative' }}>
        <AppHeader navigation={navigation} pageTitle="Payment History" />
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
          <View style={styles.filters}>
            <Button
              onPress={() => {
                setStatus({ value: 'SUCCESSFUL', label: 'Successful' });
              }}
              fontStyle={{ color: '#000', fontSize: 16 }}
              style={{
                ...styles.filterButtons,
                backgroundColor:
                  status.value == 'SUCCESSFUL' ? lightTheme.colors.PrimaryWhite : 'transparent',
              }}
              label="Successful"
            />
            <Button
              onPress={() => {
                setStatus({ value: null, label: 'All' });
              }}
              fontStyle={{ color: '#000', fontSize: 16 }}
              style={{
                ...styles.filterButtons,
                backgroundColor:
                  status.value == null ? lightTheme.colors.PrimaryWhite : 'transparent',
              }}
              label="All"
            />
          </View>

          <InfiniteScrollView
            fetching={loading}
            callback={infiniteScrollCallback}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
          >
            <TouchableOpacity
              onPress={() => setShowFilters((prev) => !prev)}
              style={{
                paddingHorizontal: 20,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginTop: 20,
              }}
            >
              <Icon name="filter" color={colors.PrimaryColor} />
              <Text style={{ marginLeft: 10, color: colors.PrimaryColor }}>
                {showFilters ? 'Hide filters' : 'Filter list'}
              </Text>
            </TouchableOpacity>

            {showFilters && (
              <>
                <View
                  style={{
                    borderTopWidth: 1,
                    borderColor: colors.PrimaryBorderColor,
                    padding: 20,
                    marginVertical: 20,
                  }}
                >
                  <Text style={{ textTransform: 'uppercase' }}>Select Range</Text>
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <DatePicker
                      label="Start"
                      style={{ width: '100%' }}
                      value={dateData[0]}
                      onChange={(val) => setDateData((prev) => [val, prev[1]])}
                    />
                    <DatePicker
                      label="End"
                      style={{ width: '100%' }}
                      value={dateData[1]}
                      onChange={(val) => setDateData((prev) => [prev[0], val])}
                    />
                  </View>
                </View>
                <View
                  style={{
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderColor: colors.PrimaryBorderColor,
                    padding: 20,
                    marginVertical: 20,
                  }}
                >
                  <Select
                    placeholder="Select status"
                    options={STATUS_OPTION}
                    onChange={(e) => setStatus(e)}
                    label="status"
                  />
                </View>
              </>
            )}

            {loading ? (
              <Loader style={{ marginVertical: '50%' }} />
            ) : !transactions.length ? (
              <EmptyState
                section
                Image={<EmptyFees />}
                title="No Transactions"
                info="There are no transactions for the selected date."
              />
            ) : (
              <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 20 }}>
                {transactions.map((item, index) => (
                  <HistoryCard
                    handleRetry={handleRetry}
                    handleReciept={viewReceipt}
                    transaction={item}
                    key={`${item.id || ''}` + index}
                    loading={loadingReceipt && fetchId === item.id}
                  />
                ))}
              </View>
            )}
          </InfiniteScrollView>
        </View>

        <RetryTransactionModal
          isOpen={retry}
          onClose={() => setRetry(false)}
          transaction={activeTransaction}
          callback={refetchTransactions}
        />
      </View>
      <ViewRecieptModal
        isOpen={showReceipt && !!receipt}
        receipt={receipt}
        onClose={() => {
          setShowReceipt(false);
          setReceipt(undefined);
        }}
      />
    </>
  );
};

export default PaymentHistoryScreen;

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 20,
    borderBottomWidth: 0.5,
  },
  bottom: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filters: {
    width: '70%',
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eaeff6',
    borderRadius: 10,
    paddingVertical: 5,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryFadedBlue,
  },
  filterButtons: {
    width: '45%',
    backgroundColor: 'transparent',

    borderRadius: 10,
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
