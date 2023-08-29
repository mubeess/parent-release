import { useTheme } from '@react-navigation/native';
import BottomSlider from '@safsims/components/BottomSlider/BottomSlider';
import Button from '@safsims/components/Button/Button';
import Currency from '@safsims/components/Currency/Currency';
import DatePicker from '@safsims/components/DatePicker/DatePicker';
import { UploadIcon } from '@safsims/components/Images';
import Input from '@safsims/components/Input/Input';
import Select from '@safsims/components/Select/Select';
import Text from '@safsims/components/Text/Text';
import useGetBanks from '@safsims/general-hooks/useGetBanks';
import { BasicStudentInfo } from '@safsims/generated';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { lightTheme } from '@safsims/utils/Theme';
import { returnUpdatedList } from '@safsims/utils/utils';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import { Platform, StyleSheet, View, useWindowDimensions } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import OfflineStudentItem from '../components/OfflineStudentItem';
import useOfflinePaymentPost from '../hooks/useOfflinePaymentPost';

type Values = {
  bank: string;
  accountNumber: string;
  tellerNumber: string;
  accountName: string;
  amountPaid: string | number;
  paymentDate: moment.Moment | undefined;
};

type IStudent = Partial<BasicStudentInfo> & { amount?: number; amountToPay?: number };

export default function RecordBankPaymentModal({ isOpen, onClose, termId, students }) {
  const [image, setImage] = useState<any>();
  const { colors } = useTheme();

  const pickImage = async () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response) {
        setImage(response.assets?.[0]);
      }
    });
  };

  const { height: SCREEN_HEIGHT } = useWindowDimensions();

  const { banks } = useGetBanks();

  const initialState = {
    bank: '',
    accountNumber: '',
    tellerNumber: '',
    accountName: '',
    amountPaid: '',
    paymentDate: undefined,
  };
  const [values, setValues] = useState<Values>(initialState);

  const handleChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: name === 'amountPaid' ? Number(value.replace(/[^0-9]/gi, '')) : value,
    }));
  };

  const initialStudents: IStudent[] = useMemo(
    () =>
      students.map((item) => ({
        ...item,
        amountToPay: item.amount,
      })),
    [students],
  );

  const [studentList, setStudentList] = useState<IStudent[]>(initialStudents);
  const totalPerChild = studentList.reduce((t, a) => t + (a.amountToPay || 0), 0);

  const currentUser = useAppSelector((state) => state.user.currentUser);
  const { posting, postPayment } = useOfflinePaymentPost();

  const reset = () => {
    setStudentList([]);
    setStudentList(initialStudents);
  };

  const Close = () => {
    reset();
    setValues(initialState);
    onClose();
  };

  const submitData = () => {
    const request = {
      bank_code: values.bank,
      account_number: values.accountNumber,
      teller_number: values.tellerNumber,
      account_name: values.accountName,
      amount_paid: values.amountPaid,
      payment_date: values.paymentDate?.format('YYYY-MM-DD'),
      term_id: termId,
      parent_id: currentUser?.parent_id,
      student_breakdown_request_list: studentList.map((item) => ({
        student_id: item.id,
        amount: item.amountToPay,
      })),
    };
    const data = new FormData();
    data.append('teller', {
      // @ts-ignore
      name: image?.fileName || '',
      type: image?.type || '',
      uri: Platform.OS === 'ios' ? image?.uri?.replace('file://', '') : image?.uri,
      size: image?.fileSize!,
    });
    data.append('parent-offline-payment', JSON.stringify(request));
    postPayment(data, Close);
  };

  useEffect(() => {
    setStudentList(initialStudents);
  }, [initialStudents]);

  const removeStudent = (id) => {
    if (studentList.length > 1) {
      setStudentList((prev) => prev.filter((item) => item.id !== id));
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'You have to select at least one student.',
      });
    }
  };

  const editStudent = (student) => {
    const newList = returnUpdatedList(student, studentList, 'id');
    setStudentList([...newList]);
  };

  const onSubmit = () => {
    if (!values.accountName || !values.accountNumber || !values.amountPaid || !values.bank) {
      return Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fill all required fields',
      });
    }
    if (
      !values.tellerNumber.length
      // && File === null
    ) {
      return Toast.show({
        type: 'error',
        text1: 'Please input your teller number',
        text2: 'or upload a proof of payment',
      });
    }
    if (totalPerChild < parseInt(`${values.amountPaid}`)) {
      return Toast.show({
        type: 'error',
        text1: 'The total breakdown cannot be',
        text2: 'less than the total amount paid',
      });
    }
    if (totalPerChild > parseInt(`${values.amountPaid}`)) {
      return Toast.show({
        type: 'error',
        text1: 'The total breakdown cannot be',
        text2: 'more than the total amount paid',
      });
    }
    // if (isMulti && totalBalance > values.amountPaid) {
    //   return Notify('You cannot pay less than the total amount.', {
    //     status: 'error',
    //   });
    // }
    submitData();
  };

  return (
    <BottomSlider height={SCREEN_HEIGHT - 150} isOpen={isOpen} onClose={onClose}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title} h2>
            Record Bank Payment
          </Text>
          <Text>
            By recording all payment you made to banks, the school can freely crosscheck their books
            without disturbing you.
          </Text>
        </View>
        <View style={styles.divider}></View>
        <KeyboardAwareScrollView
          style={styles.scrollStyle}
          contentContainerStyle={styles.scrollContent}
        >
          <Select
            label="Select Bank"
            required
            placeholder="Select bank"
            options={banks.map((bank) => ({
              label: bank.name!,
              value: bank.bank_code,
            }))}
            onChange={(val) =>
              setValues((prev) => ({
                ...prev,
                bank: val.value,
              }))
            }
          />
          <Input
            Icon={<Text style={styles.iconText}>A-Z</Text>}
            style={styles.input}
            value={values.accountName}
            onChange={(val) => handleChange('accountName', val)}
            placeholder="Enter Acount Name"
            required
            label="School Account Name"
          />
          <Input
            Icon={<Text style={styles.iconText}>0-9</Text>}
            type="number-pad"
            style={styles.input}
            value={values.accountNumber}
            onChange={(val) => handleChange('accountNumber', val)}
            placeholder="Enter Acount Number"
            required
            label="School Account Number"
          />
          <Input
            Icon={<Text style={styles.iconText}>A-Z</Text>}
            style={styles.input}
            value={values.tellerNumber}
            onChange={(val) => handleChange('tellerNumber', val)}
            placeholder="Enter Teller Number"
            label="Teller Number"
          />
          <Input
            style={styles.input}
            value={values.amountPaid}
            onChange={(val) => handleChange('amountPaid', val)}
            placeholder="Enter Amount"
            required
            label="Amount Paid"
            type="numeric"
          />

          <DatePicker
            required
            label="Payment Date"
            style={styles.input}
            value={values.paymentDate}
            onChange={(val) => handleChange('paymentDate', val)}
          />
          <View style={styles.uploadConatiner}>
            <View style={styles.uploadIcon}>
              <UploadIcon />
            </View>
            <Text h3>Upload files here</Text>
            <Button onPress={pickImage} style={{ marginVertical: 15 }} label="Browse Files" />
            <Text>Maximum size 2.5mb</Text>

            {image && (
              <Text style={{ marginTop: 5, color: colors.PrimaryGreen }}>File selected</Text>
            )}
          </View>

          <View style={styles.amount}>
            <Text>Total Breackdown:</Text>
            <Text style={{ fontSize: 14 }} h3>
              <Currency amount={totalPerChild} />
            </Text>
          </View>

          {studentList.map((student) => (
            <OfflineStudentItem
              student={student}
              key={student.id}
              editStudent={editStudent}
              removeStudent={removeStudent}
            />
          ))}
        </KeyboardAwareScrollView>
        <View style={styles.divider}></View>
        <View style={styles.buttons}>
          <Button pale onPress={onClose} style={{ width: '40%' }} label="Cancel" />
          <Button
            onPress={onSubmit}
            isLoading={posting}
            style={{ width: '40%' }}
            label="Submit Record"
          />
        </View>
      </View>
    </BottomSlider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.colors.PrimaryBackground,
  },
  title: {
    fontWeight: '600',
    marginBottom: 10,
  },
  header: {
    padding: 20,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: lightTheme.colors.PrimaryBorderColor,
  },
  scrollStyle: {
    flex: 1,
  },
  scrollContent: {
    backgroundColor: lightTheme.colors.PrimaryBackground,
    padding: 20,
  },
  buttons: {
    height: 150,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    flexDirection: 'row',
    paddingVertical: 20,
  },
  input: {
    marginTop: 20,
  },
  iconText: {
    color: lightTheme.colors.PrimaryGrey,
    fontSize: 10,
  },
  uploadConatiner: {
    minHeight: 250,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderStyle: 'dashed',
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
  },
  uploadIcon: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderStyle: 'dashed',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  student: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginTop: 10,
    // paddingVertical: 20,
  },
  studentInfo: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    marginRight: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  mainInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: lightTheme.colors.PrimaryBackground,
    padding: 20,
    alignItems: 'center',
    // paddingVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  alat: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: lightTheme.colors.PrimaryRed,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
