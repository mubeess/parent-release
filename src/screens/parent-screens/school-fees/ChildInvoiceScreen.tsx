import { useTheme } from '@react-navigation/native';
import BottomSlider from '@safsims/components/BottomSlider/BottomSlider';
import Button from '@safsims/components/Button/Button';
import CheckButton from '@safsims/components/Button/CheckButton';
import Currency from '@safsims/components/Currency/Currency';
import Icon from '@safsims/components/Icon/Icon';
import { FlutterWave, Paystack as PaystackIcon } from '@safsims/components/Images';
import Input from '@safsims/components/Input/Input';
import SafeAreaComponent from '@safsims/components/SafeAreaComponent/SafeAreaComponent';
import Text from '@safsims/components/Text/Text';
import useInvoiceTemplatesFetch from '@safsims/general-hooks/useInvoiceTemplatesFetch';
import { CreateStudentInvoiceItemRequest } from '@safsims/generated';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { lightTheme } from '@safsims/utils/Theme';
import publicKey from '@safsims/utils/paymentKey';
import useDisclosure from '@safsims/utils/useDisclosure/useDisclosure';
import { Notify } from '@safsims/utils/utils';
import { useCallback, useEffect, useRef, useState } from 'react';
import { paystackProps } from 'react-native-paystack-webview';

import Loader from '@safsims/components/Loader/Loader';
import flutterwaveKey from '@safsims/utils/flutterwaveKey';
import PayWithFlutterwave from 'flutterwave-react-native';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import CompulsoryItem from '../components/CompulsoryItem';
import OptionalItems from '../components/OptionalItems';
import useAddItemToInvoice from './hooks/useAddItemToInvoice';
import useCheckoutDetailsGet from './hooks/useCheckoutDetailsGet';
import useDeleteItemFromInvoice from './hooks/useDeleteItemFromInvoice';
import useMakePayment from './hooks/useMakePayment';
import useReceiptsGet from './hooks/useReceiptsGet';
import useStudentInvoiceEdit from './hooks/useStudentInvoiceEdit';
import PaymentVerificationModal from './modals/PaymentVerificationModal';
import usePaystack from './modals/hooks/usePaystack';

const OnlinePayments = [
  {
    title: 'PAYSTACK',
    Logo: <PaystackIcon />,
  },
  {
    title: 'FLUTTERWAVE',
    Logo: <FlutterWave />,
  },
];

export default function ChildInvoiceScreen({ navigation, route }) {
  const { id, termId, session } = route.params;
  const { colors } = useTheme();
  const parent = useAppSelector((state) => state.user.parent);
  const child = parent?.linked_students?.find((student) => student.student?.id === id);
  const { loadingCheckout, checkout, refetchCheckout } = useCheckoutDetailsGet({
    studentId: id,
    termId,
  });
  const student = checkout?.student_info;

  const { invoiceTemplates } = useInvoiceTemplatesFetch({
    termId,
  });

  const levelInvoiceTemplate = invoiceTemplates.find(
    (template) => template.class_level?.class_level_id === child?.student?.class_level_id,
  );

  const optionalInvoiceItems = levelInvoiceTemplate?.invoice_items?.filter(
    (item) => item.item_type === 'OPTIONAL',
  );

  const { deleteItemFromInvoice, loading: deletingItem } = useDeleteItemFromInvoice({
    callback: refetchCheckout,
  });

  const { addItemToInvoice, loading: addingItem } = useAddItemToInvoice({
    callback: refetchCheckout,
  });

  const { receipts, loadingReceipts, refetchReceipts } = useReceiptsGet({
    studentId: id,
    sessionId: session,
  });

  const checkHasPaidForItem = (payableItemId: string) => {
    return !!(receipts || []).find((item) =>
      item.student_bill_data?.student_bill?.find((data) => data.payable_item?.id === payableItemId),
    );
  };

  const [safsimsTransactionRef, setSafsimsTransactionRef] = useState('');
  const avatar = student?.profile_picture;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const validationModalHandler = useDisclosure();
  const [paymentMethod, setPaymentMethod] = useState<any>('PAYSTACK');
  const [paymentAmount, setPaymentAmount] = useState(checkout?.total_balance || 0);
  const charges = 400;
  const total = Number(parseFloat(`${paymentAmount}`)) + charges;

  const handleAmount = (e) => {
    e = Number(e.replace(/[^0-9]/gi, ''));
    if (e > (checkout?.total_balance || 0)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: "You can't pay more than the invoice balance.",
      });
    } else {
      setPaymentAmount(e);
    }
  };

  useEffect(() => {
    setPaymentAmount(
      checkout?.total_balance && checkout?.total_balance > 0 ? checkout?.total_balance : 0,
    );
  }, [checkout]);

  const { height } = useWindowDimensions();
  const [itemList, setItemList] = useState<any[]>([]);

  const checkItems = () => {
    const feesItems = checkout?.compulsory_items ? checkout?.compulsory_items : [];
    const otherItems = checkout?.optional_items ? checkout?.optional_items : [];
    return [...feesItems, ...otherItems];
  };

  const getUpdatedList = () => {
    let display = checkItems();
    for (let i = 0; i < itemList.length; i++) {
      // eslint-disable-next-line @typescript-eslint/no-loop-func
      display = display.filter(({ item_id }) => item_id !== itemList[i].item_id);
    }
    return [...display, ...itemList];
  };

  const { editInvoice } = useStudentInvoiceEdit();
  const { loading, startPaymentProcess } = useMakePayment();

  const submitPayment = async (callback?: () => void) => {
    const item_quantities: any[] = [];
    if (!paymentMethod) {
      Notify({ message: 'Please select a valid payment method.', type: 'error' });
    } else if (checkout?.compulsory_items?.length || checkout?.optional_items?.length) {
      if (paymentAmount >= 500) {
        getUpdatedList().map((item) => {
          if (item.optional_item === true) {
            item_quantities.push({
              invoice_item_id: item.invoice_item_id,
              quantity: item.quantity,
            });
          }
        });
        const payload = {
          id,
          data: { session_id: session, term_id: termId, item_quantities },
        };
        if (item_quantities.length) {
          editInvoice(payload);
        } else {
          await startPaymentProcess(
            {
              amount: parseInt(`${paymentAmount}`),
              term_id: termId,
              student_id: id,
              email: parent?.email!,
              redirect_url: '',
              payment_method: paymentMethod.toUpperCase(),
            },
            paymentCheckoutCallback,
          );
          callback?.();
        }
      } else if (paymentAmount >= 0 && paymentAmount < 500) {
        Notify({ message: 'Payment amount cannot be less than ₦500.', type: 'error' });
      } else {
        Notify({ message: 'Please enter a valid amount.', type: 'error' });
      }
    } else {
      Notify({ message: 'There is no item in this invoice.', type: 'error' });
    }
  };

  // ============================ PAYSTECK PAYMENT ======================================== //

  const paystackWebViewRef = useRef<paystackProps.PayStackRef>();

  const configObj = {
    reference: new Date().getTime().toString(),
    email: parent?.email,
    amount: parseInt(`${paymentAmount}`) + 400,
    publicKey,
    transaction_charge: 100 * 100,
  };

  const [config, setConfig] = useState<any>(configObj);
  const { PaystackModal } = usePaystack();

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
      amount: parseInt(`${paymentAmount}`) + 400,
    }));
  }, [paymentAmount]);

  const paystackCheckoutCallback = ({ reference, splitCode, splitId }) => {
    const obj = { ...config, reference, splitCode, splitId };
    setConfig(obj);
    onClose();
    setStartOnlinePayment(true);
    // paystackWebViewRef?.current?.startTransaction();
  };

  const paymentCheckoutCallback = (data) => {
    if (paymentMethod.toUpperCase() === 'PAYSTACK') {
      paystackCheckoutCallback(data);
    }
    if (paymentMethod.toUpperCase() === 'FLUTTERWAVE') {
      flutterwaveChekoutCallback(data);
    }
  };

  const flutterwaveChekoutCallback = ({ reference, subaccount, splitId }) => {
    const obj = {
      ...config,
      reference,
      subaccounts: [
        {
          id: subaccount,
          transaction_charge_type: 'flat_subaccount',
          transaction_charge: Number(parseFloat(`${paymentAmount}`)),
        },
      ],
    };
    setConfig(obj);
    setStartOnlinePayment(true);
  };

  const handleFlutterRedirect = (data) => {
    setStartOnlinePayment(false);
    setSafsimsTransactionRef(config.reference);
    validationModalHandler.onOpen();
  };

  return (
    <View style={styles.container}>
      <SafeAreaComponent style={{ backgroundColor: colors.PrimaryBackground }} />
      {loadingCheckout ? (
        <Loader section />
      ) : (
        <>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
              <Icon name="arrow-left" size={20} color={lightTheme.colors.PrimaryGrey} />
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <View style={styles.avatar}>
              {avatar && <Image source={{ uri: avatar }} style={styles.image} />}
            </View>
            <Text>
              {student?.first_name} {student?.last_name}
            </Text>
          </View>

          <View style={styles.paid}>
            <View>
              <Text>DISCOUNT</Text>
              <Text h3>
                <Currency amount={checkout?.total_discount} />
              </Text>
            </View>
            <View style={styles.seperator}></View>
            <View>
              <Text style={{ textAlign: 'right' }}>Paid</Text>
              <Text style={{ color: lightTheme.colors.PrimaryColor, textAlign: 'right' }} h3>
                <Currency amount={checkout?.total_amount_paid} />
              </Text>
            </View>
          </View>
          <View style={styles.outstanding}>
            <View>
              <Text style={{ textAlign: 'right' }}>OUTSTANDING</Text>
              <Text style={{ color: lightTheme.colors.PrimaryRed, textAlign: 'right' }} h3>
                <Currency amount={checkout?.total_balance} />
              </Text>
            </View>
          </View>
          <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={styles.restItem}>
            <View style={styles.miniHeading}>
              <Text>Invoice Items</Text>
            </View>

            {checkout?.compulsory_items?.map((item) => (
              <CompulsoryItem
                key={item.item_id}
                item={item}
                optionalInvoiceItems={optionalInvoiceItems || []}
                deleteItemFromInvoice={(payableItemId, onFail?: any) =>
                  deleteItemFromInvoice(id, payableItemId, termId, session, onFail)
                }
                checkHasPaidForItem={checkHasPaidForItem}
              />
            ))}

            <View style={styles.miniHeading}>
              <Text>Optional Items</Text>
            </View>

            {optionalInvoiceItems
              ?.filter(
                (item) =>
                  !checkout?.compulsory_items?.find((x) => x.item_id === item.payable_item?.id),
              )
              .map((item) => (
                <OptionalItems
                  key={item.id}
                  item={item}
                  addToInvoice={(request: CreateStudentInvoiceItemRequest) =>
                    addItemToInvoice(id, request)
                  }
                  loading={addingItem}
                />
              ))}

            <Button onPress={onOpen} style={styles.payment} label="Make Payment" />
          </ScrollView>
          <SafeAreaView style={{ backgroundColor: colors.PrimaryBackground }} />

          <BottomSlider isOpen={isOpen} onClose={onClose} height={height - 50}>
            <View style={{ flex: 1 }}>
              <KeyboardAwareScrollView>
                <View style={{ justifyContent: 'space-between', height: '100%' }}>
                  <View>
                    <View
                      style={{
                        padding: 20,
                        paddingBottom: 0,
                      }}
                    >
                      <Text h2>Payment Method</Text>

                      <Input
                        value={paymentAmount}
                        type="number-pad"
                        onChange={(val) => handleAmount(val)}
                        style={{ marginTop: 20, marginBottom: 10 }}
                      />
                    </View>

                    <View style={[styles.fees]}>
                      <View style={[styles.feesAmount]}>
                        <Text>TRANSACTION CHARGE</Text>
                        <Text style={{ color: lightTheme.colors.PrimaryYellow }} h1>
                          <Currency amount={charges} />
                        </Text>
                      </View>
                      <View style={[styles.feesCharge]}>
                        <Text>TOTAL AMOUNT</Text>
                        <Text h1>
                          <Currency amount={total} />
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <View style={[styles.checkButtons]}>
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

                    <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                      {paymentMethod == 'FLUTTERWAVE' ? (
                        <PayWithFlutterwave
                          onRedirect={handleFlutterRedirect}
                          options={{
                            tx_ref: config?.reference,
                            authorization: flutterwaveKey,
                            customer: {
                              email: config.email!,
                            },
                            amount: config.amount,
                            currency: 'NGN',
                            payment_options: 'card',
                            subaccounts: config?.subaccounts,
                          }}
                          customButton={(props) => (
                            <Button
                              onPress={() => submitPayment(props.onPress)}
                              isLoading={loading}
                              label="Pay now"
                            />
                          )}
                        />
                      ) : (
                        <Button
                          isLoading={loading}
                          onPress={() => submitPayment()}
                          label="Pay now"
                        />
                      )}
                    </View>
                  </View>
                </View>
              </KeyboardAwareScrollView>
            </View>
          </BottomSlider>

          <PaystackModal
            isOpen={startOnlinePayment && paymentMethod.toUpperCase() === 'PAYSTACK'}
            onSuccess={onPaystackPaymentSuccess}
            onCancel={onClosePaystackPayment}
            email={config.email}
            amount={config.amount}
            splitCode={config.splitCode}
            splitId={config.splitId}
            paymentRef={config.reference}
          />

          <PaymentVerificationModal
            isOpen={validationModalHandler.isOpen}
            safsimsTransactionRef={safsimsTransactionRef}
            amount={config.amount}
            onClose={() => {
              setSafsimsTransactionRef('');
              validationModalHandler.onClose();
            }}
            onSuccess={() => {
              setSafsimsTransactionRef('');
              validationModalHandler.onClose();
              navigation.navigate('Fees', { screen: 'FeesHome' });
            }}
          />
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subHeader: {
    height: 74,
    width: '100%',
    backgroundColor: lightTheme.colors.PrimaryBackground,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 0.6,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#9D9DB7',
  },
  avatar: {
    height: 34,
    width: 34,
    backgroundColor: '#D9D9D9',
    borderRadius: 34,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginLeft: 20,
  },
  image: {
    height: 34,
    width: 34,
    borderRadius: 34,
  },
  paid: {
    width: '100%',
    height: 74,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 0.6,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
  },
  seperator: {
    height: '60%',
    backgroundColor: lightTheme.colors.PrimaryBorderColor,
    width: 1,
  },
  outstanding: {
    height: 74,
    borderBottomWidth: 0.6,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    backgroundColor: lightTheme.colors.PrimaryWhite,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  restItem: {
    flex: 1,
    backgroundColor: lightTheme.colors.PrimaryWhite,
  },
  miniHeading: {
    justifyContent: 'center',
    height: 30,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    paddingHorizontal: 20,
  },
  payment: {
    width: '85%',
    marginVertical: 30,
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
  checkButtons: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});
