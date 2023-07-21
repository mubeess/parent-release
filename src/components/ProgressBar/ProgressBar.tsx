import { useTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface IProps {
  color?: string;
  backgroundColor?: string;
  value: number; // Must be between 1 - 100
}

const ProgressBar = ({ color, backgroundColor, value }: IProps) => {
  const { colors } = useTheme();

  const animatedStyle = useAnimatedStyle(() => ({
    width: withTiming(`${value > 100 ? 100 : value}%`, { duration: 500 }),
  }));

  return (
    <View
      style={{
        height: 5,
        backgroundColor: backgroundColor || '#FAFAFA',
        borderRadius: 2.5,
        width: '100%',
      }}
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            height: '100%',
            backgroundColor: color || colors.PrimaryColor,
            borderRadius: 2.5,
          },
        ]}
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({});
