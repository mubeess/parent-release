import Button from '@safsims/components/Button/Button';
import EmptyState from '@safsims/components/EmptyState/EmptyState';
import Icon from '@safsims/components/Icon/Icon';
import { ClassEmptyState } from '@safsims/components/Images';
import Loader from '@safsims/components/Loader/Loader';
import Select from '@safsims/components/Select/Select';
import Text from '@safsims/components/Text/Text';
import useCurrentTermGet from '@safsims/general-hooks/useCurrentTermGet';
import useSubjectsByClassLevelsFetch from '@safsims/general-hooks/useSubjectsByClassLevelFetch';
import { StudentSubjectAttendanceResponse } from '@safsims/generated';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { lightTheme } from '@safsims/utils/Theme';
import { SelectOptionType } from '@safsims/utils/types';
import moment from 'moment';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import TimeTableHeader from '../calendar/components/TimeTableHeader';
import TimeTableStudentHeader from '../calendar/components/TimeTableStudentHeader';
import AttendanceCard from './components/AttendanceCard';
import ClassAttendanceCard from './components/ClassAttendanceCard';
import useGetClassAttendance from './hooks/useGetClassAttendance';
import useGetSubjectAttendance from './hooks/useGetSubjectAttendance';

export default function AttendanceDetails({ route }) {
  const { index } = route.params;
  const parent = useAppSelector((state) => state.user?.parent);
  const [activeAttendance, setActiveAttendance] = useState(0);
  const [curreMonth, setCurrentMonth] = useState(moment().month());
  const MONTHS = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ];
  const children = parent?.linked_students || [];
  const memoizedChildren = useMemo(() => parent?.linked_students || [], [parent]);
  const [activeChild, setActiveChild] = useState(index);
  const [classSubject, setClassSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState({});

  const { getAttendance, attendance, loading } = useGetSubjectAttendance();
  const { getClassAttendance, classAttendance, loadingClassAttendance } = useGetClassAttendance();
  const [modalOpen, setModalOpen] = useState(false);
  const { currentTerm, loading: loadingTerm } = useCurrentTermGet();
  const [selectTermOptions, setSelectTermOptions] = useState<any>([]);
  const [selectSessionOptions, setSelectSessionOptions] = useState<any>([]);
  const { subjects, loadingSubjects, fetchSubjects } = useSubjectsByClassLevelsFetch({
    classLevelId: memoizedChildren[activeChild].student?.class_level_id || '',
    armId: memoizedChildren[activeChild].student?.arm_id || '',
    termId: currentTerm?.term_id,
  });

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
  // const { getTimeTable, timeTabel, loading: loadingTimeTable } = useGetTimeTable();
  const handleLeftArrowPress = useCallback(() => {
    if (curreMonth !== 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(MONTHS.length - 1);
    }
  }, [curreMonth]);
  const handleRightArrowPress = useCallback(() => {
    if (curreMonth < MONTHS.length - 1) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
    }
  }, [curreMonth]);

  useEffect(() => {
    if (subjects.length > 0) {
      const filteredSubject = [];
      subjects.map((subject) => {
        filteredSubject.push({ label: subject.subject_name, value: subject.id });
      });
      setClassSubjects(filteredSubject);
      if (filteredSubject.length > 0) {
        setSelectedSubject(filteredSubject[0]);
      }
    }
  }, [loadingSubjects]);

  useEffect(() => {
    if (memoizedChildren.length > 0 && selectedSubject.value) {
      getAttendance({
        armId: memoizedChildren[activeChild].student?.arm_id,
        classLevelId: memoizedChildren[activeChild].student?.class_level_id,
        studentId: memoizedChildren[activeChild].student?.id,
        month: curreMonth,
      });

      getClassAttendance({
        armId: memoizedChildren[activeChild].student?.arm_id,
        classLevelId: memoizedChildren[activeChild].student?.class_level_id,
        studentId: memoizedChildren[activeChild].student?.id,
        month: curreMonth,
      });
    }
  }, [memoizedChildren, curreMonth, activeChild]);

  return (
    <View style={styles.container}>
      {loadingTerm ? (
        <Loader />
      ) : (
        <>
          <TimeTableHeader
            name={currentTerm?.school_term_definition?.name}
            short_name="Attendance"
          />
          <TimeTableStudentHeader
            showFilter={false}
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
            <View style={styles.buttons}>
              <Button
                onPress={() => {
                  setActiveAttendance(0);
                }}
                fontStyle={{
                  color: activeAttendance == 0 ? '#fff' : lightTheme.colors.PrimaryColor,
                }}
                style={{
                  ...styles.button,
                  backgroundColor: activeAttendance == 0 ? lightTheme.colors.PrimaryColor : '#fff',
                  borderWidth: activeAttendance == 1 ? 1 : 0,
                  borderColor: lightTheme.colors.PrimaryColor,
                }}
                label="Subject Attendace"
              />
              <Button
                onPress={() => setActiveAttendance(1)}
                fontStyle={{
                  color: activeAttendance == 1 ? '#fff' : lightTheme.colors.PrimaryColor,
                }}
                style={{
                  ...styles.button,
                  backgroundColor: activeAttendance == 1 ? lightTheme.colors.PrimaryColor : '#fff',
                  borderWidth: activeAttendance == 0 ? 1 : 0,
                  borderColor: lightTheme.colors.PrimaryColor,
                }}
                label="Class Attendace"
              />
            </View>
            {activeAttendance == 0 && (
              <Select
                value={selectedSubject}
                style={{ marginVertical: 10 }}
                onChange={(val) => {
                  setSelectedSubject(val);
                }}
                label="Subjects"
                options={classSubject}
              />
            )}
            <View style={styles.head}>
              <TouchableOpacity onPress={handleLeftArrowPress} style={styles.icon}>
                <Icon name="arrow-left" size={20} color="#000" />
              </TouchableOpacity>

              <Text h3>{MONTHS[curreMonth]}</Text>

              <TouchableOpacity onPress={handleRightArrowPress} style={styles.icon}>
                <Icon name="arrow-right-1" size={20} color="#000" />
              </TouchableOpacity>
            </View>
            <ScrollView
              contentContainerStyle={styles.content}
              showsVerticalScrollIndicator={false}
              style={{ flex: 1 }}
            >
              {activeAttendance == 0 && (
                <>
                  {loading && <Loader />}
                  {!loading && attendance?.length == 0 && (
                    <EmptyState
                      Image={<ClassEmptyState />}
                      info="No Attendance"
                      title="Attendance not taken"
                    />
                  )}
                  {attendance.map((singleAttendance: StudentSubjectAttendanceResponse, ind) => (
                    <AttendanceCard
                      selectedSubject={selectedSubject?.value || ''}
                      data={singleAttendance}
                      key={ind}
                    />
                  ))}
                </>
              )}

              {activeAttendance == 1 && (
                <>
                  {loadingClassAttendance && <Loader />}
                  {!loadingClassAttendance && classAttendance?.length == 0 && (
                    <EmptyState
                      Image={<ClassEmptyState />}
                      info="No Attendance"
                      title="Attendance not taken"
                    />
                  )}
                  {classAttendance.map((studentAttendance, ind) => (
                    <ClassAttendanceCard data={studentAttendance} key={ind} />
                  ))}
                </>
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
  buttons: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 0,
    marginRight: 0,
    width: '50%',
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
