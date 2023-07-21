import { useTheme } from '@react-navigation/native';
import Input from '@safsims/components/Input/Input';
import Text from '@safsims/components/Text/Text';
import { lightTheme } from '@safsims/utils/Theme';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const OfflineStudentItem = ({ student, removeStudent, editStudent }) => {
  const { colors } = useTheme();
  const [amount, setAmount] = useState<any>(student.amount);

  useEffect(() => {
    setAmount(student.amount)
  }, [student.amount])

  return (
    <View key={student?.id} style={styles.student}>
      <View style={styles.studentInfo}>
        <View style={styles.mainInfo}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: student.profile_picture || '',
              }}
              style={styles.image}
            />
          </View>

          <View>
            <Text>
              {student.first_name} {student.last_name}
            </Text>
            <Text style={{ color: colors.PrimaryBlue }}>{student.student_id}</Text>
            <Text>
              {student.class_level_name} {student.arm_name}
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => removeStudent(student.id)} style={styles.icon}>
          <Text>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.paymentDetails}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.alat}>
            <Text style={{ color: colors.PrimaryWhite }} h3>
              !
            </Text>
          </View>
          <Text style={{ color: colors.PrimaryRed }} h3>
            N10,000
          </Text>
        </View>

        <Input
          type="number-pad"
          style={{
            width: '50%',
            height: 50,
          }}
          value={amount}
          onChange={(e) => {
            const val = Number(e.replace(/[^0-9]/gi, ''));
            setAmount(val);
            editStudent({ ...student, amountToPay: val });
          }}
        />
      </View>
    </View>
  );
};

export default OfflineStudentItem;

const styles = StyleSheet.create({
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
