import Text from '@safsims/components/Text/Text';
import { lightTheme } from '@safsims/utils/Theme';
import { StyleSheet, View } from 'react-native';
interface SkillCardProps {
  name?: string;
  grade?: string;
}
export default function SkillCard({ name = '', grade = '' }: SkillCardProps) {
  return (
    <View style={styles.cardContainer}>
      <Text>{name}</Text>
      <View style={styles.grade}>
        <Text style={{ color: lightTheme.colors.PrimaryWhite, textTransform: 'uppercase' }} h1>
          {grade}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    height: 70,
    width: '100%',
    marginTop: 10,
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  grade: {
    width: 40,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
