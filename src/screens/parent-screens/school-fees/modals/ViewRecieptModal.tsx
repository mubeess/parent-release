import { useTheme } from '@react-navigation/native';
import Currency from '@safsims/components/Currency/Currency';
import Icon from '@safsims/components/Icon/Icon';
// import Modal from '@safsims/components/Modal/Modal';
import SafeAreaComponent from '@safsims/components/SafeAreaComponent/SafeAreaComponent';
import Text from '@safsims/components/Text/Text';
import { PaymentReceiptDto } from '@safsims/generated';
import { lightTheme } from '@safsims/utils/Theme';
import moment from 'moment';
import { Dimensions, Modal, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import TableRow from '../components/Table/TableRow';

interface IProps {
  isOpen?: boolean;
  onClose: () => void;
  receipt: PaymentReceiptDto | undefined;
}
const { height } = Dimensions.get('window');
const ViewRecieptModal = ({ isOpen = false, onClose, receipt }: IProps) => {
  const { colors } = useTheme();
  const student = receipt?.student_info;

  return (
    <Modal visible={isOpen} animationType="none">
      <View style={{ flex: 1 }}>
        <SafeAreaComponent />
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <View>
              <Text>Child's name</Text>
              <Text h2>
                {student?.first_name} {student?.other_names || ''} {student?.last_name}
              </Text>
            </View>
            <TouchableOpacity onPress={onClose} activeOpacity={0.7} style={styles.print}>
              <Icon name="close-circle" size={20} color={colors.PrimaryFontColor} />
            </TouchableOpacity>
          </View>

          <View style={styles.subHead}>
            <View
              style={{
                borderRightColor: colors.PrimaryBorderColor,
                borderRightWidth: 1,
                padding: 20,
              }}
            >
              <Text style={styles.title}>CLASS</Text>
              <Text style={styles.value} h3>
                {student?.class_level_name} {student?.arm_name}
              </Text>
            </View>

            <View style={styles.detail}>
              <Text style={styles.title}>SESSION</Text>
              <Text style={styles.value} h3>
                {receipt?.term?.session?.name}
              </Text>
            </View>

            <View style={styles.detail}>
              <Text style={styles.title}>TERM</Text>
              <Text style={styles.value} h3>
                {receipt?.term?.school_term_definition?.name}
              </Text>
            </View>
          </View>
          <View style={styles.contentTable}>
            <View style={styles.tableHeader}>
              <Text style={styles.headerItemName}>ITEM</Text>
              <Text style={{ ...styles.headerItem, width: '10%' }}>QTY</Text>
              <Text style={{ ...styles.headerItem, width: '25%' }}>UNIT PRICE</Text>
              <Text style={{ ...styles.headerItem, width: '25%' }}>AMOUNT</Text>
            </View>
            {receipt?.student_bill_data?.student_bill?.map((item) => (
              <TableRow
                key={item.payable_item?.id}
                itemName={item?.payable_item?.name}
                quantity={item?.quantity || 1}
                price={(item?.quantity || 1) * (item?.unit_price || 0)}
              />
            ))}
          </View>
          <View style={styles.divider}></View>
          <View style={styles.transaction}>
            <Text>Transaction ID</Text>
            <Text style={styles.transactionDetail}>{receipt?.transaction_id}</Text>
            <Text>Payment Method</Text>
            <Text style={styles.transactionDetail}>{receipt?.payment_method}</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.paymentDate}>
            <View
              style={{
                borderRightColor: colors.PrimaryBorderColor,
                borderRightWidth: 1,
                padding: 20,
                width: '50%',
              }}
            >
              <Text style={styles.title}>PAYMENT DATE</Text>
              <Text style={styles.value} h3>
                {moment(receipt?.payment_date).format('YYYY-MM-DD')}
              </Text>
            </View>

            <View style={{ padding: 20 }}>
              <Text style={styles.title}>OUTSTANDING BALANCE</Text>
              <Text style={{ ...styles.value, color: colors.PrimaryRed }} h3>
                <Currency amount={receipt?.outstanding_balance || 0} />
              </Text>
            </View>
          </View>
          <View style={styles.total}>
            <View>
              <Text style={styles.title}>TOTAL AMOUNT PAID</Text>
              <Text style={{ color: colors.PrimaryColor }} h1>
                <Currency amount={receipt?.amount_paid || 0} />
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ViewRecieptModal;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    overflow: 'scroll',
    borderRadius: 4,
  },
  header: {
    flexDirection: 'row',
    height: 100,
    padding: 20,
    justifyContent: 'space-between',
    width: '100%',
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
  },
  print: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
  },
  subHead: {
    width: '100%',

    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 12,
  },
  value: {
    fontSize: 14,
  },
  detail: {
    padding: 20,
  },
  contentTable: {
    width: '100%',
    minHeight: 40,
    backgroundColor: lightTheme.colors.PrimaryWhite,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    paddingHorizontal: 10,
  },
  tableHeader: {
    width: '100%',
    height: 40,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  headerItem: {
    fontSize: 12,
  },
  headerItemName: {
    width: '40%',
    fontSize: 12,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: lightTheme.colors.PrimaryBorderColor,
    marginTop: 20,
  },
  transaction: {
    padding: 20,
  },
  transactionDetail: {
    marginVertical: 10,
    color: '#6b778d',
  },
  paymentDate: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
  },
  total: {
    paddingHorizontal: 20,
    alignItems: 'flex-end',
    paddingVertical: 20,
  },
});
