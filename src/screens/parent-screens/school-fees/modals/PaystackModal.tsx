import Icon from '@safsims/components/Icon/Icon';
import SafeAreaComponent from '@safsims/components/SafeAreaComponent/SafeAreaComponent';
import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import { Paystack } from 'react-native-paystack-webview';
// import Modal from '@safsims/components/Modal/Modal'

const PaystackModal = React.forwardRef<any, any>((props, ref) => {
<<<<<<< HEAD
  const { isOpen, onClose, onSuccess, onCancel, amount, email, publicKey, reference } = props;
=======
  const { isOpen, onClose, onSuccess, onCancel, amount, email, publicKey, reference, config } =
    props;
>>>>>>> 4c308f17d03ef7f9a6b261055ed47d6619bce909
  return (
    <Modal visible={isOpen} animationType="none">
      <View style={{ flex: 1, padding: 20 }}>
        <SafeAreaComponent />
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={onClose}>
            <Icon size={24} name="close-circle" />
          </TouchableOpacity>
        </View>
        <Paystack
<<<<<<< HEAD
          channels={['bank', 'card', 'mobile_money', 'ussd', 'qr']}
=======
          // @ts-ignore
          channels={['card', 'ussd', 'bank', 'qr', 'mobile_money', 'bank_transfer']}
>>>>>>> 4c308f17d03ef7f9a6b261055ed47d6619bce909
          refNumber={reference}
          paystackKey={publicKey}
          billingEmail={email}
          amount={amount}
          onCancel={onCancel}
          onSuccess={onSuccess}
          ref={ref}
        />
      </View>
    </Modal>
  );
});

export default PaystackModal;
