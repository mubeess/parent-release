import { updateAppUserState } from '@safsims/redux/users/actions';
import { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
interface ModalProps {
  isOpen: boolean;
  children: any;
}
export default function Modal({ children, isOpen = false }: ModalProps) {
  const sharedValue = useSharedValue(0);
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const derivedValue = useDerivedValue(() => {
    return isOpen ? withTiming(1, { duration: 200 }) : withTiming(0, { duration: 200 });
  });
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: derivedValue.value }],
      opacity: derivedValue.value,
    };
  });

  useEffect(() => {
    if (isOpen) {
      dispatch(
        updateAppUserState({
          tabBarStyle: {
            display: 'none',
          },
        }),
      );
    } else {
      dispatch(
        updateAppUserState({
          tabBarStyle: {
            display: 'flex',
          },
        }),
      );
    }
  }, [isOpen]);
  return <Animated.View style={[styles.container, reanimatedStyle]}>{children}</Animated.View>;
}
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    zIndex: 200,
    width: '100%',
    padding: 20,
  },
});
