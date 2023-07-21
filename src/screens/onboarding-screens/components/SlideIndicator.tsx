import { lightTheme } from '@safsims/utils/Theme';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
interface SlideIndicatorProps {
  scrollOffset: any;
  index: number;
}
const { width } = Dimensions.get('window');
export default function SlideIndicator({ scrollOffset, index }: SlideIndicatorProps) {
  const animatedStyle = useAnimatedStyle(() => {
    const input = scrollOffset.value / width;
    const inputRange = [index - 1, index, index + 1];
    const animatedColor = interpolateColor(input, inputRange, [
      lightTheme.colors.PrimaryBorderColor,
      lightTheme.colors.PrimaryColor,
      lightTheme.colors.PrimaryBorderColor,
    ]);

    return {
      width: interpolate(input, inputRange, [5, 20, 5], Extrapolate.CLAMP),
      backgroundColor: animatedColor,
    };
  });
  return <Animated.View style={[styles.indicator, animatedStyle]}></Animated.View>;
}

const styles = StyleSheet.create({
  indicator: {
    height: 5,
    borderRadius: 5,
  },
});
