import { useTheme } from '@react-navigation/native';
import Button from '@safsims/components/Button/Button';
import { OnboardingSvg } from '@safsims/components/Images';
import SafeAreaComponent from '@safsims/components/SafeAreaComponent/SafeAreaComponent';
import { updateAppUserState } from '@safsims/redux/users/actions';
import { lightTheme } from '@safsims/utils/Theme';
import { useRef, useState } from 'react';
import { Dimensions, Image, StatusBar, StyleSheet, View } from 'react-native';
import Animated, {
  scrollTo,
  useAnimatedProps,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import SlideDetail from './components/SlideDetail';
import SlideIndicator from './components/SlideIndicator';
const { height, width } = Dimensions.get('window');

export default function OnboardingScreen({ navigation }) {
  const dispatch = useDispatch();
  const scrollViewRef = useRef<Animated.ScrollView>(null);
  const onboardUser = () =>
    dispatch(
      updateAppUserState({
        onboarded: true,
      }),
    );
  const scrollRef = useRef();
  const [step, setStep] = useState(1);
  const sharedValue = useSharedValue(0);
  const manualScrolling = useSharedValue(false);
  const aref = useAnimatedRef();
  const animatedProps = useAnimatedProps(() => {
    return {
      contentOffset: { x: sharedValue.value, y: 0 },
    };
  });

  const handleSwipe = (val) => {
    if (val === 0) {
      setStep(1);
    }
    if (val === width) {
      setStep(2);
    }
    if (val.toFixed(2) === (width * 2).toFixed(2)) {
      setStep(3);
    }
  };

  const scrollHandler = useAnimatedScrollHandler(
    {
      onScroll: (event) => {
        if (manualScrolling.value) {
          return;
        }
        sharedValue.value = event.contentOffset.x;
      },
    },
    [manualScrolling],
  );

  const incrementScroll = (x: number) => {
    sharedValue.value = withTiming(x);
    scrollViewRef.current?.scrollTo({ x: sharedValue.value + width, y: 0, animated: true });
  };

  const text = useDerivedValue(() => {
    return sharedValue.value === width * 2 ? 'Finish' : 'Next';
  });

  useDerivedValue(() => {
    manualScrolling.value = true;
    scrollTo(aref, sharedValue.value, 0, true);
    manualScrolling.value = false;
  });

  const decrementScroll = (x: number) => {
    sharedValue.value = withTiming(x);
    scrollViewRef.current?.scrollTo({ x: sharedValue.value - width, y: 0, animated: true });
  };
  const { colors } = useTheme();
  const slides = [
    {
      title: 'Welcome Home!',
      body: `Your home page, where you have a quick link 
    and view of what’s important`,
      image: require('../../../assets/screen1.png'),
    },
    {
      title: 'Payment at your finger tips',
      body: `School fees payment at your finger tips, no need 
    for a bank visit`,
      image: require('../../../assets/screen2.png'),
    },
    {
      title: 'Result & Performance',
      body: 'Have your child’s result and performance always ready and with you on the go',
      image: require('../../../assets/screen3.png'),
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.PrimaryColor }]}>
      <SafeAreaComponent />
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.imagesContainer}>
        <OnboardingSvg />
        <Animated.ScrollView
          ref={scrollViewRef}
          animatedProps={animatedProps}
          onScroll={scrollHandler}
          onMomentumScrollEnd={(e) => handleSwipe(e.nativeEvent.contentOffset.x)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          decelerationRate="fast"
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          style={[styles.scrollImages]}
        >
          {slides.map((slide, index) => (
            <View key={index.toString()} style={styles.imageSlide}>
              <Image style={styles.image} resizeMode="contain" source={slide.image} />
            </View>
          ))}
        </Animated.ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        {slides.map((slide, index) => (
          <SlideDetail key={index} slide={slide} scrollOffset={sharedValue} index={index} />
        ))}
      </View>

      <Animated.View style={styles.buttons}>
        <Button
          onPress={() => {
            setStep((prev) => {
              if (prev > 1) {
                return prev - 1;
              } else {
                return prev;
              }
            });
            if (sharedValue.value == 0) {
              return;
            }
            decrementScroll(sharedValue.value - width);
          }}
          fontStyle={{
            color: lightTheme.colors.PrimaryGrey,
          }}
          style={{
            ...styles.button,
            backgroundColor: lightTheme.colors.PrimaryBackground,
            borderWidth: 1,
            borderColor: lightTheme.colors.PrimaryGrey,
          }}
          label="Previous"
        />
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <SlideIndicator index={index} scrollOffset={sharedValue} key={index.toString()} />
          ))}
        </View>

        <Button
          onPress={() => {
            setStep((prev) => {
              if (prev < 3) {
                return prev + 1;
              } else {
                return prev;
              }
            });
            if (sharedValue.value.toFixed(2) === (width * 2).toFixed(2)) {
              onboardUser();
            } else {
              incrementScroll(sharedValue.value + width);
            }
          }}
          style={styles.button}
          label={`${step === 3 ? 'Finish' : 'Next'}`}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagesContainer: {
    height: height * 0.6,
    backgroundColor: lightTheme.colors.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: height * 0.5,
  },
  scrollImages: {
    flex: 1,
    width: '100%',
  },
  imageSlide: {
    minWidth: width,
    height: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  svg: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  detailSlide: {
    minWidth: width,
    height: '50%',
    backgroundColor: 'white',
  },
  buttons: {
    height: 120,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 30,
  },
  indicatorContainer: {
    width: 50,
    backgroundColor: 'white',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 90,
  },
});
