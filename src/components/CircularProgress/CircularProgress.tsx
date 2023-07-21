import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const CircularProgress = ({ color, value }) => {
  const size = 100;
  const strokeWidth = 7;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = value / 100;

  const progressColor = color || '#000';
  const bgColor = '#eee';

  const progressDashArray = `${circumference} ${circumference}`;
  const progressDashOffset = circumference * (1 - progress);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Path
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={progressDashArray}
          strokeDashoffset={progressDashOffset}
          d={`M${size / 2},${size / 2 - radius} A${radius},${radius} 0 1 1 ${size / 2 - 0.01},${
            size / 2 - radius
          }`}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CircularProgress;
