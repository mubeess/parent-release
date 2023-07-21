import Text from '@safsims/components/Text/Text';
import { CheckoutItem, InvoiceItemDto } from '@safsims/generated';
import { lightTheme } from '@safsims/utils/Theme';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Checkbox from '../../../components/Checkbox/Checkbox';
interface InvoiceProps {
  item: CheckoutItem;
  deleteItemFromInvoice: (payableItemId: any, onFail?: any) => void;
  checkHasPaidForItem: (payableItemId: string) => boolean;
  optionalInvoiceItems: InvoiceItemDto[];
}
export default function CompulsoryItem({
  item,
  optionalInvoiceItems,
  deleteItemFromInvoice,
  checkHasPaidForItem,
}: InvoiceProps) {
  const [isChecked, setIsChecked] = useState(true);

  const isOptional = !!optionalInvoiceItems?.find((x) => x.payable_item?.id === item.item_id);
  const isDisabled = !isOptional || checkHasPaidForItem(item.item_id || '');

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetail}>
        <View style={styles.tuition}>
          <Checkbox
            style={styles.check}
            disabled={isDisabled}
            value={isChecked}
            onValueChange={() => {
              const val = !isChecked;
              setIsChecked(val);
              if (!val) {
                deleteItemFromInvoice(item.item_id, () => setIsChecked(true));
              }
            }}
            color={isChecked ? lightTheme.colors.PrimaryGreen : undefined}
          />
          <Text>{item?.item_name}</Text>
        </View>
        <Text>{`\u20A6 ${item.amount}`}</Text>
      </View>

      <View style={styles.itemDetail}>
        <View style={styles.itemIndicator}>
          <View
            style={[
              styles.indicator,
              {
                backgroundColor: !isOptional
                  ? lightTheme.colors.PrimaryGreen
                  : lightTheme.colors.PrimaryOrange,
              },
            ]}
          ></View>
          <Text style={styles.indicatorText}>
            {!isOptional ? 'Compulsory Item' : 'Optional Item'}
          </Text>
        </View>
        <View style={styles.quantity}>
          <Text style={styles.indicatorText}>{`Quantity: ${item.quantity}`}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    backgroundColor: lightTheme.colors.PrimaryWhite,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
  },
  itemDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemIndicator: {
    width: 120,
    borderRadius: 10,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  indicator: {
    width: 5,
    height: 5,
    borderRadius: 10,
  },
  indicatorText: {
    fontSize: 12,
  },
  quantity: {
    width: 120,
    borderRadius: 5,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: 30,
  },
  tuition: {
    flexDirection: 'row',
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
});
