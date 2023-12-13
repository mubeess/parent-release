import { useTheme } from '@react-navigation/native';
import Button from '@safsims/components/Button/Button';
import EmptyState from '@safsims/components/EmptyState/EmptyState';
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
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
import Toast from 'react-native-toast-message';

import Icon from '@safsims/components/Icon/Icon';
import TimeTableHeader from '@safsims/screens/more-screens/calendar/components/TimeTableHeader';
import TimeTableStudentHeader from '@safsims/screens/more-screens/calendar/components/TimeTableStudentHeader';
import {
  Dimensions,
  Image,
  Linking,
  Modal,
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Pdf from 'react-native-pdf';
import RNFetchBlob from 'rn-fetch-blob';
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
  const [modalVisible, setModalVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [extraOpen, setExtraOpen] = useState(false);
  const parent = useAppSelector((state) => state.user?.parent);
  const children = parent?.linked_students || [];
  const closeModal = () => {
    setModalOpen(false);
  };
  const [mailText, setMail] = useState('');
  const [emailList, setEmailList] = useState([]);
  const { loadingResult, pdfURL, singleResult, setPdfURL } = useGenerateAsposeReport();
  const { allTemplates, fetchTemplates, loadingTemplates } = useFetchReportTemplate();
  const { shareResult, loading: sharing } = useShareResult();
  const handleActiveView = () => {
    if (activeView === 'chart') {
      setActiveView('text');
    } else {
      setActiveView('chart');
    }
    setExtraOpen(false);
  };
  const [student, setStudent] = useState<StudentDto>(route.params.student);

  const termObj: TermDto = route.params.term;

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

  const { configurations, loading: loadingConfig } = useConfigurations({
    level_id: student?.class_level_id,
  });

  const { studentComments, getComments, loading: loadingComments } = useStudentCommentsGet();
  const { childResult, getChildResult, loading } = useChildResultGet();
  const { skills, getSkills, loading: loadingSkills } = useChildSkillsGet();
  const { attendanceSummary, getAttendanceSummary } = useChildAttendanceSummaryGet();
  const {
    traitAssessments,
    getTraitAssessment,
    loading: loadingTraits,
  } = useStudentTraitAssessmentGet();
  const [filterdConfig, setFilteredConfig] = useState(
    configurations.find((config) => config.active),
  );
  const traitNames = [
    ...new Set(traitAssessments.map((item) => item.trait_definition?.trait?.trait_name)),
  ];
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
        studentId: student.id,
        traitGroupId: filterdConfig?.trait_group?.id,
      });
    } else {
      getChildResult({
        termId,
        studentId: student.id,
        resultConfigId: filterdConfig?.id,
      });
    }
    getComments({
      termId,
      studentId: student.id,
    });
    getAttendanceSummary({
      termId,
      studentId: student.id,
    });
    getSkills({
      termId,
      studentId: student.id,
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
        setExtraOpen(false);
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
  }, [isAspose, student, filterdConfig, configurations]);

  useEffect(() => {
    fetchTemplates();
  }, []);

  useEffect(() => {
    setFilteredConfig(configurations.find((config) => config.active));
  }, [configurations]);

  return (
    <View style={styles.container}>
      {/* <SafeAreaComponent /> */}
      {/* <StatusBar
        translucent
        backgroundColor={lightTheme.colors.PrimaryColor}
        barStyle="light-content"
      /> */}
      <TimeTableHeader
        withMenu
        onMenuPress={() => setExtraOpen(true)}
        name={`${termValue?.label}[${sessionValue?.label}]`}
        short_name="Result breakdown"
      />
      <TimeTableStudentHeader
        setTermOptions={setSelectTermOptions}
        changeTerm={setTermValue}
        swapStudent={() => setModalOpen(true)}
        student={student}
        selectTermOptions={selectTermOptions}
        termValue={termValue}
        session={sessionValue}
        selectSessionOptions={Object.keys(groupedTermsBySessions).map((item) => ({
          label: item,
          value: groupedTermsBySessions[item],
        }))}
      />
      <View style={{ marginTop: 50 }} />
      <View style={styles.configContainer}>
        {configurations
          .filter((conf) => conf.active)
          .map((main) => (
            <TouchableOpacity
              onPress={() => {
                setFilteredConfig(main);
              }}
              style={[
                styles.config,
                {
                  backgroundColor:
                    main.id == filterdConfig?.id ? lightTheme.colors.PrimaryColor : '#fff',
                },
              ]}
              key={main.id}
            >
              <Text style={{ color: main.id == filterdConfig?.id ? '#fff' : '#000' }}>
                {main.config_name}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
      {loading ||
      loadingComments ||
      loadingSkills ||
      loadingTraits ||
      loadingResult ||
      loadingConfig ? (
        <Loader />
      ) : null}
      {isAspose && !loading && !loadingResult && (
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
            </>
          )}

          {!pdfURL && (
            <>
              <EmptyState Image={<Student />} title="Not Approved" info="Result not yet approved" />
            </>
          )}
        </>
      )}
      {!isAspose && !loading && !loadingResult && !loadingComments && !loadingSkills && (
        <>
          {student.early_years ? (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
              {traitNames.map((trait, ind) => {
                const filteredData = traitAssessments.filter(
                  (item) => item.trait_definition?.trait?.trait_name === trait,
                );

                return (
                  <TouchableOpacity activeOpacity={0.8} key={ind}>
                    <Text h2>{trait}</Text>
                    {filteredData.map((commonTrait, index) => (
                      <SkillCard
                        key={index}
                        name={commonTrait.trait_definition?.definition}
                        grade={commonTrait.trait_rating_definition?.rating}
                      />
                    ))}
                  </TouchableOpacity>
                );
              })}
              <View style={styles.note}>
                <Text h2>Comments</Text>
              </View>
              <View style={styles.comments}>
                <View style={styles.commentsContainer}>
                  <Text style={{ color: '#8C8C8C' }} h3>
                    Class Teacher comments
                  </Text>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      backgroundColor: lightTheme.colors.PrimaryBorderColor,
                      marginVertical: 20,
                    }}
                  />
                  <Text style={{ textAlign: 'justify' }}>
                    {classTeacherComment.length ? classTeacherComment[0].comments : ''}
                  </Text>
                </View>
                <View style={styles.commentsContainer}>
                  <Text style={{ color: '#8C8C8C' }} h3>
                    Head Teacher comments
                  </Text>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      backgroundColor: lightTheme.colors.PrimaryBorderColor,
                      marginVertical: 20,
                    }}
                  />
                  <Text style={{ textAlign: 'justify' }}>
                    {principalComment.length ? principalComment[0].comments : ''}
                  </Text>
                </View>
              </View>
            </ScrollView>
          ) : (
            <>
              {childResult?.term_result && childResult?.term_result?.result_approved ? (
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
                          <Text style={styles.score}>
                            {childResult?.term_result?.result?.lowest_score}
                          </Text>
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
                        <Text style={styles.score}>
                          {childResult?.term_result?.result?.final_average}
                        </Text>
                      </View>
                    </View>
                  </>

                  <View style={styles.note}>
                    <Text h2>Subject Assessment</Text>
                    <Text>Score/performance breakdown of subjects</Text>
                  </View>
                  {childResult?.term_result?.subject_results?.map((subject) => (
                    <SubjectAccordion
                      key={subject.subject_id}
                      subject={subject}
                      activeView={activeView}
                    />
                  ))}
                  <View style={styles.note}>
                    <Text h2>Affective Domain</Text>
                    <Text>Physical and mannerisms assessment</Text>
                  </View>
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
                    <Text h2>Comments</Text>
                  </View>
                  <View style={styles.comments}>
                    <View style={styles.commentsContainer}>
                      <Text style={{ color: '#8C8C8C' }} h3>
                        Class Teacher comments
                      </Text>
                      <View
                        style={{
                          width: '100%',
                          height: 1,
                          backgroundColor: lightTheme.colors.PrimaryBorderColor,
                          marginVertical: 20,
                        }}
                      />
                      <Text style={{ textAlign: 'justify' }}>
                        {classTeacherComment.length ? classTeacherComment[0].comments : ''}
                      </Text>
                    </View>
                    <View style={styles.commentsContainer}>
                      <Text style={{ color: '#8C8C8C' }} h3>
                        Head Teacher comments
                      </Text>
                      <View
                        style={{
                          width: '100%',
                          height: 1,
                          backgroundColor: lightTheme.colors.PrimaryBorderColor,
                          marginVertical: 20,
                        }}
                      />
                      <Text style={{ textAlign: 'justify' }}>
                        {principalComment.length ? principalComment[0].comments : ''}
                      </Text>
                    </View>
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
            </>
          )}
        </>
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
                    setStudent(individualChild.student);
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

      <Modal statusBarTranslucent transparent animationType={'slide'} visible={extraOpen}>
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => setExtraOpen(false)} style={styles.close}>
            <Text>X</Text>
          </TouchableOpacity>
          <View style={styles.mainItem}>
            <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>Extras</Text>

            <ScrollView
              style={styles.modalContent}
              contentContainerStyle={{ paddingHorizontal: 20 }}
            >
              {activeView == 'text' ? (
                <TouchableOpacity onPress={handleActiveView} style={styles.childList}>
                  <Icon name="chart-3" size={25} color="#000" />
                  <Text style={{ marginLeft: 10 }}>Switch to chart view</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={handleActiveView} style={styles.childList}>
                  <Icon name="text-block" size={25} color="#000" />
                  <Text style={{ marginLeft: 10 }}>Switch to text view</Text>
                </TouchableOpacity>
              )}

              {filterdConfig && reportTemplate.length > 0 && (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      setExtraOpen(false);
                      setModalVisible(true);
                    }}
                    style={styles.childList}
                  >
                    <Icon name="share" size={25} color="#000" />
                    <Text style={{ marginLeft: 10 }}>Share result</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      if (isAspose && pdfURL) {
                        check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
                          .then(async (result) => {
                            switch (result) {
                              case RESULTS.UNAVAILABLE:
                                return;

                              case RESULTS.DENIED:
                                const permited = await request(
                                  PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
                                );
                                if (permited == 'granted') {
                                  downloadResult();
                                }
                                break;

                              case RESULTS.GRANTED:
                                downloadResult();
                                break;
                              case RESULTS.BLOCKED:
                                return;
                            }
                          })
                          .catch((error) => {
                            // …
                          });
                        return;
                      }
                      Linking.openURL(
                        `${schoolConfig?.school_url}/student-report?studentId=${student.id}&termId=${termId}&configId=${filterdConfig?.id}&reportId=${reportTemplate[0].id}&fromParent=true`,
                      );
                      setExtraOpen(false);
                    }}
                    style={styles.childList}
                  >
                    <Icon name="document-download" size={25} color="#000" />
                    <Text style={{ marginLeft: 10 }}>Download And Print Result</Text>
                  </TouchableOpacity>
                </>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
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
    height: 80,
    backgroundColor: lightTheme.colors.PrimaryFade,
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
  commentsContainer: {
    height: 'auto',
    padding: 20,
    borderRadius: 10,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderWidth: 1,
    marginTop: 10,
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
  configContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
  },
  config: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryColor,
    marginRight: 10,
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
