import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
// Screens
import SigninScreen from '../../pages/SigninScreen';
import SignupScreen from '../../pages/SignupScreen';

export default () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Signin" component={SigninScreen} options={screenOptions.common}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={screenOptions.common}/>
      </Stack.Navigator>
  );
}

const screenOptions = {
  common:{
    headerShown: false
  }
}