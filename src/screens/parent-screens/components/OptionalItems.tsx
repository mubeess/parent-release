import Button from '@safsims/components/Button/Button';
import Checkbox from '@safsims/components/Checkbox/Checkbox';
import Text from '@safsims/components/Text/Text';
import { CreateStudentInvoiceItemRequest, InvoiceItemDto } from '@safsims/generated';
import { lightTheme } from '@safsims/utils/Theme';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
interface OptionalProps {
  item: InvoiceItemDto;
  addToInvoice: (request: CreateStudentInvoiceItemRequest) => void;
  loading?: boolean;
}
export default function OptionalItems({ item, addToInvoice, loading }: OptionalProps) {
  const [quantity, setQuantity] = useState<any>(item.quantity || 1);
  const [checked, setChecked] = useState<boolean>(false);

  const add = () => {
    setQuantity(quantity + 1);
  };

  const minus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetail}>
        <View style={styles.tuition}>
          <Checkbox
            style={styles.check}
            value={checked}
            onValueChange={() => setChecked((prev) => !prev)}
            color={checked ? lightTheme.colors.PrimaryColor : undefined}
          />
          <Text>{item?.payable_item?.name}</Text>
        </View>
        <Text>{`\u20A6 ${(item?.unit_price || 0) * (quantity || 1)}`}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => {
            minus();
          }}
          disabled={!checked}
          fontStyle={styles.buttonFont}
          style={{
            width: 40,
            height: 40,
            marginLeft: 0,
            marginRight: 5,
            backgroundColor: lightTheme.colors.PrimaryBackground,
            borderWidth: 1,
            borderColor: checked
              ? lightTheme.colors.PrimaryColor
              : lightTheme.colors.PrimaryBorderColor,
            borderStyle: checked ? 'solid' : 'dashed',
          }}
          label="-"
        />
        <Button
          disabled
          fontStyle={styles.buttonFont}
          style={styles.numebrButton}
          label={`${quantity}`}
        />
        <Button
          onPress={() => {
            add();
          }}
          disabled={!checked}
          fontStyle={styles.buttonFont}
          style={{
            width: 40,
            height: 40,
            marginLeft: 0,
            marginRight: 5,
            backgroundColor: lightTheme.colors.PrimaryBackground,
            borderWidth: 1,
            borderColor: checked
              ? lightTheme.colors.PrimaryColor
              : lightTheme.colors.PrimaryBorderColor,
            borderStyle: checked ? 'solid' : 'dashed',
          }}
          label="+"
        />
        {checked && (
          <Button
            isLoading={loading}
            onPress={() => {
              addToInvoice({
                items: [
                  {
                    invoice_item_id: item.id || '',
                    quantity: quantity || 1,
                  },
                ],
              });
            }}
            style={styles.addButton}
            label="Add Item"
          />
        )}
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
    minHeight: 100,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
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
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    marginTop: 20,
  },
  button: {
    width: 40,
    height: 40,
    marginLeft: 0,
    marginRight: 5,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderStyle: 'dashed',
  },
  buttonFont: {
    color: lightTheme.colors.PrimaryFontColor,
  },
  numebrButton: {
    width: 60,
    height: 40,
    marginLeft: 0,
    marginRight: 5,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
  },
  addButton: {
    width: 100,
    height: 40,
    marginRight: 0,
  },
});
