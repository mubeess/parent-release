import { useTheme } from '@react-navigation/native';
import { Image, ImageResizeMode, ImageStyle, StyleSheet, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { SchoolIcon } from '../Images';

interface IProps {
  image?: string;
  style?: ImageStyle;
  size?: number;
  isSchool?: boolean;
  resizeMode?: ImageResizeMode;
}

const Avatar = ({ image = '', style = {}, size = 50, isSchool, resizeMode = 'cover' }: IProps) => {
  const isSvg = () => {
    const svg = image.split('.com')[1].split('.')[1];
    if (svg == 'svg') {
      return true;
    } else {
      return false;
    }
  };

  const { colors } = useTheme();
  return !isSchool ? (
    <>
      {image && (
        <>
          {isSvg() ? (
            <SvgUri height={size} width={size} uri={image ? image : ''} />
          ) : (
            <Image
              resizeMode={resizeMode}
              style={{
                height: size,
                width: size,
                borderRadius: size / 2,
                borderWidth: 0.5,
                borderColor: colors.PrimaryBorderColor,
                ...style,
              }}
              source={image ? { uri: image } : require('../../../assets/avatar.png')}
            />
          )}
        </>
      )}
    </>
  ) : !image ? (
    <View
      style={[
        styles.container,
        {
          height: size,
          width: size,
          borderRadius: size / 2,
          borderWidth: 0.5,
        },
        style,
      ]}
    >
      <SchoolIcon />
    </View>
  ) : (
    <Image
      resizeMode={resizeMode}
      style={{
        height: size,
        width: size,
        borderRadius: size / 2,
        borderWidth: 0.5,
        borderColor: colors.PrimaryBorderColor,
        ...style,
      }}
      source={{ uri: image }}
    />
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
});
