import Text from '@safsims/components/Text/Text';
import { lightTheme } from '@safsims/utils/Theme';
import { StyleSheet, View } from 'react-native';
interface RowProps {
  name?: string;
  amount?: number;
}
export default function ChildRow({ name = '', amount = 0 }: RowProps) {
  return (
    <View style={styles.row}>
      <Text>{name}</Text>

      <View style={[styles.amount]}>
        <Text style={styles.text}>{`\u20A6 ${amount}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    marginVertical: 15,
    marginRight: 5,
    textAlign: 'right',
  },
  amount: {
    backgroundColor: '#f2f2f2',
    width: '30%',
  },
});
