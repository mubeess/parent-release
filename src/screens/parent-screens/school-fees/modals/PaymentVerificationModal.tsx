import { useTheme } from '@react-navigation/native';
import BottomSlider from '@safsims/components/BottomSlider/BottomSlider';
import Button from '@safsims/components/Button/Button';
import Currency from '@safsims/components/Currency/Currency';
import { PaymentFailed, PaymentPending, PaymentSucceess } from '@safsims/components/Images';
import Text from '@safsims/components/Text/Text';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import useVerifyPayment from '../hooks/useVerifyPayment';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  safsimsTransactionRef: string;
  onSuccess?: () => void;
  amount?: number;
}

const PaymentVerificationModal = ({
  isOpen,
  onClose,
  safsimsTransactionRef,
  onSuccess,
  amount,
}: IProps) => {
  const { height } = useWindowDimensions();
  const { colors } = useTheme();
  const { loading, paymentResponse } = useVerifyPayment({
    safsimsTransactionRef,
  });

  return (
    <BottomSlider height={height - 150} isOpen={isOpen} onClose={onClose} hideCloseButton>
      <>
        <View style={{ padding: 20, height: '100%' }}>
          <View style={styles.content}>
            {paymentResponse?.payment_status === 'PENDING' && (
              <>
                <View>
                  <PaymentPending />
                </View>
                <Text h2 style={{ color: colors.PrimaryFontColor, marginVertical: 10 }}>
                  Payment Unverified
                </Text>
                <Text>
                  Your payment of <Currency amount={amount} /> is pending verification.
                </Text>
                <Button
                  onPress={onClose}
                  pale
                  label="Close"
                  style={{ width: '50%', marginTop: 20 }}
                />
              </>
            )}
            {paymentResponse?.payment_status === 'FAILED' && (
              <>
                <View>
                  <PaymentFailed />
                </View>
                <Text h2 style={{ color: colors.PrimaryFontColor, marginVertical: 10 }}>
                  Payment Failed
                </Text>
                <Text>
                  Your payment of <Currency amount={amount} /> failed.
                </Text>
                <Button
                  onPress={onClose}
                  pale
                  label="Close"
                  style={{ width: '50%', marginTop: 20 }}
                />
              </>
            )}
            {paymentResponse?.payment_status === 'SUCCESSFUL' && (
              <>
                <View>
                  <PaymentSucceess />
                </View>
                <Text h2 style={{ color: colors.PrimaryFontColor, marginVertical: 10 }}>
                  Payment Successfull
                </Text>
                <Text>
                  Your payment of <Currency amount={amount} /> was successfull.
                </Text>
                <Button
                  onPress={() => {
                    onClose();
                    onSuccess?.();
                  }}
                  pale
                  label="Close"
                  style={{ width: '50%', marginTop: 20 }}
                />
              </>
            )}
          </View>
        </View>
      </>
    </BottomSlider>
  );
};

export default PaymentVerificationModal;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
