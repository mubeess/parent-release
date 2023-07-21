import Text from '@safsims/components/Text/Text';
import { Dimensions } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
const { width } = Dimensions.get('window');
interface SlideDetailProps {
  slide: any;
  scrollOffset: any;
  index: number;
}
const SlideDetail = ({ slide, scrollOffset, index }: SlideDetailProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const input = scrollOffset.value / width;
    const inputRange = [index - 1, index, index + 1];

    return {
      transform: [
        {
          scale: interpolate(input, inputRange, [0, 1, 0], Extrapolate.CLAMP),
        },
      ],
      opacity: interpolate(input, inputRange, [0, 1, 0], Extrapolate.CLAMP),
    };
  });

  return (
    <Animated.View
      key={index}
      style={[
        {
          flex: 1,
          width: width,
          padding: 10,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        },
        animatedStyle,
      ]}
    >
      <Text
        h1
        style={{
          marginBottom: 20,
        }}
      >
        {slide.title}
      </Text>
      <Text style={{ textAlign: 'center' }}>{slide.body}</Text>
    </Animated.View>
  );
};
export default SlideDetail;
