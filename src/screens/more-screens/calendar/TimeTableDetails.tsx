import EmptyState from '@safsims/components/EmptyState/EmptyState';
import Icon from '@safsims/components/Icon/Icon';
import { EmptyPaper } from '@safsims/components/Images';
import Loader from '@safsims/components/Loader/Loader';
import Text from '@safsims/components/Text/Text';
import useCurrentTermGet from '@safsims/general-hooks/useCurrentTermGet';
import useTermAttendedByStudentGet from '@safsims/parent-hooks/useTermAttendedByStudentGet';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { lightTheme } from '@safsims/utils/Theme';
import { SelectOptionType } from '@safsims/utils/types';
import moment from 'moment';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import TimeTableCard from './components/TimeTableCard';
import TimeTableHeader from './components/TimeTableHeader';
import TimeTableStudentHeader from './components/TimeTableStudentHeader';
import useGetTimeTable from './hooks/useGetTimeTable';
const MemoizedTimeTableCard = React.memo(TimeTableCard);

export default function TimeTableDetails({ navigation, route }) {
  const { index } = route.params;
  const parent = useAppSelector((state) => state.user?.parent);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);
  const DAYS = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  const children = parent?.linked_students || [];
  const memoizedChildren = useMemo(() => parent?.linked_students || [], [parent]);
  const [activeChild, setActiveChild] = useState(index);
  const [filteredTimeTable, setFilteredTimeTable] = useState(undefined);

  const { groupedTermsBySessions, loading } = useTermAttendedByStudentGet({
    studentId: memoizedChildren[activeChild].student?.id,
  });

  const { currentTerm, loading: loadingTerm } = useCurrentTermGet();
  const [selectTermOptions, setSelectTermOptions] = useState<any>([]);
  const [selectSessionOptions, setSelectSessionOptions] = useState<any>([]);
  const swapStudent = () => {
    if (activeChild < children.length - 1) {
      setActiveChild((prev) => prev + 1);
    } else {
      setActiveChild(0);
    }
  };
  const [termValue, setTermValue] = useState<SelectOptionType>({
    label: '',
    extra: '',
    value: '',
  });
  const [sessionValue, setSessionValue] = useState<SelectOptionType>({
    label: '',
    value: '',
  });
  const { getTimeTable, timeTabel, loading: loadingTimeTable } = useGetTimeTable();
  const handleLeftArrowPress = useCallback(() => {
    if (currentDay !== 0) {
      setCurrentDay((prev) => prev - 1);
    } else {
      setCurrentDay(DAYS.length - 1);
    }
  }, [currentDay]);
  const handleRightArrowPress = useCallback(() => {
    if (currentDay < DAYS.length - 1) {
      setCurrentDay((prev) => prev + 1);
    } else {
      setCurrentDay(0);
    }
  }, [currentDay]);
  useEffect(() => {
    if (!loading && !loadingTerm && currentTerm) {
      setTermValue({
        label: currentTerm?.school_term_definition?.term_definition?.description || '',
        extra: currentTerm?.school_term_definition?.definition_order || '',
        value: currentTerm?.term_id,
      });
      setSessionValue({
        label: currentTerm?.session?.id || '',
        value: groupedTermsBySessions[currentTerm?.session?.id || ''],
      });
      setSelectTermOptions(groupedTermsBySessions[currentTerm?.session?.id || '']);
      const sessionOptions = Object.keys(groupedTermsBySessions).map((item) => ({
        label: item,
        value: groupedTermsBySessions[item],
      }));
      setSelectSessionOptions(sessionOptions);
      getTimeTable({ studentId: children[activeChild].student?.id, termId: currentTerm?.term_id });
    }
  }, [loading, loadingTerm, currentTerm, memoizedChildren]);

  useEffect(() => {
    if (timeTabel) {
      const myDay = moment().weekday();
      const filtered = timeTabel.time_table_periods?.filter(
        (period) => period.day_of_week == DAYS[myDay - 1],
      );
      setFilteredTimeTable(filtered);

      if (myDay !== 0) {
        setCurrentDay(myDay - 1);
      } else {
        setCurrentDay(DAYS.length - 1);
      }
    }
  }, [loadingTimeTable]);

  useEffect(() => {
    if (timeTabel) {
      const filtered = timeTabel.time_table_periods?.filter(
        (period) => period.day_of_week == DAYS[currentDay],
      );
      setFilteredTimeTable(filtered);
    }
  }, [currentDay]);

  useEffect(() => {
    if (termValue?.value && children && !loadingTerm) {
      getTimeTable({ studentId: children[activeChild].student?.id, termId: termValue?.value });
    }
  }, [termValue]);

  return (
    <View style={styles.container}>
      {loading || loadingTerm ? (
        <Loader />
      ) : (
        <>
          <TimeTableHeader name={termValue?.label} short_name="Time table" />
          <TimeTableStudentHeader
            setTermOptions={setSelectTermOptions}
            changeTerm={setTermValue}
            swapStudent={() => setModalOpen(true)}
            student={children[activeChild].student}
            selectTermOptions={selectTermOptions}
            termValue={termValue}
            session={sessionValue}
            selectSessionOptions={selectSessionOptions}
          />
          <View style={styles.container2}>
            <View style={styles.head}>
              <TouchableOpacity onPress={handleLeftArrowPress} style={styles.icon}>
                <Icon name="arrow-left" size={20} color="#000" />
              </TouchableOpacity>

              <Text h3>{DAYS[currentDay]}</Text>

              <TouchableOpacity onPress={handleRightArrowPress} style={styles.icon}>
                <Icon name="arrow-right-1" size={20} color="#000" />
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
              {filteredTimeTable?.map((table, ind) => (
                <MemoizedTimeTableCard key={ind} table={table} />
              ))}
              {filteredTimeTable?.length == 0 && (
                <EmptyState Image={<EmptyPaper />} info="No Classess today" title="No Lecture" />
              )}
              {filteredTimeTable == undefined && !loadingTimeTable && (
                <EmptyState
                  Image={<EmptyPaper />}
                  info="Time table not set!"
                  title="Time table not set for this term"
                />
              )}
            </ScrollView>
          </View>
        </>
      )}
      <Modal statusBarTranslucent transparent animationType={'slide'} visible={modalOpen}>
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => setModalOpen(false)} style={styles.close}>
            <Text>X</Text>
          </TouchableOpacity>
          <View style={styles.mainItem}>
            <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>Swap Child</Text>
            <Text style={{ marginLeft: 20, marginRight: 20 }}>
              This enables you switch between your children's profile
            </Text>

            <ScrollView
              style={styles.modalContent}
              contentContainerStyle={{ paddingHorizontal: 20 }}
            >
              {children.map((individualChild, ind) => (
                <TouchableOpacity
                  onPress={() => {
                    setActiveChild(ind);

                    setModalOpen(false);
                  }}
                  key={ind}
                  style={styles.childList}
                >
                  <Image
                    style={styles.childListImage}
                    source={{ uri: individualChild.student?.profile_pic }}
                  />
                  <View>
                    <Text>
                      {individualChild.student?.first_name} {individualChild.student?.other_names}
                    </Text>
                    <Text>
                      {individualChild.student?.class_level_name}{' '}
                      {individualChild.student?.arm_name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
    padding: 20,
    marginTop: 70,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    height: 66,
    paddingHorizontal: 10,
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 36,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '100%',
    height: Dimensions.get('window').height + 60,
    backgroundColor: 'rgba(0,0,0,0.5)',

    paddingBottom: 0,
  },
  close: {
    height: 34,
    width: 34,
    backgroundColor: '#fff',
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginRight: 20,
  },
  mainItem: {
    height: 300,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  modalContent: {
    flex: 1,
    borderTopColor: lightTheme.colors.PrimaryBorderColor,
    borderTopWidth: 1,
    marginVertical: 20,
  },
  childList: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
  },
  childListImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    marginRight: 20,
  },
});
