/* eslint-disable react-native/no-inline-styles */
import { useTheme } from '@react-navigation/native';
import Icon from '@safsims/components/Icon/Icon';
import Text from '@safsims/components/Text/Text';
import useDisclosure from '@safsims/utils/useDisclosure/useDisclosure';
import { useEffect } from 'react';
import { Linking, Modal, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import semver from 'semver';
import packageJson from '../../../package.json';
import Button from '../Button/Button';
import useCheckForAppUpdate from './hooks/useCheckForAppUpdate';

const NewAppUpdateModal = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { update } = useCheckForAppUpdate();
  const { version } = packageJson;
  const { colors } = useTheme();

  useEffect(() => {
    if (update) {
      const result = semver.compare(version, update.version);
      if (result === -1) {
        onOpen();
      } else {
        onClose();
      }
    }
  }, [update]);

  const onClick = () => {
    const url = 'https://play.google.com/store/apps/details?id=com.safsims';
    Linking.openURL(url);
  };

  console.log('update: ', update);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isOpen}
      onRequestClose={update?.force_update ? () => null : onClose}
    >
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: '#383A3F',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 20,
              paddingHorizontal: 20,
            }}
          >
            <View>
              <Text h3 style={{ fontWeight: 'bold', color: '#383A3F' }}>
                What's new? 🚀
              </Text>
              <Text style={{ fontSize: 12, color: '#383A3F' }}>Version {update?.version}</Text>
            </View>
            {update?.force_update ? null : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  borderWidth: 1,
                  borderColor: '#383A3F',
                  borderRadius: 100,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: '#FFF',
                    padding: 10,
                    borderRadius: 25,
                  }}
                  onPress={onClose}
                >
                  <Icon name="close-square" color="#383A3F" size={24} />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.screen_gutter}>
              <View style={[styles.screen_content, { gap: 25, marginTop: 10 }]}>
                <View>
                  <Text h3 style={{ fontWeight: 'bold', color: '#383A3F' }}>
                    {update?.title}
                  </Text>
                  <View
                    style={{
                      backgroundColor: '#f2f2f2',
                      padding: 15,
                      borderRadius: 10,
                      marginTop: 8,
                    }}
                  >
                    <Text style={{ color: '#383A3F' }}>{update?.description}</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={{ padding: 20 }}>
          <Button backgroundColor="#0066F5" label="Download updates" onPress={onClick} />
        </View>
      </View>
    </Modal>
  );
};

export default NewAppUpdateModal;

const styles = StyleSheet.create({
  screen_gutter: {
    flex: 1,
    paddingHorizontal: 30 * 0.9,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  screen_content: {
    flex: 1,
    width: '100%',
  },
});
