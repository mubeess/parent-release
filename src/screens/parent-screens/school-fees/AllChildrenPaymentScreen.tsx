import Button from '@safsims/components/Button/Button';
import CheckButton from '@safsims/components/Button/CheckButton';
import Currency from '@safsims/components/Currency/Currency';
import Icon from '@safsims/components/Icon/Icon';
import { FlutterWave, Paystack } from '@safsims/components/Images';
import SafeAreaComponent from '@safsims/components/SafeAreaComponent/SafeAreaComponent';
import Text from '@safsims/components/Text/Text';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { lightTheme } from '@safsims/utils/Theme';
import flutterwaveKey from '@safsims/utils/flutterwaveKey';
import publicKey from '@safsims/utils/paymentKey';
import useDisclosure from '@safsims/utils/useDisclosure/useDisclosure';
import { Notify } from '@safsims/utils/utils';
import { PayWithFlutterwave } from 'flutterwave-react-native';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { paystackProps } from 'react-native-paystack-webview';
import ChildrenPaymentAccordion from './components/Accordion/ChildrenPaymentAccordion';
import ChildItem from './components/ChildItem';
import ChildRow from './components/Table/ChildRow';
import useBulkPayment from './hooks/useBulkPayment';
import useMakeBulkPayment from './hooks/useMakeBulkPayment';
import PaymentVerificationModal from './modals/PaymentVerificationModal';
import PaystackModal from './modals/PaystackModal';

const OnlinePayments = [
  {
    title: 'PAYSTACK',
    Logo: <Paystack />,
  },
  {
    title: 'FLUTTERWAVE',
    Logo: <FlutterWave />,
  },
];
interface FlutterRedirectParams {
  status: 'successful' | 'cancelled';
  transaction_id?: string;
  tx_ref: string;
}
export default function AllChildrenPaymentScreen({ navigation, route }) {
  const [activePayment, setActivePayment] = useState(0);
  const validationModalHandler = useDisclosure();

  const [paymentMethod, setPaymentMethod] = useState<any>('PAYSTACK');

  const { term } = route.params;
  const term_id = term?.term_id;
  const user = useAppSelector((state) => state.user.parent);
  const currentTerm = useAppSelector((state) => state.configuration.currentTerm);

  const { linked_students } = user!;

  const parentChildren = useMemo(
    () => (linked_students || [])?.map((child) => child.student!),
    [linked_students],
  );
  const student_ids = useMemo(() => parentChildren.map((item) => item.id || ''), [parentChildren]);

  const { bulkCheckout: bulkPaymentInfo } = useBulkPayment({
    studentIds: student_ids,
    termId: term_id || currentTerm?.term_id,
  });

  const studentInfo = useMemo(
    () =>
      bulkPaymentInfo?.map((child) => {
        return {
          name: `${child?.student_info?.first_name} ${child?.student_info?.other_names} ${child?.student_info?.last_name}`,
          id: child?.student_info?.student_id,
          class: `${child?.student_info?.class_level_name} ${child?.student_info?.arm_name}`,
          photo: child?.student_info?.profile_picture,
          term: `${child?.term?.school_term_definition?.name} - ${child?.term?.session?.name}`,
          amount: child?.total_balance,
          invoice_items: [...(child?.compulsory_items || []), ...(child?.optional_items || [])],
        };
      }),
    [bulkPaymentInfo],
  );

  const payableChildren = useMemo(
    () => studentInfo?.filter((child) => (child.amount || 0) > 0),
    [studentInfo],
  );

  const [children, setChildren] = useState(payableChildren);

  useEffect(() => {
    setChildren(payableChildren);
  }, [payableChildren]);

  const [removedChildren, setRemovedChildren] = useState<any[]>([]);

  const studentBreakdown = bulkPaymentInfo
    ?.map((child) => {
      return {
        student_id: child?.student_info?.id!,
        term_id: child?.term?.school_term_definition?.id!,
        amount: child?.total_balance || 0,
      };
    })
    .filter((x) => (x.amount || 0) > 0);

  const outstandingAmount = children.map((item) => item.amount || 0);
  const total_amount = outstandingAmount.reduce((a, b) => a + b, 0);

  const childCharges = (children || []).length * 100;
  const charges = childCharges + 300;
  const total = total_amount + charges;

  const addChild = (child) => {
    const newArr = children.filter(({ id }) => id !== child.id);
    setChildren([...newArr, child]);
    const newRemovedArr = removedChildren.filter(({ id }) => id !== child.id);
    setRemovedChildren(newRemovedArr);
  };

  const removeChild = (child) => {
    if (children.length > 1) {
      const newArr = children.filter(({ id }) => id !== child.id);
      setChildren(newArr);
      setRemovedChildren([...removedChildren, child]);
    }
  };

  const [safsimsTransactionRef, setSafsimsTransactionRef] = useState('');

  const { loading, startPaymentProcess } = useMakeBulkPayment();

  const startPayment = async (callback?: () => void) => {
    if (!paymentMethod) {
      Notify({ type: 'error', message: 'Please select a valid payment method.' });
    } else {
      const data = {
        term_id: term_id,
        email: user?.email!,
        payment_method: paymentMethod,
        total: total_amount,
        breakdown: studentBreakdown,
        redirect_url: '',
      };
      await startPaymentProcess(data, paymentCheckoutCallback);
      callback?.();
    }
  };

  const paystackWebViewRef = useRef<paystackProps.PayStackRef>();

  const configObj = {
    reference: new Date().getTime().toString(),
    email: user?.email,
    amount: parseInt(`${total}`),
    publicKey,
  };

  const [config, setConfig] = useState(configObj);

  const onPaystackPaymentSuccess = useCallback(() => {
    setSafsimsTransactionRef(config.reference);
    setStartOnlinePayment(false);
    validationModalHandler.onOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  const onClosePaystackPayment = useCallback(() => {
    setStartOnlinePayment(false);
    setSafsimsTransactionRef(config.reference);
    validationModalHandler.onOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  const [startOnlinePayment, setStartOnlinePayment] = useState(false);

  useEffect(() => {
    setConfig((prev) => ({
      ...prev,
      amount: parseInt(`${total}`),
    }));
  }, [total]);

  const paymentCheckoutCallback = (data) => {
    if (paymentMethod.toUpperCase() === 'PAYSTACK') {
      paystackCheckoutCallback(data);
    }
    if (paymentMethod.toUpperCase() === 'FLUTTERWAVE') {
      flutterwaveChekoutCallback(data);
    }
  };

  const paystackCheckoutCallback = ({ reference, subaccounts }) => {
    const obj = {
      ...config,
      reference,
      split: {
        subaccounts,
        type: 'flat',
        bearer_type: 'account',
      },
    };
    setConfig(obj);
    setStartOnlinePayment(true);
    paystackWebViewRef?.current?.startTransaction();
  };

  const flutterwaveChekoutCallback = ({ reference, subaccounts }) => {
    const obj = {
      ...config,
      reference,
      split: {
        subaccounts,
        type: 'flat',
        bearer_type: 'account',
      },
    };
    setConfig(obj);
    // setStartOnlinePayment(true);
  };

  const handleFlutterRedirect = (data: FlutterRedirectParams) => {
    setStartOnlinePayment(false);
    setSafsimsTransactionRef(config.reference);
    validationModalHandler.onOpen();
  };

  return (
    <View style={styles.container}>
      <SafeAreaComponent />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
        style={styles.routeDetail}
      >
        <Icon name="arrow-left" size={20} color={lightTheme.colors.PrimaryColor} />
        <Text style={{ color: lightTheme.colors.PrimaryColor, marginLeft: 5 }}>School Fees</Text>
        <Text style={{ color: 'rgb(157, 157, 183)' }}> / Make payment for all your children</Text>
      </TouchableOpacity>

      <View style={styles.subHeaderContainer}>
        <View style={styles.subheaderIcon}>
          <Icon name="people" size={20} color={lightTheme.colors.PrimaryFontColor} />
        </View>
        <Text>Make payment for all your children</Text>
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        {removedChildren.map((child) => (
          <ChildItem key={child.id} onAdd={() => addChild(child)} child={child} />
        ))}
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        {children.map((child) => (
          <ChildrenPaymentAccordion
            onRemove={() => removeChild(child)}
            child={child}
            key={child.id}
          />
        ))}

        <View style={styles.paymentHistory}>
          <View style={styles.historyHeader}>
            <Text>Payment Summary</Text>
          </View>
          <View style={styles.historyHeadTitle}>
            <Text style={{ fontWeight: '500' }}>CHILD</Text>
            <Text style={{ fontWeight: '500' }}>AMOUNT</Text>
          </View>
          {children.map((child) => (
            <ChildRow key={child.id} name={child.name} amount={child.amount} />
          ))}

          <View style={[styles.fees]}>
            <View style={[styles.feesAmount]}>
              <Text>FEES AMOUNT</Text>
              <Text h1>
                <Currency amount={total_amount} />
              </Text>
            </View>
            <View style={[styles.feesCharge]}>
              <Text>TRANSACTION CHARGE</Text>
              <Text style={{ color: lightTheme.colors.PrimaryYellow }} h1>
                <Currency amount={charges} />
              </Text>
            </View>
          </View>

          <View style={styles.total}>
            <Text>TOTAL AMOUNT</Text>
            <Text h1 style={{ color: lightTheme.colors.PrimaryColor }}>
              <Currency amount={total} />
            </Text>
          </View>

          <Text style={{ marginLeft: 20, marginVertical: 20 }}>Select payment method</Text>
          <View style={styles.checkButtons}>
            {OnlinePayments.map((content, index) => (
              <CheckButton
                style={{ marginBottom: 20 }}
                key={index.toString()}
                title={content.title}
                Image={content.Logo}
                onPress={() => {
                  setPaymentMethod(content.title);
                }}
                active={paymentMethod === content.title}
              />
            ))}
          </View>

          {paymentMethod == 'FLUTTERWAVE' ? (
            <PayWithFlutterwave
              onRedirect={handleFlutterRedirect}
              onInitializeError={(error) => console.log('error: ', error)}
              options={{
                tx_ref: config?.reference,
                authorization: flutterwaveKey,
                customer: {
                  email: config.email!,
                },
                amount: config.amount,
                currency: 'NGN',
                payment_options: 'card',
              }}
              customButton={(props) => (
                <Button
                  onPress={() => startPayment(props.onPress)}
                  isLoading={loading}
                  style={{ width: '90%', marginTop: 10 }}
                  label="Make Payment"
                />
              )}
            />
          ) : (
            <Button
              onPress={startPayment}
              isLoading={loading}
              style={{ width: '90%', marginTop: 10 }}
              label="Make Payment"
            />
          )}
        </View>
      </ScrollView>

      <PaystackModal
        isOpen={startOnlinePayment && paymentMethod.toUpperCase() === 'PAYSTACK'}
        onClose={() => setStartOnlinePayment(false)}
        publicKey={publicKey}
        onSuccess={onPaystackPaymentSuccess}
        onCancel={onClosePaystackPayment}
        amount={config.amount}
        email={config.email}
        ref={paystackWebViewRef}
      />

      <PaymentVerificationModal
        amount={config?.amount}
        isOpen={validationModalHandler.isOpen}
        safsimsTransactionRef={safsimsTransactionRef}
        onClose={() => {
          setSafsimsTransactionRef('');
          validationModalHandler.onClose();
        }}
        onSuccess={() => {
          setSafsimsTransactionRef('');
          validationModalHandler.onClose();
          navigation.navigate('Fees');
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.colors.PrimaryBackground,
  },
  routeDetail: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  subHeaderContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  subheaderIcon: {
    height: 50,
    width: 50,
    borderColor: lightTheme.colors.PrimaryFontColor,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 50,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentHistory: {
    minHeight: 100,
    width: '100%',
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    marginTop: 20,
    backgroundColor: lightTheme.colors.PrimaryWhite,
    borderRadius: 4,
    paddingBottom: 20,
  },
  historyHeader: {
    width: '100%',
    height: 50,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  historyHeadTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
  },
  fees: {
    marginTop: 30,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  feesAmount: {
    width: '50%',
    paddingRight: 20,
    flexDirection: 'column',
    alignItems: 'flex-end',
    borderRightWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
  },
  feesCharge: {
    width: '50%',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  outStanding: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  seperator: {
    height: '80%',
    backgroundColor: lightTheme.colors.PrimaryBorderColor,
    width: 1,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: lightTheme.colors.PrimaryBorderColor,
    marginVertical: 10,
    marginTop: 30,
  },
  total: {
    height: 100,
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
  },
  checkButtons: {
    width: '100%',
    paddingHorizontal: 20,
  },
});
