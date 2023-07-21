import { lightTheme } from '@safsims/utils/Theme';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Avatar from '../Avatar/Avatar';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
interface AppSubHeaderProps {
  avatar?: string;
  name: string;
  iconName?: string;
  onIconPress?: () => void;
  onBack?: () => void;
}
export default function AppSubHeader({
  avatar = '',
  name,
  onIconPress,
  iconName,
  onBack,
}: AppSubHeaderProps) {
  return (
    <View style={styles.subHeader}>
      <TouchableOpacity onPress={onBack} style={styles.back}>
        <Icon name="arrow-left" size={20} color={lightTheme.colors.PrimaryGrey} />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.avatar}>
        <Avatar image={avatar} size={34} />
      </View>
      <Text>{name}</Text>
      {iconName && (
        <TouchableOpacity onPress={onIconPress} style={styles.icon}>
          <Icon name={iconName} size={20} color="#000" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  subHeader: {
    height: 74,
    width: '100%',
    backgroundColor: lightTheme.colors.PrimaryBackground,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 0.6,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#9D9DB7',
  },
  avatar: {
    height: 34,
    width: 34,
    backgroundColor: '#D9D9D9',
    borderRadius: 34,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginLeft: 20,
  },
  image: {
    height: 34,
    width: 34,
    borderRadius: 34,
  },
  icon: {
    marginLeft: 'auto',
    marginRight: 10,
  },
});
