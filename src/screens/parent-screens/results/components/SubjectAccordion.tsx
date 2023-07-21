import { useTheme } from '@react-navigation/native';
import CircularProgress from '@safsims/components/CircularProgress/CircularProgress';
import Icon from '@safsims/components/Icon/Icon';
import Text from '@safsims/components/Text/Text';
import { SubjectResult } from '@safsims/generated';
import { lightTheme } from '@safsims/utils/Theme';
import useDisclosure from '@safsims/utils/useDisclosure/useDisclosure';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
interface SubjectAccordionProps {
  subject: SubjectResult;
  activeView: 'chart' | 'text';
}

export default function SubjectAccordion({ subject, activeView }: SubjectAccordionProps) {
  const { colors } = useTheme();
  const height = activeView === 'text' ? 220 : 350;
  const heightValue = useSharedValue(0);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      height: heightValue.value,
    };
  });
  const reanimatedIconStyle = useAnimatedStyle(() => {
    const rotate = interpolate(heightValue.value, [0, height], [0, 180]);
    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });
  const { isOpen, toggle } = useDisclosure();
  return (
    <View style={styles.accordionContainer}>
      <View style={[styles.accordionHeader, { borderBottomWidth: 0 }]}>
        <View>
          <Text>{subject?.subject_name}</Text>
        </View>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            toggle();
            if (heightValue.value == 0) {
              heightValue.value = withTiming(height, { duration: 500 });
              return;
            }
            heightValue.value = withTiming(0, { duration: 500 });
          }}
        >
          <View
            style={[
              styles.indicator,
              {
                backgroundColor:
                  subject.result?.grade == 'F'
                    ? lightTheme.colors.PrimaryRed
                    : lightTheme.colors.PrimaryGreen,
              },
            ]}
          ></View>
          <Text>{`${subject?.result?.final_average}`}</Text>
          <Animated.View style={[styles.icon, reanimatedIconStyle]}>
            <Icon name="arrow-down-1" size={20} color={lightTheme.colors.PrimaryFontColor} />
          </Animated.View>
        </TouchableOpacity>
      </View>

      <Animated.View style={[styles.content, reanimatedStyle]}>
        <View style={{ marginTop: 20 }}>
          {activeView === 'chart' && (
            <CircularProgress value={subject?.result?.final_average} color={colors.PrimaryGreen} />
          )}
        </View>
        <View>
          <View style={styles.scores}>
            {subject?.assessment_results?.map((item) => (
              <View key={item?.result?.assessment_id} style={[styles.gradeContainer]}>
                <View style={styles.ca}>
                  <Text>{item?.result?.assessment_name}</Text>
                </View>
                <View style={styles.marks}>
                  <Text>{item?.result?.score}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.divider}></View>
        <Text h3>Remark</Text>
        <Text style={{ marginTop: 10 }}>{subject?.result?.comments}</Text>
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  accordionContainer: {
    minHeight: 70,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 10,
  },
  accordionHeader: {
    backgroundColor: lightTheme.colors.PrimaryWhite,
    width: '100%',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 70,
  },
  icon: {
    borderColor: lightTheme.colors.PrimaryBorderColor,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  term: {
    flexDirection: 'row',
  },
  content: {
    backgroundColor: lightTheme.colors.PrimaryBackground,
    width: '100%',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderTopWidth: 0,
    overflow: 'hidden',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  scores: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 93,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: lightTheme.colors.PrimaryWhite,
    paddingBottom: 0,
    overflow: 'hidden',
  },
  ca: {
    height: 40,
    backgroundColor: lightTheme.colors.PrimaryFade,
    borderRightWidth: 1,
    borderRightColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    overflow: 'hidden',
  },
  marks: {
    height: 50,
    backgroundColor: lightTheme.colors.PrimaryWhite,
    // width: '33%',
    // flexGrow: 1,
    borderRightWidth: 1,
    borderRightColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 0,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  gradeContainer: {
    minWidth: '33.33%',
    maxWidth: '33.33%',
    // minWidth: '33%',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: lightTheme.colors.PrimaryBorderColor,
    marginTop: 20,
    marginBottom: 10,
  },
});
