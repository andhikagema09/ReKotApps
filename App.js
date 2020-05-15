/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import MyStack from './Navigations';
import GlobalContextProvider from './context';

const App: () => React$Node = () => {
  return (
    <GlobalContextProvider>
      <MyStack />
    </GlobalContextProvider>
  );
};

export default App;
