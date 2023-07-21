import { useTheme } from '@react-navigation/native';
import { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../Text/Text';

interface EmptyStateProp {
  Image?: ReactElement;
  title?: string;
  info?: string;
  Action?: ReactElement;
  section?: boolean;
}
export default function EmptyState({
  Image,
  title = 'Nothing to see here',
  info = 'There are no available items.',
  Action,
  section,
}: EmptyStateProp) {
  const { colors } = useTheme();
  return (
    <View
      style={[
        styles.container,
        { marginVertical: section ? '50%' : 'auto', backgroundColor: 'transparent' },
      ]}
    >
      {Image && Image}
      {title && (
        <Text style={styles.title} h2>
          {title}
        </Text>
      )}
      {info && <Text style={styles.info}>{info}</Text>}
      {Action && Action}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
  info: {
    marginVertical: 10,
    marginBottom: 30,
  },
  title: {
    marginTop: 10,
  },
});
