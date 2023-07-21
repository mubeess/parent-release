import { darken, lighten } from 'polished';
import { StyleSheet, View } from 'react-native';
import Text from '../Text/Text';

const Tag = ({ title, color = '#0066F5' }) => {
  return (
    <View style={{ backgroundColor: lighten('0.3', color), ...styles.tag }}>
      <Text style={[styles.text, { color: darken('0.15', color) }]}>{title}</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  text: {
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  tag: {
    padding: 2,
    paddingHorizontal: 4,
    height: 20,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
