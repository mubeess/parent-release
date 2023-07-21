import { useTheme } from '@react-navigation/native';
import Text from '@safsims/components/Text/Text';
import { lightTheme } from '@safsims/utils/Theme';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
interface SchoolItemProps {
  logo: string;
  name: string;
  slogan?: string;
  selected?: boolean;
  onPress?: () => void;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
export default function SchoolItem({
  logo,
  name,
  slogan = '',
  selected = false,
  onPress,
}: SchoolItemProps) {
  const isSelected = useDerivedValue(() => {
    return selected ? withTiming(1, { duration: 500 }) : withTiming(0, { duration: 500 });
  });
  const { colors } = useTheme();
  const reanimtedBorderStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      isSelected.value,
      [0, 1],
      [colors.PrimaryBorderColor, colors.PrimaryColor],
    );
    return {
      borderColor,
    };
  });
  return (
    <AnimatedTouchable
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.itemContainer, reanimtedBorderStyle]}
    >
      <View style={styles.schoolDetail}>
        <Image
          source={{ uri: logo || 'https://picsum.photos/100' }}
          style={[styles.logo, { borderColor: colors.PrimaryBorderColor }]}
          resizeMode="contain"
        />
        <View style={styles.schoolName}>
          <Text h3>{name}</Text>
          <Text>{slogan}</Text>
        </View>
      </View>
      {selected && (
        <View style={styles.selected}>
          <Text style={{ color: lightTheme.colors.PrimaryColor, fontSize: 12 }}>Selected</Text>
        </View>
      )}
    </AnimatedTouchable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    height: 84,
    backgroundColor: '#ffffff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 5,
    marginTop: 10,
    shadowColor: lightTheme.colors.PrimaryBorderColor,
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
  schoolDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selected: {
    height: 24,
    width: 67,
    backgroundColor: lightTheme.colors.PrimaryFadedBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  logo: {
    height: 44,
    width: 44,
    borderRadius: 22,
    marginRight: 10,
    borderWidth: 1,
  },
  schoolName: {
    width: '65%',
  },
});
