import { useTheme } from '@react-navigation/native';
import AppHeader from '@safsims/components/Header/AppHeader';
import Icon from '@safsims/components/Icon/Icon';
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
    <View style={{ flex: 1, backgroundColor: colors.PrimaryBackground }}>
      <AppHeader navigation={navigation} pageTitle="Results" />
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              borderColor: colors.PrimaryBorderColor,
              padding: 20,
              //   marginVertical: 20,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
              <Icon name="calendar" />
              <Text style={{ textTransform: 'capitalize', marginLeft: 5 }}>Current Session</Text>
            </View>
            <Text
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: 24,
                color: colors.PrimaryFontColor,
              }}
            >
              {currentTerm?.session?.name}
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: colors.PrimaryBorderColor,
              padding: 20,
              marginBottom: 20,
            }}
          >
            <Text style={{ textTransform: 'capitalize', marginBottom: 5 }}>Current Term</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
              <Icon name="calendar" />
              <Text style={{ textTransform: 'uppercase', marginLeft: 5 }}>
                {currentTerm?.school_term_definition?.name} - {currentTerm?.session?.name}
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, paddingHorizontal: 20 }}>
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
});
