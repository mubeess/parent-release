import Currency from '@safsims/components/Currency/Currency';
import Icon from '@safsims/components/Icon/Icon';
import { Dashboard, MakePaymentIcon, ViewBreackdownIcon } from '@safsims/components/Images';
import Text from '@safsims/components/Text/Text';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { lightTheme } from '@safsims/utils/Theme';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function PaymentOverview({ amount, navigation }) {
  const currentTerm = useAppSelector((state) => state.configuration.currentTerm);

  return (
    <View style={styles.container}>
      <View style={styles.feeDetail}>
        <View>
          <Text>Outstanding Fee</Text>
          <Text h1>
            <Currency amount={amount} />
          </Text>
        </View>

        <Dashboard />
      </View>

      <View style={styles.info}>
        <View style={styles.mainInfo}>
          <Icon name="info-circle" size={20} />
          <Text style={{ fontSize: 12, marginLeft: 5 }}>
            This is an addition of all your children outstanding fees
          </Text>
        </View>
      </View>

      <View style={styles.payment}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Fees', {
              params: { term: currentTerm, defaultPaymentOpen: true },
              screen: 'AllChildrenPayment',
            })
          }
          activeOpacity={0.8}
          style={styles.paymentsButton}
        >
          <MakePaymentIcon />
          <Text style={{ marginLeft: 5, color: lightTheme.colors.PrimaryColor }}>Make Payment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Fees', {
              screen: 'FeesHome',
            })
          }
          activeOpacity={0.8}
          style={[styles.paymentsButton, { borderRightWidth: 0 }]}
        >
          <ViewBreackdownIcon />
          <Text style={{ marginLeft: 5 }}>View breakdown</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 230,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 10,
  },
  feeDetail: {
    height: 80,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    width: '100%',
    minHeight: 67,
    backgroundColor: '#DFE8F7',
    padding: 10,
    justifyContent: 'center',
  },
  mainInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  payment: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  paymentsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    borderRightWidth: 1,
    borderRightColor: lightTheme.colors.PrimaryBorderColor,
  },
});
