import { useTheme } from '@react-navigation/native';
import { lightTheme } from '@safsims/utils/Theme';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Colors } from 'react-native-ui-lib';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export interface ISelectOptionType {
  label: string;
  value: any;
  icon?: any;
  rightIcon?: any;
  extras?: any;
}

interface ISelectProps {
  style?: ViewStyle;
  label?: string;
  subLabel?: string;
  required?: boolean;
  isSearchable?: boolean;
  onChange?: (val: any) => void;
  value?: ISelectOptionType | null;
  options: ISelectOptionType[];
  placeholder?: string;
  inputValue?: string;
  setInputValue?: (val: string) => void;
}

const Select = ({
  style,
  isSearchable,
  value,
  onChange,
  options,
  required,
  label,
  placeholder,
  subLabel,
  inputValue,
  setInputValue,
}: ISelectProps) => {
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

  const [selectedValue, setSelectedValue] = useState(value);
  const [inputVal, setInputVal] = useState<string>(inputValue || '');
  const [top, setTop] = useState(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [menuWidth, setMenuWidth] = useState<any>('90%');
  const ref = useRef();
  const inputRef = useRef();

  const filteredOptions = useMemo(
    () => options.filter((item) => item.label.toLowerCase().includes(inputVal.toLowerCase())),
    [options, inputVal],
  );

  useEffect(() => {
    setSelectedValue(value);
    setInputVal(value?.label || '');
    setInputValue?.(value?.label || '');
  }, [value]);

  const handleModal = (focus?: boolean) => {
    // @ts-ignore
    ref?.current?.measure((_fx, _fy, _w, h, _px, py) => {
      setTop(isSearchable ? py : py + h);
      setMenuWidth(_w);
    });
    setVisible((prev) => {
      const val = !prev;
      return focus || val;
    });
  };

  const onClose = () => {
    if (!selectedValue) {
      setInputVal('');
      setInputValue?.('');
    } else {
      setInputVal(selectedValue?.label);
      setInputValue?.(selectedValue?.label);
    }
  };

  useEffect(() => {
    if (!visible) {
      // @ts-ignore
      inputRef?.current?.blur();
      borderWidthValue.value = withTiming(1);
    } else {
      if (isSearchable) {
        // @ts-ignore
        inputRef?.current?.focus();
      }
    }
  }, [visible]);

  return (
    <View style={style}>
      <View style={styles.labelContainer}>
        <View style={{ flexDirection: 'row' }}>
          {label && <Text style={styles.label}>{label}</Text>}
          {required && <Text style={styles.required}>*</Text>}
        </View>
        {subLabel && <Text style={styles.subLabel}>{subLabel}</Text>}
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
        <Text style={[styles.input]}>
          {inputVal || <Text style={{ color: colors.PrimaryGrey }}> {placeholder} </Text>}
        </Text>
        <Pressable
          onPress={() => {
            if (isSearchable) {
              setVisible(false);
            }
          }}
        >
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
                onClose();
              }}
            >
              <View style={[styles.optionsMenu, { top }]}>
                {isSearchable && (
                  <View
                    style={[
                      styles.mainContainer,
                      {
                        backgroundColor: colors.PrimaryWhite,
                        width: menuWidth,
                        borderColor: colors.PrimaryColor,
                        borderWidth: 2,
                      },
                    ]}
                  >
                    <TextInput
                      // @ts-ignore
                      ref={inputRef}
                      placeholder="Select"
                      style={[styles.input]}
                      value={inputVal}
                      onChangeText={(e) => {
                        setInputVal(e);
                        setInputValue?.(e);
                      }}
                    />
                    <Pressable>
                      <Icon name="arrow-right" size={18} />
                    </Pressable>
                  </View>
                )}
                <View style={[styles.triangle, { borderBottomColor: colors.PrimaryBorderColor }]} />
                <View
                  style={[
                    styles.optionsContainer,
                    { borderColor: colors.PrimaryBorderColor, width: menuWidth },
                  ]}
                >
                  {
                    <FlatList
                      data={isSearchable ? filteredOptions : options}
                      renderItem={({ item: data }) => (
                        <TouchableOpacity
                          style={[styles.options, { borderColor: colors.PrimaryBorderColor }]}
                          onPress={() => {
                            onChange?.(data);
                            setSelectedValue(data);
                            setInputVal(data.label);
                            setInputValue?.(data.label);
                            setVisible(false);
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
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 48,
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
    flexDirection: 'column',
    marginBottom: 10,
    alignItems: 'flex-start',
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
  subLabel: {
    fontSize: 12,
    fontWeight: '400',
  },
});
