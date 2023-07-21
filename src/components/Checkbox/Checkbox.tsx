import { useTheme } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '../Text/Text';

interface IProps {
  label?: string;
  style?: any;
  value?: boolean;
  onValueChange?: (val?: boolean) => void;
  color?: string;
  disabled?: boolean;
}

const Checkbox = (props: IProps) => {
  const { colors } = useTheme();
  const { label, style = {}, value, onValueChange, color = colors.PrimaryColor, disabled } = props;
  const [isChecked, setIsChecked] = useState(value);

  useEffect(() => {
    setIsChecked(value);
  }, [value]);

  const handlePress = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onValueChange?.(newChecked);
  };

  const checkmarkStyle = {
    backgroundColor: isChecked ? color : 'transparent',
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.checkboxContainer, style]}>
        <View style={[styles.checkbox, { borderColor: colors.PrimaryBorderColor }, checkmarkStyle]}>
          {isChecked && <Text style={{ color: '#FFF', fontSize: 10 }}>✓</Text>}
        </View>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Checkbox;
