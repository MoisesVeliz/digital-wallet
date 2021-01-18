import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
// Screens
import SigninScreen from '../pages/Auth/SigninScreen';
import SignupScreen from '../pages/Auth/SignupScreen';
import HomeScreen from '../pages/HomeScreen';
import { connect } from 'react-redux';
import { Auth } from '../Model/auth.interface';
import { State } from '../Model/state.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signin, loading } from '../redux/actions';
import { StatusBar } from 'react-native';

const AuthStack = ({auth, signin, loading}: {auth: Auth, signin: any, loading: any}) => {

  useEffect(() => { 
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e)
      }
      console.log(userToken);
      signin({userToken: userToken})
      loading(false)
    };

    bootstrapAsync();
    
  },[])

  return (
    <>
      <Stack.Navigator>
        {
          auth.userToken === null || auth.userToken === undefined ? (
            <>
              <Stack.Screen name="Signin" component={SigninScreen} options={screenOptions.common}/>
              <Stack.Screen name="Signup" component={SignupScreen} options={screenOptions.common}/>
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={HomeScreen} options={screenOptions.common}/>
            </>
          )
        }
      </Stack.Navigator>
      <StatusBar hidden={true}/>
    </>
  );
}

const mapStateToProps = (state: State) => {
  return state
}

const mapDispatchToProps =( dispatch: any): {signin: any} => {
  return {
    signin: (props: any) => dispatch(signin(props)),
    loading: (flat: boolean) => dispatch(loading(flat))
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(AuthStack)

const screenOptions = {
  common:{
    headerShown: false
  }
}