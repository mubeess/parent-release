import { useTheme } from '@react-navigation/native';
import { lightTheme } from '@safsims/utils/Theme';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Colors } from 'react-native-ui-lib';
import uuid from 'react-native-uuid';
import Icon from '../Icon/Icon';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export interface IMultiSelectOptionType {
  label: string;
  value: any;
  icon?: any;
  rightIcon?: any;
  extras?: any;
  pid?: string;
}

interface ISelectProps {
  label?: string;
  required?: boolean;
  isSearchable?: boolean;
  onChange?: (val: any) => void;
  value?: IMultiSelectOptionType[];
  options: IMultiSelectOptionType[];
  placeholder?: string;
}

const MultiSelect = ({ value, onChange, options, required, label, placeholder }: ISelectProps) => {
  const { colors } = useTheme();
  const borderWidthValue = useSharedValue(1);
  const reanimtedBorderStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      borderWidthValue.value,
      [1, 2],
      [lightTheme.colors.PrimaryBorderColor, lightTheme.colors.SafsimsBlue],
    );
    return {
      borderWidth: borderWidthValue.value,
      borderColor,
    };
  });

  const [selectedValue, setSelectedValue] = useState(value || []);
  const [inputValue, setInputValue] = useState<string>('');
  const [top, setTop] = useState(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [menuWidth, setMenuWidth] = useState<any>('90%');
  const ref = useRef();
  const inputRef = useRef();

  const filteredOptions = useMemo(
    () => options.filter((item) => item.label.toLowerCase().includes(inputValue.toLowerCase())),
    [options, inputValue],
  );

  const [displayOptions, setDisplayOptions] = useState<IMultiSelectOptionType[]>(
    options.map((item) => ({ ...item, pid: uuid.v4() as string })),
  );

  useEffect(() => {
    if (!displayOptions.length) {
      setVisible(false);
    }
  }, [displayOptions, visible]);

  useEffect(() => {
    if (value) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleModal = (focus?: boolean) => {
    // @ts-ignore
    ref?.current?.measure((_fx, _fy, _w, h, _px, py) => {
      setTop(py + h);
      setMenuWidth(_w);
    });
    setVisible((prev) => {
      const val = !prev;
      return focus || val;
    });
  };

  useEffect(() => {
    if (!visible) {
      // @ts-ignore
      inputRef?.current?.blur();
      borderWidthValue.value = withTiming(1);
    }
  }, [visible]);

  return (
    <>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        {required && <Text style={styles.required}>*</Text>}
      </View>
      <AnimatedTouchableOpacity
        // @ts-ignore
        ref={ref}
        style={[
          styles.mainContainer,
          reanimtedBorderStyle,
          { backgroundColor: colors.PrimaryWhite },
        ]}
        onPress={() => {
          borderWidthValue.value = withTiming(2);
          handleModal(true);
        }}
      >
        {selectedValue?.length ? (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', maxWidth: '95%' }}>
            {selectedValue.map((item, index) => (
              <View style={[styles.pills, { borderColor: colors.PrimaryColor }]}>
                <Text key={index}> {item.label} </Text>

                <TouchableOpacity
                  onPress={() => {
                    setSelectedValue((prev) => {
                      const res = prev?.filter((data) => data.pid !== item.pid);
                      setDisplayOptions((prev) => [...prev, item]);
                      onChange?.(res);
                      return res;
                    });
                    setVisible(true);
                  }}
                >
                  <Icon name="close-circle" size={18} color={colors.PrimaryColor} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ) : (
          <Text style={{ color: colors.PrimaryGrey }}> {placeholder} </Text>
        )}

        <Pressable>
          <Icon name="arrow-right" size={18} />
        </Pressable>
      </AnimatedTouchableOpacity>

      {visible && (
        <>
          <Modal visible={visible} transparent animationType="none">
            <TouchableOpacity
              style={styles.overlay}
              onPress={() => {
                setVisible(false);
              }}
            >
              <View style={[styles.optionsMenu, { top }]}>
                <View style={[styles.triangle, { borderBottomColor: colors.PrimaryBorderColor }]} />
                <View
                  style={[
                    styles.optionsContainer,
                    { borderColor: colors.PrimaryBorderColor, width: menuWidth },
                  ]}
                >
                  {
                    <FlatList
                      data={displayOptions}
                      renderItem={({ item: data }) => (
                        <TouchableOpacity
                          style={[styles.options, { borderColor: colors.PrimaryBorderColor }]}
                          onPress={() => {
                            setSelectedValue((prev) => {
                              const val = [...(prev || []), data];
                              onChange?.(val);
                              setDisplayOptions((prev) =>
                                prev.filter((item) => item.pid !== data.pid),
                              );
                              return val;
                            });
                          }}
                        >
                          {data.icon}
                          <Text> {data.label}</Text>
                        </TouchableOpacity>
                      )}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  }
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
        </>
      )}
    </>
  );
};

export default MultiSelect;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 15,
    paddingVertical: 10,
    minheight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '90%',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 0.2,
    borderLeftColor: 'transparent',
    borderRightWidth: 0.2,
    borderRightColor: 'transparent',
    borderBottomWidth: 0.2,
  },
  optionsContainer: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    maxHeight: 200,
    overflow: 'scroll',
  },
  options: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },
  optionsMenu: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,
    shadowColor: Colors.grey40,
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.2,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  labelContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'flex-start',
    width: '100%',
  },
  required: {
    color: 'red',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  pills: {
    flexDirection: 'row',
    padding: 5,
    borderRadius: 15,
    borderWidth: 0.5,
    margin: 5,
    alignItems: 'center',
  },
});
