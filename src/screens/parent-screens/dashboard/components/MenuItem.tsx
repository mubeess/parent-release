import Icon from '@safsims/components/Icon/Icon';
import Text from '@safsims/components/Text/Text';
import { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
interface MenuItemProps {
  title?: string;
  BgLine: ReactNode;
  icon: string;
  bgColor?: string;
  onPress?: () => void;
}

export default function MenuItem({
  title = '',
  BgLine,
  icon,
  bgColor = 'rgba(190, 126, 252, 0.9)',
  onPress,
}: MenuItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: bgColor }]}
    >
      <View style={[styles.background]}>
        <Icon color="#fff" name={icon} size={30} />
        <Text
          style={{
            marginLeft: 'auto',
            marginTop: 'auto',
            textTransform: 'uppercase',
            color: '#fff',
            fontSize: 14,
            fontWeight: '600',
          }}
        >
          {title}
        </Text>
      </View>
      <View>{BgLine}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: '48%',
    overflow: 'hidden',
    borderRadius: 10,
    position: 'relative',
    marginBottom: 10,
    marginTop: 10,
  },
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: 20,
  },
});
