import { useTheme } from '@react-navigation/native';
import { memo, ReactElement, useEffect } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface ButtonProps {
  IconRight?: ReactElement;
  IconLeft?: ReactElement;
  isLoading?: boolean;
  onPress?: () => void;
  label: string;
  style?: ViewStyle;
  fontStyle?: TextStyle;
  disabled?: boolean;
  backgroundColor?: string;
  pale?: boolean;
}

function Button({
  IconRight,
  IconLeft,
  isLoading = false,
  onPress,
  label,
  style,
  fontStyle,
  disabled = false,
  backgroundColor,
  pale,
  ...props
}: ButtonProps) {
  const { width } = Dimensions.get('window');
  const sharedValue = useSharedValue(-width);
  const { colors } = useTheme();

  const background = pale
    ? 'transparent'
    : (backgroundColor || style?.backgroundColor || colors.PrimaryColor);
  const paleStyle = pale
    ? {
        borderWidth: 1,
        borderColor: colors.PrimaryFontColor,
      }
    : {};

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: sharedValue.value }],
    };
  });
  const startLoading = () => {
    sharedValue.value = withRepeat(withTiming(0.5, { duration: 1000 }), -1, true);
  };
  const stopLoading = () => {
    sharedValue.value = withTiming(-width, { duration: 1000 });
  };

  useEffect(() => {
    if (isLoading) {
      startLoading();
    } else {
      stopLoading();
    }
  }, [isLoading]);
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.3}
      onPress={onPress}
      style={[styles.buttonContainer, style, paleStyle, { backgroundColor: background }]}
      {...props}
    >
      <Animated.View
        style={[styles.animatedView, { backgroundColor: 'rgba(0,0,0,0.5)' }, reanimatedStyle]}
      />
      {IconLeft && IconLeft}
      <Animated.Text
        style={[styles.text, { color: pale ? colors.PrimaryFontColor : '#FFF' }, fontStyle]}
      >
        {label}
      </Animated.Text>
      {IconRight && !isLoading && IconRight}
      {isLoading && <ActivityIndicator color="#fff" />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    // backgroundColor: 'transparent',
    height: 46,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  text: {
    fontSize: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
  },
  animatedView: {
    position: 'absolute',
    zIndex: 10,
    // backgroundColor: 'transparent',
    opacity: 0.3,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
export default memo(Button);
