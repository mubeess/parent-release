import { useTheme } from '@react-navigation/native';
import { lightTheme } from '@safsims/utils/Theme';
import { Text as AppText, StyleSheet, TextStyle } from 'react-native';

interface TextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  style?: TextStyle | TextStyle[];
  children?: any;
}
export default function Text({ children, h1, h2, h3, style }: TextProps) {
  const { colors } = useTheme();
  return (
    <AppText
      style={[
        styles.textStyle,

        {
          fontSize: h1 ? 24 : h2 ? 18 : h3 ? 16 : 14,
          fontWeight: h1 ? 'bold' : h2 ? '800' : h3 ? '600' : '400',
          color: colors.PrimaryFontColor,
        },
        style,
      ]}
    >
      {children}
    </AppText>
  );
}
const styles = StyleSheet.create({
  textStyle: {
    color: lightTheme.colors.PrimaryFontColor,
  },
});
