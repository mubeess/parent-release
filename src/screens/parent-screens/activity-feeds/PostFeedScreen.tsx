import Icon from '@safsims/components/Icon/Icon';
import { CloseIcon } from '@safsims/components/Images';
import Select from '@safsims/components/Select/Select';
import Text from '@safsims/components/Text/Text';
import { GroupResponse } from '@safsims/generated';
import { lightTheme } from '@safsims/utils/Theme';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import useGetGroups from '../dashboard/hooks/useGetGroups';
import usePostFeed from './hooks/usePostFeed';

export default function PostFeedScreen({ navigation }) {
  const [optionGroups, setOptionGroups] = useState([]);
  const { getGroups, loading, groups } = useGetGroups();
  const [selectedGroup, setSelectedGroup] = useState('');
  const [newActivity, setNewActivity] = useState('');
  const { postFeeds, loading: postinFeed } = usePostFeed();
  const [image, setImage] = useState<any>();

  const pickImage = async () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response) {
        setImage(response.assets?.[0]);
      }
    });
  };

  useEffect(() => {
    getGroups();
  }, []);

  useEffect(() => {
    const mainOptions = [];
    if (groups.length > 0) {
      groups.map((group: GroupResponse) => {
        mainOptions.push({ label: group.name, value: group.id });
      });
    }
    setOptionGroups(mainOptions);
  }, [groups]);
  return (
    <View style={styles.addFeedContainer}>
      <View style={styles.feedHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.close}>
          <CloseIcon />
        </TouchableOpacity>
        <Text style={{ marginRight: 'auto' }} h3>
          Create Activity
        </Text>
      </View>
      <View style={styles.divider} />
      <Select
        onChange={(val) => {
          setSelectedGroup(val.value);
        }}
        label="Select group"
        options={optionGroups}
      />
      <TextInput
        onChangeText={(text) => setNewActivity(text)}
        value={newActivity}
        placeholder="What do you want to say..."
        multiline
        style={styles.input}
      />
      <View style={styles.attachments}>
        <TouchableOpacity>
          <Icon name="paperclip-2" size={25} color="#000" />
          {image && <Text style={styles.selected}>{image.type}</Text>}
        </TouchableOpacity>
        {postinFeed ? (
          <ActivityIndicator color="#000" />
        ) : (
          <TouchableOpacity
            onPress={async () => {
              const result = await postFeeds({
                message: newActivity,
                group: selectedGroup,
              });

              if (result) {
                Toast.show({
                  type: 'success',
                  text1: 'Success',
                  text2: 'Posted a feed',
                });
                navigation.goBack();
              }
            }}
          >
            <Icon name="send-2" size={25} color="#000" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  addFeedContainer: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
  close: {
    height: 40,
    width: 40,
    backgroundColor: '#E6E9EC',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 'auto',
  },
  input: {
    width: '100%',
    height: Dimensions.get('window').height / 2.7,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    marginVertical: 20,
  },
  feedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: lightTheme.colors.PrimaryBorderColor,
    width: '100%',
    marginVertical: 20,
  },
  attachments: {
    marginTop: 'auto',
    borderTopColor: lightTheme.colors.PrimaryBorderColor,
    borderTopWidth: 1,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selected: {
    color: lightTheme.colors.PrimaryGreen,
    fontSize: 10,
  },
});
