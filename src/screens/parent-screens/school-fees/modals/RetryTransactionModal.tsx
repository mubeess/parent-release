import BottomSlider from '@safsims/components/BottomSlider/BottomSlider';
import Button from '@safsims/components/Button/Button';
import { FailedRetry, PendingRetry, SuccessRetry } from '@safsims/components/Images';
import Text from '@safsims/components/Text/Text';
import { SchoolFeesTransactionDto } from '@safsims/generated';
import httpClient from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

interface IProps {
  isOpen?: boolean;
  onClose: () => void;
  transaction?: SchoolFeesTransactionDto;
  callback?: () => void;
}

const RetryTransactionModal = ({ isOpen, onClose, transaction, callback }: IProps) => {
  const [status, setStatus] = useState('pending');
  const [loading, setLoading] = useState(false);

  const verifyStudentPayment = async (id) => {
    setLoading(true);
    try {
      const { data } = await httpClient.get(`/payments/verify/${id}`);
      if (data.payment_status.toLowerCase() === 'failed') {
        setStatus('failed');
      } else if (data.payment_status.toLowerCase() === 'successful') {
        setStatus('successful');
      } else if (data.payment_status.toLowerCase() === 'pending') {
        setStatus('pending');
      } else setStatus('failed');
      callback?.();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const err = handleError(error);
    }
  };

  return (
    <BottomSlider isOpen={isOpen} onClose={onClose}>
      <View style={styles.container}>
        {status.toUpperCase() === 'PENDING' && (
          <>
            <PendingRetry />

            <Text h2 style={{ marginTop: 30 }}>
              Transaction Pending
            </Text>
            <Text style={{ width: '60%', textAlign: 'center', marginTop: 10 }}>
              This transaction is pending verificaation, click the button below to try again.
            </Text>

            <Button
              onPress={() => verifyStudentPayment(transaction?.id)}
              isLoading={loading}
              pale
              label="Retry transaction"
              style={{ width: 200, marginTop: 40 }}
            />
          </>
        )}
        {status.toUpperCase() === 'FAILED' && (
          <>
            <FailedRetry />

            <Text h2 style={{ marginTop: 30 }}>
              Transaction Failed
            </Text>
            <Text style={{ width: '60%', textAlign: 'center', marginTop: 10 }}>
              Your transaction failed.
            </Text>
          </>
        )}
        {status.toUpperCase() === 'SUCCESSFUL' && (
          <>
            <SuccessRetry />

            <Text h2 style={{ marginTop: 30 }}>
              Transaction Successful
            </Text>
            <Text style={{ width: '60%', textAlign: 'center', marginTop: 10 }}>
              Your transaction is successful.
            </Text>
          </>
        )}
      </View>
    </BottomSlider>
  );
};

export default RetryTransactionModal;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
