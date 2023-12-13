import { SwapIcon } from '@safsims/components/Images';
import Select from '@safsims/components/Select/Select';
import Text from '@safsims/components/Text/Text';
import { lightTheme } from '@safsims/utils/Theme';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function TimeTableStudentHeader({
  student,
  session,
  selectTermOptions,
  termValue,
  selectSessionOptions,
  swapStudent,
  changeTerm,
  setTermOptions,
  showFilter = true,
}) {
  return (
    <View style={[styles.container, { height: showFilter ? 129 : 70 }]}>
      <View style={[styles.student, { height: showFilter ? 159 : 90 }]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            console.log(termValue, session);
          }}
          style={[styles.constainer2]}
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
          <TouchableOpacity onPress={() => swapStudent()} style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 12, color: lightTheme.colors.PrimaryGrey, marginRight: 3 }}>
              Swap Child
            </Text>
            <SwapIcon />
          </TouchableOpacity>
        </TouchableOpacity>

        {showFilter && (
          <View style={styles.session}>
            <Select
              onChange={(value) => {
                setTermOptions(value.value);
                console.log(value);
                // setSelectTermOptions(groupedTermsBySessions[currentTerm?.session?.id || '']);
              }}
              value={session}
              style={styles.select}
              options={selectSessionOptions}
              label="Session"
            />
            <View style={styles.divider} />
            <Select
              onChange={(val) => {
                changeTerm(val);
              }}
              value={termValue}
              style={styles.select}
              options={selectTermOptions}
              label="Term"
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 129,
    backgroundColor: lightTheme.colors.PrimaryColor,
    width: '100%',
    padding: 20,
  },
  student: {
    height: 157,
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderRadius: 10,
    transform: [{ translateY: 10 }],
  },
  constainer2: {
    height: 62,
    padding: 20,
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    borderBottomWidth: 1,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
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
  session: {
    height: 'auto',
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  select: {
    width: '40%',
    borderWidth: 0,
    elevation: 0,
  },
  divider: {
    height: 50,
    width: 1,
    backgroundColor: lightTheme.colors.PrimaryBorderColor,
    marginTop: 'auto',
  },
});
