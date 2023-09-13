import Icon from '@safsims/components/Icon/Icon';
import SafeAreaComponent from '@safsims/components/SafeAreaComponent/SafeAreaComponent';
import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import { Paystack } from 'react-native-paystack-webview';
// import Modal from '@safsims/components/Modal/Modal'

const PaystackModal = React.forwardRef<any, any>((props, ref) => {
  const { isOpen, onClose, onSuccess, onCancel, amount, email, publicKey, reference } = props;
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
          channels={['bank', 'card', 'mobile_money', 'ussd', 'qr']}
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
