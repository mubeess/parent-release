import publicKey from '@safsims/utils/paymentKey';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { Modal, View } from 'react-native';
import { WebView } from 'react-native-webview';

const usePaystack = () => {
  const handle = useLoading();

  const PaystackModal = ({
    isOpen,
    amount,
    email,
    onCancel,
    onSuccess,
    paymentRef,
    splitCode,
    splitId,
  }) => {
    const onReceiveMessage = (data) => {
      const webResponse = JSON.parse(data);
      switch (webResponse.event) {
        case 'cancelled':
          onCancel({ status: 'cancelled' });
          break;
        case 'successful':
          const reference = webResponse.transactionRef;
          if (onSuccess) {
            onSuccess({
              status: 'success',
              transactionRef: reference,
              data: webResponse,
            });
          }
          break;
        default:
          break;
      }
    };
    return (
      <>
        <Modal visible={isOpen}>
          <View style={{ flex: 1 }}>
            <WebView
              source={{
                html: getContent({
                  paystackKey: publicKey,
                  billingEmail: email,
                  amount,
                  reference: paymentRef,
                  split_code: splitCode,
                  splitId,
                }),
              }}
              style={{ height: '100%' }}
              onMessage={(e) => {
                onReceiveMessage(e.nativeEvent?.data);
              }}
              onError={(syntheticEvent) => {
                const { nativeEvent } = syntheticEvent;
                console.log('WebView error:', nativeEvent);
              }}
            />
          </View>
        </Modal>
      </>
    );
  };

  return {
    loading: handle.loading,
    PaystackModal,
  };
};

const getContent = ({
  paystackKey,
  billingEmail,
  amount,
  split_code,
  reference,
  currency = 'NGN',
  splitId,
}) => {
  return `   
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Paystack</title>
        </head>
          <body  onload="payWithPaystack()" style="background-color:#666;height:100vh">
            <script src="https://js.paystack.co/v1/inline.js"></script>
            <script type="text/javascript">
              window.onload = payWithPaystack;
              function payWithPaystack(){
              var handler = PaystackPop.setup({
                key: '${paystackKey}',
                email: '${billingEmail}',
                amount: ${Number(parseFloat(amount)) * 100},
                channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer'],
                split_code: '${split_code || ''}',
                ref: '${reference || '' + Math.floor(Math.random() * 1000000000 + 1)}',
                currency: '${currency}',
                metadata: {
                  source: 'mobile app',
                  splitId: '${splitId}'
                },
                callback: function(response){
                      var resp = {event:'successful', transactionRef:response};
                        window.ReactNativeWebView.postMessage(JSON.stringify(resp))
                },
                onClose: function(){
                    var resp = {event:'cancelled'};
                    window.ReactNativeWebView.postMessage(JSON.stringify(resp))
                }
                });
                handler.openIframe();
                }
            </script> 
          </body>
      </html> 
      `;
};

export default usePaystack;
