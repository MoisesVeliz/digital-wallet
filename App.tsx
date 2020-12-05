import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './src/routes/auth/AuthStack';

export default () => {
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  );
}