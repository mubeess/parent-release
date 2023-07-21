import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@react-navigation/native';
import Button from '@safsims/components/Button/Button';
import EmptyState from '@safsims/components/EmptyState/EmptyState';
import Icon from '@safsims/components/Icon/Icon';
import { EmptyFilter } from '@safsims/components/Images';
import InfiniteScrollView from '@safsims/components/InfiniteScrollView/InfiniteScrollView';
import Input from '@safsims/components/Input/Input';
import SafeAreaComponent from '@safsims/components/SafeAreaComponent/SafeAreaComponent';
import Text from '@safsims/components/Text/Text';
import { BasicSchoolInformationDto } from '@safsims/generated';
import { updateAppConfigState } from '@safsims/redux/configuration/actions';
import { setSchoolId } from '@safsims/utils/constants';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import SchoolItem from './components/SchoolItem';
import useAllSchoolsGet from './hooks/useAllSchoolsGet';

export default function SelectSchoolScreen({ navigation }) {
  const [current, setCurr] = useState<BasicSchoolInformationDto | undefined>(undefined);
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const { loading, infiniteScrollCallback, schools, searchText, setSearchText } =
    useAllSchoolsGet();

  return (
    <View style={[styles.container, { backgroundColor: colors.PrimaryBackground }]}>
      <SafeAreaComponent />
      <View style={styles.schoolContent}>
        <View style={styles.head}>
          <Text h1>Search & select school</Text>
          <Text>Search out and then select which school your children attend</Text>
        </View>
        <Input
          value={searchText}
          onChange={(text) => {
            setSearchText(text);
          }}
          IconLeft={<Icon name="search-normal" size={15} />}
          placeholder="Search your child’s school"
        />

        <View style={styles.info}>
          <Icon name="info-circle" size={20} />
          <Text style={{ marginLeft: 5, flexWrap: 'wrap', width: '95%' }}>
            Type in the name of your school and select from the list displayed below
          </Text>
        </View>
        {schools.length > 0 && (
          <InfiniteScrollView
            fetching={loading}
            callback={infiniteScrollCallback}
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 20 }}
          >
            {schools.map((school, index) => (
              <SchoolItem
                key={index}
                onPress={() => setCurr(school)}
                selected={current?.school_id === school.school_id}
                slogan={school.motto}
                name={school.school_name!}
                logo={school.logo!}
              />
            ))}
          </InfiniteScrollView>
        )}

        {schools.length === 0 && (
          <EmptyState
            Image={<EmptyFilter />}
            title="Nothing to see here"
            info="Search for your child's school"
          />
        )}
        <Button
          onPress={async () => {
            dispatch(
              updateAppConfigState({
                selectedSchool: current,
              }),
            );
            setSchoolId(current?.school_id!);
            await AsyncStorage.setItem('school_id', current?.school_id!);
            navigation.navigate('Login');
          }}
          disabled={!current}
          fontStyle={{ color: !current ? '#000' : colors.PrimaryWhite }}
          style={{
            marginTop: 'auto',
            backgroundColor: !current ? colors.PrimaryBorderColor : colors.PrimaryColor,
            opacity: !current ? 0.5 : 1,
          }}
          label="Continue"
        />
      </View>
      <SafeAreaComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  schoolContent: {
    paddingHorizontal: 20,
    flex: 1,
    paddingBottom: 20,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
  },
  head: {
    marginVertical: 30,
  },
});
