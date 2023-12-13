import { useNavigation } from '@react-navigation/native';
import { LinkIcon } from '@safsims/components/Images';
import Text from '@safsims/components/Text/Text';
import { StudentDto } from '@safsims/generated';
import { lightTheme } from '@safsims/utils/Theme';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function StudentList({
  student,
  index = 0,
  route = 'TimeTableDetail',
}: {
  student: StudentDto;
  index: number;
  route?: string;
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(route, { index })}
      style={styles.constainer}
    >
      <View style={styles.details}>
        <Image
          source={{
            uri: student.profile_pic,
          }}
          style={styles.image}
        />
        <View>
          <Text style={{ fontWeight: 'bold' }}>
            {student.first_name} {student.other_names}
          </Text>
          <Text style={{ color: lightTheme.colors.PrimaryGrey }}>
            {student.class_level_name} | {student.arm_name}
          </Text>
        </View>
      </View>
      <LinkIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  constainer: {
    height: 62,
    padding: 20,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
