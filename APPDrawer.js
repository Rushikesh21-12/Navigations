import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/drawer/Home';
import Bookmarks from './src/screens/drawer/Bookmarks';
import Settings from './src/screens/drawer/Settings';
import Support from './src/screens/drawer/Support';
import Notifications from './src/screens/drawer/Notifications';
import DrawerContent from './src/screens/drawer/DrawerContent';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Home" drawerContent = {props => <DrawerContent {...props}/>}>

        <Drawer.Screen name = "Home" component = {Home} />
        <Drawer.Screen name = "Bookmarks" component = {Bookmarks} />
        <Drawer.Screen name = "Notifications" component = {Notifications} />
        <Drawer.Screen name = "Settings" component = {Settings} />
        <Drawer.Screen name = "Support" component = {Support} />

      </Drawer.Navigator>

    </NavigationContainer>
  );
}