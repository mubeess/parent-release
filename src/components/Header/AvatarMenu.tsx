import { useTheme } from '@react-navigation/native';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { logoutUser } from '@safsims/redux/users/actions';
import { useRef, useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native-ui-lib';
import { useDispatch } from 'react-redux';
import Avatar from '../Avatar/Avatar';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

interface IMenuItemProps {
  icon: string;
  title: string;
  color?: string;
  bottomBorder?: boolean;
  onClick?: () => void;
}

const MenuItem = ({ icon, title, color, bottomBorder, onClick }: IMenuItemProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: colors.PrimaryBorderColor,
        borderBottomWidth: bottomBorder ? 0.5 : 0,
      }}
    >
      <Icon name={icon} color={color || colors.PrimaryFontColor} />
      <Text style={{ marginLeft: 10, color: color || colors.PrimaryFontColor }}>{title}</Text>
    </TouchableOpacity>
  );
};

const AvatarMenu = ({ navigation }) => {
  const user = useAppSelector((state) => state.user.currentUser);

  const { colors } = useTheme();
  const [top, setTop] = useState(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [menuWidth, setMenuWidth] = useState<any>('90%');
  const ref = useRef();

  const dispatch = useDispatch();

  const handleModal = () => {
    // @ts-ignore
    ref?.current?.measure((_fx, _fy, _w, h, _px, py) => {
      setTop(py + h);
      setMenuWidth(_w);
    });
    setVisible((prev) => {
      const val = !prev;
      return val;
    });
  };

  return (
    <>
      <TouchableOpacity
        // @ts-ignore
        ref={ref}
        onPress={handleModal}
      >
        <Avatar image={user?.profile_pic} style={{ marginRight: 10 }} resizeMode="contain" />
      </TouchableOpacity>
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => {
            setVisible(false);
          }}
        >
          <View style={[styles.optionsMenu, { top, right: 35 }]}>
            <View style={[styles.triangle, { borderBottomColor: colors.PrimaryBorderColor }]} />
            <View style={[styles.optionsContainer, { borderColor: colors.PrimaryBorderColor }]}>
              {/* <MenuItem title="Switch to Staff" icon="repeat" bottomBorder />
              <MenuItem title="Notifications" icon="direct-notification" /> */}
              <MenuItem
                onClick={() =>
                  navigation.navigate('Home', {
                    screen: 'Profile',
                  })
                }
                title="Profile"
                icon="frame-1"
              />
              <MenuItem
                onClick={() => dispatch(logoutUser())}
                title="Logout"
                icon="logout"
                color={colors.PrimaryRed}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default AvatarMenu;

const styles = StyleSheet.create({
  overlay: {
    width: '100%',
    height: '100%',
  },
  optionsMenu: {
    width: 150,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,
    shadowColor: Colors.grey40,
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.2,
    right: 0,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
    borderBottomWidth: 10,
    marginTop: 5,
    marginRight: 2,
    alignSelf: 'flex-end',
  },
  optionsContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    maxHeight: 200,
    overflow: 'scroll',
  },
});
