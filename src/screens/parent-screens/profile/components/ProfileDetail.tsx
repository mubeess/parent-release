import Text from '@safsims/components/Text/Text';
import { StyleSheet, View } from 'react-native';
interface ProfleDetailProps {
  firtsHeader?: string;
  firstValue?: string;
  secondHeader?: string;
  secondValue?: string;
}
export default function ProfileDetail({
  firstValue,
  firtsHeader,
  secondHeader,
  secondValue,
}: ProfleDetailProps) {
  return (
    <View style={styles.details}>
      <View style={styles.content}>
        <Text style={styles.value} h3>
          {firstValue}
        </Text>
        <Text>{firtsHeader}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.value} h3>
          {secondValue}
        </Text>
        <Text>{secondHeader}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  value: {
    fontSize: 14,
    textAlign: 'left',
  },
  content: {
    alignItems: 'flex-start',
    width: '50%',
  },
});
