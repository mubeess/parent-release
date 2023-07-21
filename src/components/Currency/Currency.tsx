import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { Countries } from '@safsims/utils/utils';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { formatCurrency } from 'react-native-format-currency';
import Text from '../Text/Text';

interface IProps {
  amount?: string | number;
  style?: any;
  showRoundedOnMobile?: boolean;
  color?: string
}

const Currency = ({ amount, style, showRoundedOnMobile, color }: IProps) => {
  const schoolInfo = useAppSelector((state) => state.configuration.schoolInfo);
  const country = schoolInfo?.basic_school_information?.country?.name;
  const currency =
    Countries.find((item) => item.label.toLowerCase() === country?.toLowerCase())?.currency || '₦';

  const val =
    currency +
    new Intl.NumberFormat('en-GB', {
      notation: 'compact',
      compactDisplay: 'short',
    }).format(parseFloat(`${amount}`));

  const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] = formatCurrency({
    amount: parseFloat(`${amount}`) || 0,
    code: 'GBP',
  });
  const [negative, setNegative] = useState<string>('');

  useEffect(() => {
    if (valueFormattedWithoutSymbol < 0) {
      setNegative('-');
    } else {
      setNegative('');
    }
  }, [valueFormattedWithoutSymbol]);

  return (
    <Text style={[style, {color}]}>
      {negative}{' '}
      {showRoundedOnMobile ? val : String(currency + valueFormattedWithoutSymbol).replace('-', '')}
    </Text>
  );
};

export default Currency;

const styles = StyleSheet.create({});
