import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Icon from '../Icon/Icon';
import SafeAreaComponent from '../SafeAreaComponent/SafeAreaComponent';
import Text from '../Text/Text';

interface IMenuItemProps {
  title: string;
  icon: string;
  isActive?: boolean;
  onClick: () => void;
}

const MenuItem = ({ title, icon, isActive, onClick }: IMenuItemProps) => {
  const { colors } = useTheme();
  const color = isActive ? colors.PrimaryColor : colors.PrimaryFontColor;
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{ flexDirection: 'row', marginBottom: 20, minWidth: 200 }}
    >
      <Icon name={icon} size={18} color={color} />
      <Text style={[styles.menuText, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const SideMenu = ({ isOpen, toggle, navigation }) => {
  const navigate = navigation?.navigate;

  const defaultList = [
    {
      title: 'Fees',
      icon: 'receipt-item',
      onClick: () =>
        navigate('Fees', {
          screen: 'FeesHome',
        }),
    },
    {
      title: 'Results',
      icon: 'medal',
      onClick: () => navigate('Results'),
    },
    {
      title: 'Payment History',
      icon: 'layer',
      onClick: () =>
        navigate('Fees', {
          screen: 'PaymentHistory',
        }),
    },
    {
      title: 'Invoice History',
      icon: 'stickynote',
      onClick: () =>
        navigate('Fees', {
          screen: 'InvoiceHistory',
        }),
    },
  ];

  const { colors } = useTheme();
  const animatedStyle = useAnimatedStyle(() => ({
    width: withTiming(isOpen ? 300 : 0, { duration: 500 }),
  }));
  const [active, setActive] = useState<string>('');
  return (
    <>
      <Animated.View
        style={[
          styles.sideMenu,
          { borderColor: colors.PrimaryBorderColor, backgroundColor: colors.PrimaryWhite },
          animatedStyle,
        ]}
      >
        <SafeAreaComponent style={{ backgroundColor: colors.PrimaryWhite }} />
        <View
          style={{
            padding: 20,
            paddingHorizontal: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 0.5,
            borderColor: colors.PrimaryBorderColor,
          }}
        >
          <Image style={{ marginBottom: 10 }} source={require('../../../assets/logo-sm.png')} />

          <TouchableOpacity onPress={() => toggle()}>
            <Icon name="close-circle" size={24} />
          </TouchableOpacity>
        </View>

        <View style={{ padding: 20, paddingHorizontal: 30 }}>
          {defaultList.map((item, index) => (
            <MenuItem
              title={item.title}
              icon={item.icon}
              onClick={() => {
                setActive(item.title);
                item.onClick();
                toggle();
              }}
              isActive={item.title === active}
              key={index}
            />
          ))}
        </View>
      </Animated.View>
    </>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  sideMenu: {
    height: Dimensions.get('screen').height,
    zIndex: 5,
    overflow: 'hidden',
    position: 'absolute',
    left: 0,
    borderRightWidth: 1,
  },
  menuText: {
    fontSize: 18,
    marginLeft: 30,
  },
});
