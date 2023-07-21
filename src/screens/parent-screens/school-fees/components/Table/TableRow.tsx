import Currency from '@safsims/components/Currency/Currency';
import Text from '@safsims/components/Text/Text';
import { lightTheme } from '@safsims/utils/Theme';
import { StyleSheet, View } from 'react-native';
interface TableRowProps {
  itemName?: string;
  quantity: number;
  price?: number;
}
export default function TableRow({ itemName = '', quantity = 0, price = 0 }: TableRowProps) {
  return (
    <View style={styles.tableHeader}>
      <Text style={styles.headerItemName}>{itemName}</Text>
      <Text style={{ ...styles.headerItem, width: '10%' }}>{`${quantity}`}</Text>
      <Text style={styles.headerItem}>
        <Currency amount={price} />
      </Text>
      <View style={{ width: '25%', backgroundColor: '#f2f2f2', paddingRight: 5 }}>
        <Text
          style={{
            marginVertical: 15,
            textAlign: 'right',
          }}
        >
          <Currency amount={quantity * price} />
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerItem: {
    width: '25%',
    fontSize: 12,
  },
  headerItemName: {
    width: '40%',
    fontSize: 12,
  },
  tableHeader: {
    width: '100%',
    // paddingVertical: 10,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
    // marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
