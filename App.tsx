import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './src/routes/AuthStack';
import configureStore from './src/redux/store';

const store = configureStore()

export default () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
            <AuthStack/>
      </NavigationContainer>
    </Provider>
  );
}