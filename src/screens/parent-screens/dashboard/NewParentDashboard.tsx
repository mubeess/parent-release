import AppHeader from '@safsims/components/Header/AppHeader';
import ParentTopTabNavigation from '@safsims/navigation/parent-home-stack-navigation/ParentTopTabNavigation';
import { StyleSheet, View } from 'react-native';

export default function NewParentDashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} />
      <ParentTopTabNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
