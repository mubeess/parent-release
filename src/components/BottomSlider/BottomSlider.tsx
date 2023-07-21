import { useTheme } from '@react-navigation/native';
import { lightTheme } from '@safsims/utils/Theme';
import { useEffect, useState } from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Icon from '../Icon/Icon';
import SafeAreaComponent from '../SafeAreaComponent/SafeAreaComponent';

interface IProps {
  height?: number;
  isOpen?: boolean;
  onClose: () => void;
  children: any;
  closeOnOutsideClick?: boolean;
  hideCloseButton?: boolean;
}

const BottomSlider = ({
  isOpen,
  height,
  onClose,
  children,
  closeOnOutsideClick,
  hideCloseButton,
}: IProps) => {
  const [visible, setVisible] = useState<boolean>(isOpen || false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      setTimeout(() => setVisible(false), 200);
    }
  }, [isOpen]);

  const { colors } = useTheme();
  const { height: screenHeight } = useWindowDimensions();
  const heightValue = height || screenHeight / 1.4;

  const animatedStyle = useAnimatedStyle(() => ({
    height: withTiming(isOpen ? heightValue : 0, { duration: 300 }),
  }));

  return (
    <Pressable
      onPress={() => {
        if (closeOnOutsideClick) {
          onClose();
        }
      }}
      style={[styles.container, { display: visible ? 'flex' : 'none' }]}
    >
      <Animated.View style={[styles.slideContainer, animatedStyle]}>
        {!hideCloseButton && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginBottom: 20,
              paddingRight: 20,
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
              <Icon name="close-square" size={24} />
            </TouchableOpacity>
          </View>
        )}

        <View style={[styles.childrenContainer, { borderColor: colors.PrimaryBorderColor }]}>
          {children}
        </View>
        <SafeAreaComponent />
      </Animated.View>
    </Pressable>
  );
};

export default BottomSlider;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  slideContainer: {
    height: 600,
    width: '100%',
    // zIndex: 5,
    overflow: 'hidden',
    padding: 0,
  },
  childrenContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: lightTheme.colors.PrimaryWhite,
    borderTopWidth: 1,
  },
});
