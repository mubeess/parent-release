import Icon from '@safsims/components/Icon/Icon';
import Text from '@safsims/components/Text/Text';
import { StudentSubjectAttendanceResponse } from '@safsims/generated';
import { lightTheme } from '@safsims/utils/Theme';
import { useState } from 'react';
import { Dimensions, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function AttendanceCard({
  data,
  selectedSubject = '',
}: {
  data: StudentSubjectAttendanceResponse;
  selectedSubject: string;
}) {
  const filteredSubject = data.subject_attendance_records?.filter(
    (record) => record.subject_id == selectedSubject,
  );
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <View style={styles.container}>
      <Text>{data.lesson_date?.split('-')[2]}</Text>
      <View style={styles.decoration}>
        <View
          style={{
            height: 6,
            width: 6,
            borderRadius: 6,
            backgroundColor:
              filteredSubject?.length > 0
                ? filteredSubject[0].attendance_status == 'PRESENT'
                  ? lightTheme.colors.PrimaryGreen
                  : lightTheme.colors.PrimaryRed
                : lightTheme.colors.PrimaryRed,
            marginRight: 5,
          }}
        />
        <Text style={{ fontSize: 12 }}>
          {filteredSubject?.length > 0 ? filteredSubject[0].attendance_status : 'Absent'}
        </Text>
      </View>
      {filteredSubject?.length > 0 && filteredSubject[0].comment !== '' && (
        <TouchableOpacity
          onPress={() => {
            setModalOpen(true);
          }}
          style={{ marginTop: 5 }}
        >
          <Icon name="message-text" color="#000" size={20} />
        </TouchableOpacity>
      )}

      <Modal statusBarTranslucent transparent animationType={'fade'} visible={modalOpen}>
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => setModalOpen(false)} style={styles.close}>
            <Text>X</Text>
          </TouchableOpacity>
          <View style={styles.mainItem}>
            <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>
              Attendance details
            </Text>

            <View style={styles.content}>
              <View>
                <Text style={{ color: '#5D6C87' }}>Date</Text>
                <Text>{data.lesson_date}</Text>
              </View>

              <View>
                <Text style={{ color: '#5D6C87' }}>Status</Text>

                <View style={styles.decoration}>
                  <View
                    style={{
                      height: 6,
                      width: 6,
                      borderRadius: 6,
                      backgroundColor:
                        filteredSubject?.length > 0
                          ? filteredSubject[0].attendance_status == 'PRESENT'
                            ? lightTheme.colors.PrimaryGreen
                            : lightTheme.colors.PrimaryRed
                          : lightTheme.colors.PrimaryRed,
                      marginRight: 5,
                    }}
                  />
                  <Text>
                    {filteredSubject?.length > 0 ? filteredSubject[0].attendance_status : 'Absent'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.comments}>
              <View style={styles.commentHead}>
                <Icon name="message-text" color="#000" size={18} />
                <Text style={{ marginLeft: 5 }}>Comments</Text>
              </View>
              <Text style={{ textAlign: 'justify' }}>
                {filteredSubject?.length > 0 ? filteredSubject[0].comment : ''}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '25%',
    height: 80,
    borderWidth: 0.3,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderRightWidth: 1,
    padding: 5,
  },
  decoration: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modal: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  close: {
    height: 34,
    width: 34,
    backgroundColor: '#fff',
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  mainItem: {
    height: 300,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  content: {
    width: '100%',
    height: 60,
    borderTopColor: lightTheme.colors.PrimaryBorderColor,
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
    // marginTop: 20,
  },
  commentHead: {
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  comments: {
    padding: 10,
    minHeight: 20,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderRadius: 10,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
