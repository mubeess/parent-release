import { useTheme } from '@react-navigation/native';
import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View, ViewStyle } from 'react-native';

interface IProps {
  size?: number;
  style?: ViewStyle;
  section?: boolean;
}

const Loader = ({ size = 50, style = {}, section }: IProps) => {
  const { colors } = useTheme();
  const fillAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fillAnim, {
          toValue: 1,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(fillAnim, {
          toValue: 0,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, [fillAnim]);

  const fillInterpolation = fillAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '140%'],
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: section ? '50%' : 'auto',
        ...style,
      }}
    >
      <Animated.View
        style={[
          styles.waterDrop,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderTopRightRadius: size / 6,
            backgroundColor: colors.PrimaryBorderColor,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.waterDropFill,
            { backgroundColor: colors.PrimaryColor, height: fillInterpolation },
          ]}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  waterDrop: {
    overflow: 'hidden',
    // transform: [{ rotate: '-45deg' }],
  },
  waterDropFill: {
    position: 'absolute',
    bottom: -5,
    left: -30,
    right: 0,
    // transform: [{ rotate: '45deg' }],
    width: '190%',
  },
});

export default Loader;
