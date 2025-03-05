import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login} from '../Screen/authentication/SignIn/Login';
import {Mobile} from '../Screen/authentication/Signup/Mobile';
import DrawerNavigation from './DrawNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigation(){
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Mobile" component={Mobile} options={{ headerShown: false }} />
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}



