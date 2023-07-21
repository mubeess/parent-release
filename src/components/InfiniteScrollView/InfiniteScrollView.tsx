import { NativeScrollEvent, ScrollView, ScrollViewProps, StyleSheet } from 'react-native';

type IProps = ScrollViewProps & {
  callback?: () => void;
  fetching?: boolean;
};

const InfiniteScrollView = ({ children, callback, fetching, ...rest }: IProps) => {
  const handleScroll = ({ layoutMeasurement, contentOffset, contentSize }: NativeScrollEvent) => {
    const paddingBottom = 10;
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingBottom) {
      callback?.();
    }
  };

  return (
    <ScrollView {...rest} onMomentumScrollEnd={({ nativeEvent }) => handleScroll(nativeEvent)}>
      {children}
    </ScrollView>
  );
};

export default InfiniteScrollView;

const styles = StyleSheet.create({});
