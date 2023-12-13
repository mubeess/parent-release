import AppHeader from '@safsims/components/Header/AppHeader';
import Text from '@safsims/components/Text/Text';
import useCurrentTermGet from '@safsims/general-hooks/useCurrentTermGet';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { lightTheme } from '@safsims/utils/Theme';
import { ScrollView, StyleSheet, View } from 'react-native';
import StudentList from '../calendar/components/StudentList';

export default function AttendanceHomeScreen({ navigation }) {
  const parent = useAppSelector((state) => state.user?.parent);
  const children = parent?.linked_students || [];
  const { currentTerm, loading: loadingTerm } = useCurrentTermGet();

  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} />
      <View style={styles.session}>
        <View>
          <Text style={{ fontWeight: 'bold' }}>SESSION</Text>
          <View>
            <Text>{currentTerm?.session?.name}</Text>
          </View>
        </View>

        <View style={styles.divider} />
        <View>
          <Text style={{ fontWeight: 'bold' }}>TERM</Text>
          <View>
            <Text>{currentTerm?.school_term_definition?.name}</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }} style={styles.students}>
        {children.map((child, ind) => (
          <StudentList route="AttendanceDetails" student={child.student} key={ind} index={ind} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  session: {
    height: 100,
    width: '100%',
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: lightTheme.colors.PrimaryBorderColor,
    borderTopWidth: 1,
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
  students: {
    flex: 1,
  },
});
