import Avatar from '@safsims/components/Avatar/Avatar';
import { StudentDto } from '@safsims/generated';
import { lightTheme } from '@safsims/utils/Theme';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from '../../../../components/Icon/Icon';
import Text from '../../../../components/Text/Text';

interface ResultCardProps {
  onPress?: () => void;
  student: StudentDto | undefined;
  style?: ViewStyle;
}

export default function ResultCard({ onPress, style, student }: ResultCardProps) {
  const avatar = student?.profile_pic;
  const name = `${student?.first_name} ${student?.surname} `;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.resultCardContainer, style]}
    >
      <View style={styles.userDetail}>
        <View style={styles.nameContainer}>
          <Avatar image={avatar} size={34} style={{ marginRight: 10 }} />
          <View>
            <Text h3>{name}</Text>
            <Text>{student?.student_id}</Text>
          </View>
        </View>
        <Icon size={30} name="arrow-right" color={lightTheme.colors.PrimaryGrey} />
      </View>

      <View style={styles.grades}>
        <View
          style={[
            styles.gradesContainer,
            { borderRightColor: lightTheme.colors.PrimaryBorderColor, borderRightWidth: 1 },
          ]}
        >
          <Text style={styles.label}>Class Level</Text>
          <Text h3>{student?.class_level_name}</Text>
        </View>
        <View style={styles.gradesContainer}>
          <Text style={styles.label}>Class Arm</Text>
          <Text h3>{student?.arm_name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  resultCardContainer: {
    height: 144,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    marginBottom: 20,
  },
  userDetail: {
    height: 66,
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  grades: {
    flex: 1,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    borderTopWidth: 1,
    borderTopColor: lightTheme.colors.PrimaryBorderColor,
    flexDirection: 'row',
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
  },
  nameContainer: {
    flexDirection: 'row',
  },
  icon: {
    height: 30,
    width: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradesContainer: {
    width: '50%',
    backgroundColor: lightTheme.colors.PrimaryBackground,
    height: '100%',
    padding: 10,
  },
  label: {
    textTransform: 'uppercase',
  },
  image: {
    height: 34,
    width: 34,
    borderRadius: 34,
  },
});
