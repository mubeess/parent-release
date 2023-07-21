import Icon from '@safsims/components/Icon/Icon';
import Text from '@safsims/components/Text/Text';
import { CheckoutItem } from '@safsims/generated';
import { lightTheme } from '@safsims/utils/Theme';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const { height, width } = Dimensions.get('window');
interface PaymentAccordionProps {
  child: {
    name: string;
    id: string | undefined;
    class: string;
    photo: string | undefined;
    term: string;
    amount: number | undefined;
    invoice_items: CheckoutItem[];
  };
  onAdd: () => void;
}

export default function ChildItem({ child, onAdd }: PaymentAccordionProps) {
  const heightValue = useSharedValue(0);
  const avatar = child.photo;
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      maxHeight: heightValue.value,
    };
  });

  const reanimatedIconStyle = useAnimatedStyle(() => {
    const rotate = interpolate(heightValue.value, [0, height], [0, 180]);
    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  return (
    <View style={styles.accordionContainer}>
      <View style={[styles.accordionHeader, { borderBottomWidth: 0 }]}>
        <View style={styles.profile}>
          <View style={styles.avatar}>
            {!avatar && <Icon name="user" size={30} color={lightTheme.colors.PrimaryFontColor} />}
            {avatar && <Image resizeMode="cover" style={styles.image} source={{ uri: avatar }} />}
          </View>
          <View style={styles.detail}>
            <Text style={{ color: lightTheme.colors.PrimaryColor }}>{child.name}</Text>
            <Text style={{ color: 'rgb(157, 157, 183)' }}>{child.id}</Text>
          </View>
        </View>

        <View style={styles.icons}>
          <TouchableOpacity onPress={onAdd} style={styles.indicator}>
            <Text style={{ color: lightTheme.colors.PrimaryWhite }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accordionContainer: {
    minHeight: 70,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
  },
  accordionHeader: {
    backgroundColor: lightTheme.colors.PrimaryWhite,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 70,
  },
  icon: {
    borderColor: lightTheme.colors.PrimaryBorderColor,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  content: {
    backgroundColor: lightTheme.colors.PrimaryFade,
    width: '100%',
    overflow: 'hidden',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  iconContainer: {
    flexDirection: 'row',
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: lightTheme.colors.PrimaryBorderColor,
    marginTop: 20,
    marginBottom: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 50,
    width: 50,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    borderRadius: 50,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  detail: {
    width: '60%',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: lightTheme.colors.PrimaryGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    minHeight: 70,
    width: '100%',
    backgroundColor: lightTheme.colors.PrimaryFade,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderTopWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  tag: {
    width: '30%',
    minHeight: 30,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  detailtext: {
    fontSize: 12,
    color: '#78599',
  },
  contentTable: {
    width: '100%',
    minHeight: 40,
    backgroundColor: lightTheme.colors.PrimaryWhite,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  tableHeader: {
    width: '100%',
    height: 40,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerItem: {
    fontSize: 12,
  },
  headerItemName: {
    width: '40%',
    fontSize: 12,
  },
});
