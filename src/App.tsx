import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Navigation} from './navigation';

import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';

function App() {
  useEffect(() => {
    const ac = new AbortController();

    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    return function cleanup() {
      ac.abort();
    };
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="light-content" />
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
