import { tenantInterceptor } from '@safsims/utils/http-client';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigationContainer from './src/navigation/AppNavigationContainer';
import { persistor, store } from './src/redux/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigationContainer />
        </PersistGate>
      </Provider>
      <Toast />
    </>
  );
}

tenantInterceptor(store);

const styles = StyleSheet.create({});
