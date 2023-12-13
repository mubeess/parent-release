import Icon from '@safsims/components/Icon/Icon';
import Select from '@safsims/components/Select/Select';
import Text from '@safsims/components/Text/Text';
import { TermDto } from '@safsims/generated';
import { lightTheme } from '@safsims/utils/Theme';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface IProps {
  term?: TermDto;
  allTerms: TermDto[];
}

export default function ResultAccordion({
  selectTermOptions,
  termValue,
  sessionValue,
  sessionOptions,
  onTermChange,
  onSessionChange,
}) {
  const heightValue = useSharedValue(0);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      height: heightValue.value,
    };
  });
  const reanimatedIconStyle = useAnimatedStyle(() => {
    const rotate = interpolate(heightValue.value, [0, 220], [0, 180]);
    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });
  return (
    <View style={styles.accordionContainer}>
      <View style={styles.accordionHeader}>
        <View>
          <Text>Term</Text>
          <View style={styles.term}>
            <Icon name="calendar-1" size={20} color={lightTheme.colors.PrimaryFontColor} />
            <Text style={{ marginLeft: 5 }}>
              {termValue?.label || ''}-{sessionValue?.label || ''}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            if (heightValue.value == 0) {
              heightValue.value = withTiming(220, { duration: 500 });
              return;
            }
            heightValue.value = withTiming(0, { duration: 500 });
          }}
        >
          <Animated.View style={[styles.icon, reanimatedIconStyle]}>
            <Icon name="arrow-down-1" size={20} color={lightTheme.colors.PrimaryFontColor} />
          </Animated.View>
        </TouchableOpacity>
      </View>

      <Animated.View
        style={[
          styles.content,
          { paddingVertical: heightValue.value == 220 ? 10 : 0 },
          reanimatedStyle,
        ]}
      >
        <Select
          style={{ marginTop: 20 }}
          label="SESSION"
          value={sessionValue}
          options={sessionOptions}
          onChange={(e) => onSessionChange(e)}
        />
        <Select
          style={{ marginTop: 20 }}
          label="TERM"
          value={termValue}
          options={selectTermOptions}
          onChange={(e) => onTermChange(e)}
        />
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  accordionContainer: {
    minHeight: 100,
    marginTop: 50,
  },
  accordionHeader: {
    backgroundColor: lightTheme.colors.PrimaryFade,
    width: '100%',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 100,
  },
  icon: {
    borderColor: lightTheme.colors.PrimaryBorderColor,
    height: 30,
    width: 30,
    borderRadius: 3,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  term: {
    flexDirection: 'row',
  },
  content: {
    backgroundColor: lightTheme.colors.PrimaryFade,
    width: '100%',
    overflow: 'hidden',
    paddingHorizontal: 20,
  },
});
