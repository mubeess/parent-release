import { useTheme } from '@react-navigation/native';
import moment from 'moment';
import { useRef, useState } from 'react';
import { StyleProp, StyleSheet, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

interface IDayCellProps {
  day: string | number;
  isSelected?: boolean;
  onClick?: () => void;
  outOfRange?: boolean;
  isToday?: boolean;
  isDisabled?: boolean;
}

const DayCell = ({ day, isSelected, onClick, outOfRange, isToday, isDisabled }: IDayCellProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        ...styles.dayCell,
        backgroundColor: isSelected ? colors.PrimaryColor : 'transparent',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          color: isSelected ? '#FFFFFF' : outOfRange ? '#900001' : colors.PrimaryFontColor,
        }}
      >
        {day}
      </Text>
    </TouchableOpacity>
  );
};

interface IProps {
  isRange?: boolean;
  label?: string;
  value?: moment.Moment;
  endDay?: moment.Moment;
  onChange?: (date: any) => void;
  style?: StyleProp<ViewStyle>;
  required?: boolean;
  width?: string;
}
type CountType = 0 | 1 | 2;

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const DatePicker = (props: IProps) => {
  const { isRange, value, endDay, onChange, label, style, required, width } = props;
  const { colors } = useTheme();
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState(moment());
  const [selectedDay, setSelectedDay] = useState(value || moment());
  const [count, setCount] = useState<CountType>(0);
  const [selectedEndDay, setSelectedEndDay] = useState<moment.Moment | undefined>(
    endDay || moment().add(15, 'days'),
  );

  const ref = useRef();

  const handleDateSelection = (date: moment.Moment) => {
    if (isRange) {
      if (count === 0 || count === 2) {
        setSelectedEndDay(undefined);
        setSelectedDay(date);
        setCount(1);
      } else if (count === 1) {
        setSelectedEndDay(date);
        onChange?.([selectedDay, date]);
        setCount(2);
        setShowCalendar(false);
      }
    } else {
      setSelectedDay(date);
      onChange?.(date);
      setShowCalendar(false);
    }
  };

  const previousMonthDays = () => {
    const previousDays: JSX.Element[] = [];
    const firstOfMonth = selectedMonth.startOf('month');

    // Check if Month starts with a Sunday
    if (firstOfMonth.day() !== 0) {
      const previousSunday = moment(selectedMonth)
        .subtract(1, 'months')
        .endOf('month')
        .day('Sunday');
      const dayDifference = firstOfMonth.diff(previousSunday, 'day') + 1;

      for (let i = 0; i < dayDifference; i++) {
        const date = moment(firstOfMonth);
        date.subtract(dayDifference - i, 'day');
        previousDays.push(
          <DayCell
            isSelected={
              isRange
                ? (selectedEndDay
                    ? date.isBetween(
                        moment(selectedDay).subtract(1, 'day'),
                        moment(selectedEndDay).add(1, 'day'),
                      )
                    : false) || date.isSame(selectedDay, 'day')
                : date.isSame(selectedDay, 'day')
            }
            onClick={() => handleDateSelection(date)}
            outOfRange={true}
            key={i + 31}
            day={date.format('D')}
          />,
        );
      }
    }
    return previousDays;
  };

  const nextMonthDays = () => {
    const nextDays: JSX.Element[] = [];
    const nextDates: moment.Moment[] = [];
    const lastOfMonth = selectedMonth.endOf('month');

    // Check if Month ends with a Saturday
    if (lastOfMonth.day() !== 6) {
      const date = moment(lastOfMonth).add(1, 'day');
      nextDates.push(date);
      nextDays.push(
        <DayCell
          isSelected={
            isRange
              ? (selectedEndDay
                  ? date.isBetween(
                      moment(selectedDay).subtract(1, 'day'),
                      moment(selectedEndDay).add(1, 'day'),
                    )
                  : false) || date.isSame(selectedDay, 'day')
              : date.isSame(selectedDay, 'day')
          }
          onClick={() => handleDateSelection(date)}
          outOfRange={true}
          key={date.format('DD/MM/YYYY')}
          day={date.format('D')}
        />,
      );
      while (nextDates[nextDates.length - 1].day() !== 6) {
        const newDate = nextDates[nextDates.length - 1].add(1, 'day');
        nextDates.push(newDate);
        nextDays.push(
          <DayCell
            isSelected={
              isRange
                ? (selectedEndDay
                    ? newDate.isBetween(
                        moment(selectedDay).subtract(1, 'day'),
                        moment(selectedEndDay).add(1, 'day'),
                      )
                    : false) || newDate.isSame(selectedDay, 'day')
                : newDate.isSame(selectedDay, 'day')
            }
            onClick={() => handleDateSelection(newDate)}
            outOfRange={true}
            key={newDate.format('DD/MM/YYYY')}
            day={newDate.format('D')}
          />,
        );
      }
    }
    return nextDays;
  };

  const getDaysOfMonth = () => {
    const daysOfMonth: JSX.Element[] = [];
    for (let i = 1; i <= selectedMonth.daysInMonth(); i++) {
      const date = moment(selectedMonth);
      date.set('date', i);
      daysOfMonth.push(
        <DayCell
          isSelected={
            isRange
              ? (selectedEndDay
                  ? date.isBetween(
                      moment(selectedDay).subtract(1, 'day'),
                      moment(selectedEndDay).add(1, 'day'),
                    )
                  : false) || date.isSame(selectedDay, 'day')
              : date.isSame(selectedDay, 'day')
          }
          isToday={date.isSame(moment(), 'day')}
          onClick={() => handleDateSelection(date)}
          key={i}
          day={i}
        />,
      );
    }
    return daysOfMonth;
  };

  const getRows = () => {
    const slots: JSX.Element[] = [...previousMonthDays(), ...getDaysOfMonth(), ...nextMonthDays()];
    let cells: JSX.Element[] = [];
    return slots.reduce(
      (prev: JSX.Element[][], curr, index) => {
        if (index % 7 === 0) {
          prev.push(cells);
          cells = [];
        }
        cells.push(curr);
        if (index === slots.length - 1) {
          prev.push(cells);
        }
        return prev;
      },
      [[]],
    );
  };

  enum ASEnum {
    add = 'add',
    subtract = 'subtract',
  }

  const onChangeMonth = (val: ASEnum) => {
    const newSelectedMonth = moment(selectedMonth);
    if (val === ASEnum.add) {
      newSelectedMonth.add(1, 'month');
    } else {
      newSelectedMonth.subtract(1, 'month');
    }
    setSelectedMonth(newSelectedMonth);
  };

  const onChangeYear = (val: ASEnum) => {
    const year = moment(selectedMonth).startOf('year');
    const month = moment(selectedMonth).month();
    if (val === ASEnum.add) {
      year.add(1, 'year');
    } else {
      year.subtract(1, 'year');
    }
    const newSelectedMonth = moment(year).month(month);
    setSelectedMonth(newSelectedMonth);
    setYearText(newSelectedMonth.format('YYYY'));
  };

  const [yearText, setYearText] = useState(selectedMonth.format('YYYY'));

  const handleYearInput = (val) => {
    setYearText(val);
    if (val.length === 4) {
      const month = moment(selectedMonth).month();
      const date = moment().month(month).year(parseInt(val)).startOf('month');
      setSelectedMonth(date);
    }
  };

  const borderWidthValue = useSharedValue(1);
  const reanimtedBorderStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      borderWidthValue.value,
      [1, 2],
      [colors.PrimaryBorderColor, colors.PrimaryColor],
    );
    return {
      borderWidth: borderWidthValue.value,
      borderColor,
    };
  });

  return (
    <View style={[{ width: width || '100%', marginTop: 10 }, style]}>
      <View style={{ flexDirection: 'row' }}>
        {label && <Text style={{ ...styles.Label, color: colors.PrimaryFontColor }}>{label}</Text>}
        {required && <Text style={styles.required}>*</Text>}
      </View>
      <AnimatedTouchableOpacity
        // @ts-ignore
        ref={ref}
        onPress={() =>
          setShowCalendar((prev) => {
            const val = !prev;
            if (val) {
              borderWidthValue.value = withTiming(2);
            } else {
              borderWidthValue.value = withTiming(1);
            }
            return !prev;
          })
        }
        style={[styles.input, { borderColor: colors.PrimaryBorderColor }, reanimtedBorderStyle]}
      >
        <Text style={{ color: colors.PrimaryFontColor, textAlign: 'center' }}>
          {isRange
            ? `${moment(selectedDay).format('DD/MM/YYYY')} - ${moment(selectedEndDay).format(
                'DD/MM/YYYY',
              )}`
            : moment(selectedDay).format('Do MMM, YYYY')}
        </Text>
      </AnimatedTouchableOpacity>

      {showCalendar && (
        <View style={{ ...styles.container, borderColor: colors.PrimaryBorderColor }}>
          <View
            style={{
              backgroundColor: colors.PrimaryWhite,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          >
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomColor: colors.PrimaryBorderColor,
                borderBottomWidth: 1,
                paddingVertical: 5,
              }}
            >
              <View
                style={{
                  width: '40%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 10,
                }}
              >
                <TouchableOpacity onPress={() => onChangeMonth(ASEnum.subtract)}>
                  <Icon name="arrow-circle-left" size={24} color={colors.PrimaryFontColor} />
                </TouchableOpacity>

                <Text>{selectedMonth.format('MMMM')}</Text>
                <TouchableOpacity onPress={() => onChangeMonth(ASEnum.add)}>
                  <Icon name="arrow-circle-right" size={24} color={colors.PrimaryFontColor} />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: '40%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 10,
                }}
              >
                <TouchableOpacity onPress={() => onChangeYear(ASEnum.subtract)}>
                  <Icon name="arrow-circle-left" size={24} color={colors.PrimaryFontColor} />
                </TouchableOpacity>

                <TextInput
                  style={{ color: colors.PrimaryFontColor }}
                  onChangeText={handleYearInput}
                  keyboardType="numeric"
                  maxLength={4}
                  value={yearText}
                  onBlur={() => {
                    if (yearText.length < 4) {
                      setYearText(selectedMonth.format('YYYY'));
                    }
                  }}
                />

                <TouchableOpacity onPress={() => onChangeYear(ASEnum.add)}>
                  <Icon name="arrow-circle-right" size={24} color={colors.PrimaryFontColor} />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                marginTop: 10,
                flexWrap: 'wrap',
              }}
            >
              <View style={styles.dayCell}>
                <Text style={{ textAlign: 'center' }}>Su</Text>
              </View>
              <View style={styles.dayCell}>
                <Text style={{ textAlign: 'center' }}>Mo</Text>
              </View>
              <View style={styles.dayCell}>
                <Text style={{ textAlign: 'center' }}>Tu</Text>
              </View>
              <View style={styles.dayCell}>
                <Text style={{ textAlign: 'center' }}>We</Text>
              </View>
              <View style={styles.dayCell}>
                <Text style={{ textAlign: 'center' }}>Th</Text>
              </View>
              <View style={styles.dayCell}>
                <Text style={{ textAlign: 'center' }}>Fr</Text>
              </View>
              <View style={styles.dayCell}>
                <Text style={{ textAlign: 'center' }}>Sa</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: colors.PrimaryWhite,
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          >
            <View style={{ padding: 10 }}>
              {getRows().map((r, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: 10,
                    }}
                  >
                    {r}
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  headCell: {
    borderRadius: 3,
    padding: 5,
    width: 31,
  },
  dayCell: {
    borderRadius: 3,
    padding: 5,
    width: 31,
  },
  buttonHolder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    minHeight: 45,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  Label: {
    // //fontFamily: "Nunito-Regular",
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: '600',
    marginBottom: 10,
  },
  required: {
    color: 'red',
    fontWeight: 'bold',
  },
});
