import { useTheme } from '@react-navigation/native';
import Button from '@safsims/components/Button/Button';
import EmptyState from '@safsims/components/EmptyState/EmptyState';
import AppSubHeader from '@safsims/components/Header/AppSubHeader';
import Icon from '@safsims/components/Icon/Icon';
import { Student } from '@safsims/components/Images';
import Input from '@safsims/components/Input/Input';
import Loader from '@safsims/components/Loader/Loader';
import ProgressBar from '@safsims/components/ProgressBar/ProgressBar';
import SafeAreaComponent from '@safsims/components/SafeAreaComponent/SafeAreaComponent';
import Text from '@safsims/components/Text/Text';
import { StudentDto, TermDto } from '@safsims/generated';
import useTermAttendedByStudentGet from '@safsims/parent-hooks/useTermAttendedByStudentGet';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { lightTheme } from '@safsims/utils/Theme';
import { SelectOptionType } from '@safsims/utils/types';
import React, { useEffect, useState } from 'react';

// import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
import Toast from 'react-native-toast-message';

import {
  Dimensions,
  Linking,
  Modal,
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Pdf from 'react-native-pdf';
// import RNFetchBlob from 'rn-fetch-blob';
import ResultAccordion from './components/ResultAccordion';
import SkillCard from './components/SkillCard';
import SubjectAccordion from './components/SubjectAccordion';
import useChildAttendanceSummaryGet from './hooks/useChildAttendanceSummaryGet';
import useChildResultGet from './hooks/useChildResultGet';
import useChildSkillsGet from './hooks/useChildSkillsGet';
import useConfigurations from './hooks/useConfigurations';
import useFetchReportTemplate from './hooks/useFetchReportTemplate';
import useGenerateAsposeReport from './hooks/useGenerateAsposeReport';
import useShareResult from './hooks/useShareResult';
import useStudentCommentsGet from './hooks/useStudentCommentsGet';
import useStudentTraitAssessmentGet from './hooks/useStudentTraitAssessmentGet';
type ViewType = 'chart' | 'text';

export default function ResulDetailsScreen({ navigation, route }) {
  const { colors } = useTheme();
  const [activeView, setActiveView] = useState<ViewType>('text');
  const { loadingResult, pdfURL, singleResult, setPdfURL } = useGenerateAsposeReport();
  const { allTemplates, fetchTemplates, loadingTemplates } = useFetchReportTemplate();
  const [modalVisible, setModalVisible] = useState(false);
  const [mailText, setMail] = useState('');
  const [emailList, setEmailList] = useState([]);

  const { shareResult, loading: sharing } = useShareResult();
  const handleActiveView = () => {
    if (activeView === 'chart') {
      setActiveView('text');
    } else {
      setActiveView('chart');
    }
  };

  const student: StudentDto = route.params.student;
  const termObj: TermDto = route.params.term;
  const studentId = student?.id;
  const user = useAppSelector((user) => user.user);
  const schoolConfig = useAppSelector((data) => data.configuration.selectedSchool);

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
  const downloadResult = () => {
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.DownloadDir;

    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: PictureDir + '/safsims.pdf',
        description: 'Downloading File',
      },
    };
    config(options)
      .fetch('GET', `https://safsims.s3.us-east-2.amazonaws.com/${pdfURL}`)
      .then((res) => {
        Toast.show({
          type: 'success',
          text1: 'Download Successful',
          text2: 'Check your downloads!!',
        });
      });
  };

  const reportTemplate = allTemplates.filter(
    (report) => report.id === filterdConfig?.report_template_id,
  );
  const isAspose = reportTemplate[0]?.aspose;

  useEffect(() => {
    if (isAspose) {
      singleResult(
        student?.id,
        termValue?.value,
        filterdConfig?.id,
        filterdConfig?.report_template_id,
      );
    } else if (configurations.length && student) {
      handleStudenAssessment(termObj?.term_id);
      setPdfURL('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAspose, student, filterdConfig]);

  useEffect(() => {
    fetchTemplates();
  }, []);

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
      ) : isAspose ? (
        <>
          {pdfURL && (
            <>
              <Pdf
                trustAllCerts={false}
                source={{ uri: `https://safsims.s3.us-east-2.amazonaws.com/${pdfURL}` }}
                onLoadComplete={(numberOfPages, filePath) => {
                  console.log(`Number of pages: ${numberOfPages}`);
                }}
                style={styles.pdf}
              />
              <View style={styles.share_button}>
                <Button
                  onPress={() => setModalVisible(true)}
                  style={{
                    width: '45%',
                  }}
                  label="Share result"
                />
                <Button
                  disabled={filterdConfig ? (reportTemplate.length > 0 ? false : true) : true}
                  onPress={() => {
                    if (!filterdConfig || reportTemplate.length == 0) {
                      return;
                    }
                    Linking.openURL(
                      `${schoolConfig?.school_url}/student-report?studentId=${studentId}&termId=${termId}&configId=${filterdConfig?.id}&reportId=${reportTemplate[0].id}&fromParent=true`,
                    );
                  }}
                  fontStyle={{
                    color: '#000',
                  }}
                  style={{
                    width: '45%',
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    borderColor: lightTheme.colors.PrimaryBorderColor,
                    opacity: filterdConfig ? (reportTemplate.length > 0 ? 1 : 0.3) : 0.3,
                  }}
                  label="Download and print"
                />
              </View>
            </>
          )}
        </>
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
          <View style={styles.share_button}>
            <Button
              onPress={() => setModalVisible(true)}
              style={{
                width: '45%',
              }}
              label="Share result"
            />
            <Button
              disabled={filterdConfig ? (reportTemplate.length > 0 ? false : true) : true}
              onPress={() => {
                if (!filterdConfig || reportTemplate.length == 0) {
                  return;
                }
                Linking.openURL(
                  `${schoolConfig?.school_url}/student-report?studentId=${studentId}&termId=${termId}&configId=${filterdConfig?.id}&reportId=${reportTemplate[0].id}&fromParent=true`,
                );
              }}
              fontStyle={{
                color: '#000',
              }}
              style={{
                width: '45%',
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: lightTheme.colors.PrimaryBorderColor,
                opacity: filterdConfig ? (reportTemplate.length > 0 ? 1 : 0.3) : 0.3,
              }}
              label="Download and print"
            />
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
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.overlay}>
          <ScrollView style={styles.content}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
              style={{
                ...styles.cancel,
                backgroundColor: '#000',
                marginLeft: 'auto',
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <Text style={{ color: '#fff' }}>X</Text>
            </TouchableOpacity>
            <Input value={mailText} onChange={(text) => setMail(text)} placeholder="add email" />
            <View style={styles.share_button}>
              <Button
                onPress={() => {
                  setEmailList((prev) => [...prev, mailText]);
                  setMail('');
                }}
                fontStyle={{
                  color: '#000',
                }}
                style={{
                  width: '45%',
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderColor: lightTheme.colors.PrimaryBorderColor,
                }}
                label="Add email"
              />
              <Button
                isLoading={sharing}
                onPress={async () => {
                  if (emailList.length == 0) {
                    Toast.show({
                      type: 'error',
                      text1: 'emails are required',
                      text2: 'At least one email is required',
                    });
                    return;
                  }
                  const response = await shareResult({
                    emails: emailList,
                    term_id: termValue?.value,
                    parent_id: user.currentUser.parent_id,
                  });

                  if (response) {
                    setModalVisible(false);
                    setEmailList([]);
                  }
                }}
                style={{
                  width: '45%',
                }}
                label="Share result"
              />
            </View>
            {emailList.map((mail) => (
              <View style={styles.itemList} key={mail}>
                <Text>{mail}</Text>
                <TouchableOpacity
                  onPress={() => {
                    const filtered = emailList.filter((_mail) => _mail !== mail);
                    setEmailList(filtered);
                  }}
                  style={styles.cancel}
                >
                  <Text style={{ color: '#fff' }}>X</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </Modal>
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
    backgroundColor: '#fff',
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
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  share_button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    maxHeight: Dimensions.get('window').height / 2 + 50,
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 'auto',
    paddingHorizontal: 20,
  },
  itemList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cancel: {
    width: 25,
    height: 25,
    borderRadius: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
