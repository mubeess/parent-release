import { lightTheme } from '@safsims/utils/Theme';
import { ReactElement } from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { View } from 'react-native-ui-lib';
import Checkbox from '../Checkbox/Checkbox';
import Text from '../Text/Text';
interface CheckButtonProps {
  title?: string;
  active?: boolean;
  onPress?: () => void;
  Image?: ReactElement;
  style?: ViewStyle;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
export default function CheckButton({
  active = false,
  onPress,
  title = '',
  Image,
  style,
}: CheckButtonProps) {
  const opacityValue = useDerivedValue(() => {
    return withTiming(active ? 1 : 0.4, { duration: 100 });
  }, [active]);

  const reanimatedStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      opacityValue.value,
      [0.4, 1],
      [lightTheme.colors.PrimaryBorderColor, lightTheme.colors.PrimaryColor],
    );
    return {
      // opacity: opacityValue.value,
      borderColor,
    };
  });
  return (
    <AnimatedTouchable onPress={onPress} style={[styles.container, reanimatedStyle, style]}>
      <Checkbox
        value={active}
        color={active ? lightTheme.colors.PrimaryGreen : lightTheme.colors.PrimaryBorderColor}
        style={styles.check}
      />
      <View>
        {Image && Image}
        <Text>{title}</Text>
      </View>
    </AnimatedTouchable>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    borderWidth: 1.5,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  check: {
    borderRadius: 100,
    marginRight: 20,
  },
});
