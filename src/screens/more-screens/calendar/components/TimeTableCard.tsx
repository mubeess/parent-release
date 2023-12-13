import Text from '@safsims/components/Text/Text';
import { TimeTablePeriodDto } from '@safsims/generated';
import { lightTheme } from '@safsims/utils/Theme';
import { useState } from 'react';

import { Dimensions, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function TimeTableCard({ table }: { table: TimeTablePeriodDto }) {
  const Colors = ['#043880', '#54B0B1', '#BC8950', '#F4947E', '#719578'];
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <Text>{table.start_time}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.decoration} />
        <View style={styles.decoration} />
        <TouchableOpacity
          onPress={() => setModalOpen(true)}
          style={[
            styles.mainTable,
            {
              backgroundColor: table.break_period
                ? '#D8D8E3'
                : Colors[Math.floor(Math.random() * 5)],
            },
          ]}
        >
          <Text style={{ ...styles.text, color: table.break_period ? '#000' : '#fff' }} h2>
            {table.subject?.subject_name}
          </Text>

          <Text
            style={{ color: table.break_period ? '#000' : '#fff', fontSize: 12, marginTop: 'auto' }}
            h3
          >
            {table.start_time} - {table.end_time}
          </Text>
        </TouchableOpacity>
      </View>
      <Modal statusBarTranslucent transparent animationType={'fade'} visible={modalOpen}>
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => setModalOpen(false)} style={styles.close}>
            <Text>X</Text>
          </TouchableOpacity>
          <View style={styles.mainItem}>
            <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>
              Schedule details
            </Text>

            <View style={styles.content}>
              <Text style={{ color: '#5D6C87' }}>Teacher</Text>
              <Text>
                {table.teacher?.first_name} {table.teacher?.other_names}
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={{ color: '#5D6C87' }}>Subject</Text>
              <Text>{table.subject?.subject_name}</Text>
            </View>
            <View style={styles.content}>
              <Text style={{ color: '#5D6C87' }}>Day Of Week</Text>
              <Text>{table.day_of_week}</Text>
            </View>
            <View style={styles.content}>
              <Text style={{ color: '#5D6C87' }}>Time Slot</Text>
              <Text>
                {table.start_time} - {table.end_time}
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
    height: 110,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    width: '100%',
    flexDirection: 'row',
  },
  time: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: lightTheme.colors.PrimaryBorderColor,
    borderStyle: 'dashed',
  },
  body: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    position: 'relative',
  },
  decoration: {
    height: '40%',
    width: '100%',
    backgroundColor: '#FAFAFA',
  },
  mainTable: {
    position: 'absolute',
    width: '90%',
    height: 80,
    backgroundColor: '#043880',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 20,
    padding: 10,
  },
  text: {
    color: '#fff',
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
    // marginTop: 20,
  },
});
