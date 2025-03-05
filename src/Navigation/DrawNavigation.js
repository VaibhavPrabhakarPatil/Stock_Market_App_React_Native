import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import Logout from '../Screen/Pages/Logout';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="HomePage" screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomePage" component={BottomNavigation} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}
