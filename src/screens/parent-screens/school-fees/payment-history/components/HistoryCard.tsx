import { useTheme } from '@react-navigation/native';
import Avatar from '@safsims/components/Avatar/Avatar';
import Button from '@safsims/components/Button/Button';
import Currency from '@safsims/components/Currency/Currency';
import Tag from '@safsims/components/Tag/Tag';
import Text from '@safsims/components/Text/Text';
import { SchoolFeesTransactionDto } from '@safsims/generated';
import moment from 'moment';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface IProps {
  transaction: SchoolFeesTransactionDto;
  handleRetry: (transaction: SchoolFeesTransactionDto) => void;
  handleReciept: (id: string) => void;
  loading?: boolean;
}

const HistoryCard = ({ transaction, handleRetry, handleReciept, loading }: IProps) => {
  const { colors } = useTheme();
  const student = transaction?.student;
  const term = transaction?.term;

  return (
    <View
      style={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.PrimaryBorderColor,
        // backgroundColor: colors.PrimaryWhite,
        marginBottom: 20,
      }}
    >
      <View style={[styles.cardHeader, { borderColor: colors.PrimaryBorderColor }]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar image={student?.profile_picture} />

          <Text style={{ marginLeft: 5, color: colors.PrimaryFontColor }}>
            {student?.first_name} {student?.last_name}
          </Text>
        </View>

        {transaction.payment_status === 'PENDING' ? (
          <Tag title="PENDING" color={colors.PrimaryOrange} />
        ) : transaction.payment_status === 'SUCCESSFUL' ? (
          <Tag title="SUCCESSFUL" color={colors.PrimaryGreen} />
        ) : (
          <Tag title="FAILED" color={colors.PrimaryRed} />
        )}
      </View>
      <View
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderColor: colors.PrimaryBorderColor,
        }}
      >
        <View>
          <Text style={{ textTransform: 'uppercase', color: colors.PrimaryFontColor }}>
            Reference number
          </Text>
          <Text style={{ color: colors.PrimaryFontColor }}>{transaction.id}</Text>
        </View>

        <View style={{ marginTop: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ textTransform: 'uppercase', color: colors.PrimaryFontColor }}>
              Term- session
            </Text>
            <Text style={{ color: colors.PrimaryFontColor }}>
              {term?.term_name} - {term?.session_id}
            </Text>
          </View>
          <View>
            <Text style={{ textTransform: 'uppercase', color: colors.PrimaryFontColor }}>
              Amount
            </Text>
            <Text style={{ color: colors.PrimaryFontColor }}>
              <Currency amount={transaction?.amount} />
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={{ textTransform: 'uppercase', color: colors.PrimaryFontColor }}>Date</Text>
          <Text style={{ color: colors.PrimaryFontColor }}>
            {' '}
            {moment(transaction.payment_date).format('llll')}
          </Text>
        </View>
      </View>
      <View style={styles.bottom}>
        {transaction.payment_status === 'SUCCESSFUL' && (
          <Button
            style={{ width: '50%' }}
            onPress={() => handleReciept(transaction?.id!)}
            isLoading={loading}
            label="View receipt"
            pale
          />

          // <TouchableOpacity
          //   style={[styles.button, { borderColor: colors.PrimaryFontColor }]}
          // >
          //   <Text style={{ color: colors.PrimaryFontColor }}>View receipt</Text>
          // </TouchableOpacity>
        )}
        {transaction.payment_status === 'PENDING' && (
          <TouchableOpacity
            onPress={() => handleRetry(transaction)}
            style={[styles.button, { borderColor: colors.PrimaryFontColor }]}
          >
            <Text style={{ color: colors.PrimaryFontColor }}>Retry payment</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
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
});
