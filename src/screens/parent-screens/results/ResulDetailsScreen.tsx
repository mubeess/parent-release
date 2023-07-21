import { useTheme } from '@react-navigation/native';
import Button from '@safsims/components/Button/Button';
import EmptyState from '@safsims/components/EmptyState/EmptyState';
import AppSubHeader from '@safsims/components/Header/AppSubHeader';
import Icon from '@safsims/components/Icon/Icon';
import { Student } from '@safsims/components/Images';
import Loader from '@safsims/components/Loader/Loader';
import ProgressBar from '@safsims/components/ProgressBar/ProgressBar';
import SafeAreaComponent from '@safsims/components/SafeAreaComponent/SafeAreaComponent';
import Text from '@safsims/components/Text/Text';
import { StudentDto, TermDto } from '@safsims/generated';
import useTermAttendedByStudentGet from '@safsims/parent-hooks/useTermAttendedByStudentGet';
import { lightTheme } from '@safsims/utils/Theme';
import { SelectOptionType } from '@safsims/utils/types';
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import ResultAccordion from './components/ResultAccordion';
import SkillCard from './components/SkillCard';
import SubjectAccordion from './components/SubjectAccordion';
import useChildAttendanceSummaryGet from './hooks/useChildAttendanceSummaryGet';
import useChildResultGet from './hooks/useChildResultGet';
import useChildSkillsGet from './hooks/useChildSkillsGet';
import useConfigurations from './hooks/useConfigurations';
import useStudentCommentsGet from './hooks/useStudentCommentsGet';
import useStudentTraitAssessmentGet from './hooks/useStudentTraitAssessmentGet';

type ViewType = 'chart' | 'text';

export default function ResulDetailsScreen({ navigation, route }) {
  const { colors } = useTheme();
  const [activeView, setActiveView] = useState<ViewType>('text');

  const handleActiveView = () => {
    if (activeView === 'chart') setActiveView('text');
    else setActiveView('chart');
  };

  const student: StudentDto = route.params.student;
  const termObj: TermDto = route.params.term;
  const studentId = student?.id;

  const { groupedTermsBySessions } = useTermAttendedByStudentGet({
    studentId: student.id,
  });

  const [selectTermOptions, setSelectTermOptions] = useState<any>(
    groupedTermsBySessions[termObj?.session?.id || ''] || [],
  );

  const [termValue, setTermValue] = useState<SelectOptionType>({
    label: termObj?.school_term_definition?.term_definition?.description || '',
    extra: termObj?.school_term_definition?.definition_order || '',
    value: termObj?.term_id,
  });
  const [sessionValue, setSessionValue] = useState<SelectOptionType>({
    label: termObj?.session?.id || '',
    value: groupedTermsBySessions[termObj?.session?.id || ''],
  });

  const termId = termValue?.value;

  const { configurations } = useConfigurations({
    level_id: student?.class_level_id,
  });

  const { studentComments, getComments, loading: loadingComments } = useStudentCommentsGet();
  const { childResult, getChildResult, loading } = useChildResultGet();
  const { skills, getSkills, loading: loadingSkills } = useChildSkillsGet();
  const { attendanceSummary, getAttendanceSummary } = useChildAttendanceSummaryGet();
  const { traitAssessments, getTraitAssessment } = useStudentTraitAssessmentGet();

  const filterdConfig = configurations.find((config) => config.active);

  const classTeacherComment = studentComments.length
    ? studentComments.filter((item) => item.staff_comment_type === 'FORM_TEACHER_COMMENT')
    : [];
  const principalComment = studentComments.length
    ? studentComments.filter((item) => item.staff_comment_type === 'PRINCIPAL_COMMENT')
    : [];

  const handlePreviousResult = () => {
    const previousTerm = groupedTermsBySessions[termObj?.session?.id || ''].reduce(
      (prev, current) =>
        current.order > prev.order && current.order < termValue?.extra ? current : prev,
    );

    handleStudenAssessment(previousTerm.value);
    setTermValue(previousTerm);
  };

  const handleStudenAssessment = (termId) => {
    if (student?.early_years) {
      getTraitAssessment({
        termId,
        studentId,
      });
    } else {
      getChildResult({
        termId,
        studentId,
        resultConfigId: filterdConfig?.id,
      });
    }
    getComments({
      termId,
      studentId,
    });
    getAttendanceSummary({
      termId,
      studentId,
    });
    getSkills({
      termId,
      studentId,
    });
  };

  useEffect(() => {
    if (filterdConfig) {
      handleStudenAssessment(termObj?.term_id);
    }
  }, [filterdConfig]);

  return (
    <View style={styles.container}>
      <SafeAreaComponent />
      <AppSubHeader
        onBack={() => navigation.goBack()}
        iconName="setting-4"
        avatar={student?.profile_pic}
        name={`${student?.first_name} ${student?.surname}`}
        onIconPress={handleActiveView}
      />
      <ResultAccordion
        selectTermOptions={selectTermOptions}
        termValue={termValue}
        sessionValue={sessionValue}
        sessionOptions={Object.keys(groupedTermsBySessions).map((item) => ({
          label: item,
          value: groupedTermsBySessions[item],
        }))}
        onSessionChange={(e) => {
          setSessionValue(e);
          setTermValue(null);
          setSelectTermOptions(e.value);
        }}
        onTermChange={(e) => {
          setTermValue(e);
          handleStudenAssessment(e?.value);
        }}
      />
      {loading || loadingComments || loadingSkills ? (
        <Loader />
      ) : childResult?.term_result && childResult?.term_result?.result_approved ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={loading || loadingComments || loadingSkills}
              onRefresh={() => {
                handleStudenAssessment(termId);
              }}
            />
          }
          style={styles.details}
        >
          <>
            <View style={styles.grade}>
              <View style={styles.final}>
                <Text>FINAL GRADE</Text>
                <Text h3>{childResult?.term_result?.result?.grade}</Text>
              </View>
              <View style={styles.class}>
                <Text>NO IN CLASS</Text>
                <Text style={styles.score}>{childResult?.term_result?.result?.out_of}</Text>
              </View>
            </View>

            {activeView === 'text' ? (
              <View style={styles.grade}>
                <View style={styles.classAverage}>
                  <Text>CLASS AVERAGE</Text>
                  <Text style={styles.score}>
                    {childResult?.term_result?.result?.average_score}
                  </Text>
                </View>
                <View style={styles.highestAverage}>
                  <Text>HIGHEST AVERAGE</Text>
                  <Text style={styles.score}>
                    {childResult?.term_result?.result?.highest_score}
                  </Text>
                </View>
                <View style={styles.lowestAverage}>
                  <Text>LOWEST AVERAGE</Text>
                  <Text style={styles.score}>{childResult?.term_result?.result?.lowest_score}</Text>
                </View>
              </View>
            ) : (
              <View style={{ padding: 20 }}>
                <Item
                  color={colors.PrimaryYellow}
                  title={'LOWEST AVERAGE'}
                  score={childResult?.term_result?.result?.lowest_score}
                />
                <Item
                  color={colors.PrimaryGreen}
                  title={'Highest AVERAGE'}
                  score={childResult?.term_result?.result?.highest_score}
                />
                <Item
                  color={'#BE7EFC'}
                  title={'CLASS AVERAGE'}
                  score={childResult?.term_result?.result?.average_score}
                />
                <Item
                  color={colors.SafsimsBlue}
                  title={'Final AVERAGE'}
                  score={childResult?.term_result?.result?.final_average}
                />
              </View>
            )}

            <View style={styles.grade}>
              <View style={styles.finalAverage}>
                <Text>FINAL AVERAGE</Text>
                <Text style={styles.score}>{childResult?.term_result?.result?.final_average}</Text>
              </View>
            </View>
          </>

          <View style={styles.note}>
            <Text>Subject Assessment</Text>
          </View>
          {childResult?.term_result?.subject_results?.map((subject) => (
            <SubjectAccordion key={subject.subject_id} subject={subject} activeView={activeView} />
          ))}

          {skills?.assessments?.map((item, index) => {
            const selectedSkills = item.skill_assessments?.map(
              (elem) => elem.skill_rating_definition,
            );
            return (
              <React.Fragment key={index}>
                {selectedSkills?.some((item) => item === null) ? null : (
                  <>
                    <View style={styles.note}>
                      <Text>{item?.skill_group?.name}/traits</Text>
                    </View>
                    <View style={styles.skillContainer}>
                      {item.skill_assessments?.map((elem, i) => (
                        <SkillCard
                          key={i}
                          name={elem.skill?.name}
                          grade={elem?.skill_rating_definition?.rating}
                        />
                      ))}
                    </View>
                  </>
                )}
              </React.Fragment>
            );
          })}

          <View style={styles.note}>
            <Text>Comments</Text>
          </View>
          <View style={styles.comments}>
            <View style={styles.commentHeader}>
              <Text style={{ marginRight: 10, marginBottom: 10 }} h3>
                Class Teacher
              </Text>
              <Icon name="message-2" size={20} color={lightTheme.colors.PrimaryFontColor} />
            </View>
            <Text>{classTeacherComment.length ? classTeacherComment[0].comments : ''}</Text>
            <View style={styles.commentHeader}>
              <Text style={{ marginRight: 10, marginBottom: 10 }} h3>
                Head Teacher
              </Text>
              <Icon name="message-2" size={20} color={lightTheme.colors.PrimaryFontColor} />
            </View>
            <Text>{principalComment.length ? principalComment[0].comments : ''}</Text>
          </View>
        </ScrollView>
      ) : (
        <EmptyState
          section
          Image={<Student />}
          title="No Report Available"
          info="This child has no report available for this term"
          Action={
            (termValue?.extra || 0) > 1 ? (
              <View style={{ paddingHorizontal: 20 }}>
                <Button
                  isLoading={loading || loadingComments || loadingSkills}
                  onPress={handlePreviousResult}
                  label="View Previous Term's Result"
                />
              </View>
            ) : (
              <></>
            )
          }
        />
      )}
      <SafeAreaComponent style={{ backgroundColor: colors.PrimaryWhite }} />
    </View>
  );
}

const Item = ({ score, title, color }) => {
  const { colors } = useTheme();
  return (
    <View style={{ marginBottom: 20 }}>
      <View style={styles.chartText}>
        <Text style={{ textTransform: 'uppercase' }}>{title}</Text>
        <Text style={{ color: colors.PrimaryFontColor }} h2>
          {score}%
        </Text>
      </View>
      <ProgressBar color={color} value={score || 0} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  score: {
    fontWeight: '600',
  },
  chartText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  details: {
    flex: 1,
    backgroundColor: lightTheme.colors.PrimaryWhite,
  },
  grade: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 70,
    alignItems: 'center',
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
  },
  final: {
    width: '66.66%',
    borderRightColor: lightTheme.colors.PrimaryBorderColor,
    borderRightWidth: 1,
    height: 70,
    justifyContent: 'center',
  },
  class: {
    height: 70,
    justifyContent: 'center',
  },
  classAverage: {
    height: 70,
    justifyContent: 'center',
    borderRightColor: lightTheme.colors.PrimaryBorderColor,
    borderRightWidth: 1,
    width: '33.33%',
  },
  highestAverage: {
    height: 70,
    justifyContent: 'center',
    borderRightColor: lightTheme.colors.PrimaryBorderColor,
    borderRightWidth: 1,
    width: '33.33%',
    paddingHorizontal: 5,
  },
  lowestAverage: {
    height: 70,
    justifyContent: 'center',
    width: '33.33%',
    paddingHorizontal: 5,
  },
  finalAverage: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
  },
  note: {
    height: 50,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  skillContainer: {
    padding: 20,
  },
  comments: {
    minHeight: 100,
    backgroundColor: lightTheme.colors.PrimaryWhite,
    width: '100%',
    padding: 20,
  },
  commentHeader: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
