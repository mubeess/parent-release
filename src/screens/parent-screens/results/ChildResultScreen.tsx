import { useTheme } from '@react-navigation/native';
import AppHeader from '@safsims/components/Header/AppHeader';
import Text from '@safsims/components/Text/Text';
import useCurrentTermGet from '@safsims/general-hooks/useCurrentTermGet';
import useLogAnalytics from '@safsims/general-hooks/useLogAnalytics';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { lightTheme } from '@safsims/utils/Theme';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ResultCard from './components/ResultCard';

const ChildResultScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { currentTerm } = useCurrentTermGet();
  const { logEvent } = useLogAnalytics();
  const parent = useAppSelector((state) => state.user?.parent);
  const children = parent?.linked_students || [];
  useEffect(() => {
    logEvent('resultScreen');
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <AppHeader navigation={navigation} pageTitle="Results" />
      <View style={styles.session}>
        <View style={{ width: '45%' }}>
          <Text style={{ fontWeight: 'bold' }}>SESSION</Text>
          <View>
            <Text>{currentTerm?.session?.name}</Text>
          </View>
        </View>

        <View style={styles.divider} />
        <View style={{ width: '45%', alignItems: 'flex-end' }}>
          <Text style={{ fontWeight: 'bold' }}>TERM</Text>
          <View>
            <Text>{currentTerm?.school_term_definition?.name}</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: 20 }}>
            {children.map((child) => (
              <ResultCard
                student={child.student}
                key={child?.student?.id}
                onPress={() =>
                  navigation.navigate('ResultDetails', {
                    id: child?.student?.id,
                    term: currentTerm,
                    student: child.student,
                  })
                }
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ChildResultScreen;

const styles = StyleSheet.create({
  banner: {
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerHead: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  bannerText: {
    maxWidth: '95%',
  },
  recordButton: {
    marginTop: 10,
    borderRadius: 3,
    backgroundColor: lightTheme.colors.PrimaryFontColor,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
  check: {
    height: 18,
    width: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginRight: 10,
    elevation: 5,
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
});
