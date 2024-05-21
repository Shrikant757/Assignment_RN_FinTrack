import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/Store/store';
import { RootStack } from './src/Navigation/RootStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootStack />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
