import { useTheme } from '@react-navigation/native';
import useDisclosure from '@safsims/utils/useDisclosure/useDisclosure';
import { Dimensions, StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from '../Icon/Icon';
import SafeAreaComponent from '../SafeAreaComponent/SafeAreaComponent';
import SideMenu from '../SideMenu/SideMenu';
import Text from '../Text/Text';
import AvatarMenu from './AvatarMenu';

interface IProps {
  onBack?: () => void;
  navigation: any;
  pageTitle?: string;
}

const AppHeader = ({ onBack, navigation, pageTitle }: IProps) => {
  const { colors } = useTheme();
  const { height } = useWindowDimensions();
  const { isOpen, onOpen, onClose, toggle } = useDisclosure();
  const dispatch = useDispatch();

  return (
    <>
      <SafeAreaComponent style={{ backgroundColor: colors.PrimaryWhite }} />
      <View
        style={[
          styles.container,
          {
            borderColor: colors.PrimaryBorderColor,
            backgroundColor: colors.PrimaryWhite,
          },
        ]}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              if (onBack) {
                onBack();
              } else toggle();
            }}
            style={{ marginRight: 10 }}
          >
            <Icon
              name={
                onBack ? 'arrow-circle-left' : isOpen ? 'arrow-circle-left' : 'arrow-circle-right'
              }
              size={24}
            />
          </TouchableOpacity>
          <Text style={{ fontWeight: '500', fontSize: 16 }}>{pageTitle || 'Safsims'}</Text>
        </View>

        <AvatarMenu navigation={navigation} />
      </View>

      <SideMenu navigation={navigation} isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sideMenu: {
    height: Dimensions.get('screen').height,
    zIndex: 5,
    width: 300,
    backgroundColor: 'red',
    position: 'absolute',
    left: 0,
    borderRightWidth: 1,
  },
});
