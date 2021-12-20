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
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MB1 from './src/screens/materialBottomTabs/MB1';
import MB2 from './src/screens/materialBottomTabs/MB2';
import MB3 from './src/screens/materialBottomTabs/MB3';
import MB4 from './src/screens/materialBottomTabs/MB4';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import UserData from './src/screens/UserData';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MT1 from './src/screens/materialTopTab/MT!';
import MT2 from './src/screens/materialTopTab/MT2';
import MT3 from './src/screens/materialTopTab/MT3';

const Tab = createMaterialBottomTabNavigator()
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator()

function HomeStackScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'HomeScreen' component = {MainTabScreen}/>
            <Stack.Screen name = 'Profile' component = {ProfileScreen}/>
            <Stack.Screen name = 'UserData' component = {UserData}/>
        </Stack.Navigator>
    )
}

function TopTabsNavigator(){
    return(
        <TopTab.Navigator>
            <TopTab.Screen name = 'Setting1' component = {MT1}/>
            <TopTab.Screen name = 'Setting2' component = {MT2}/>
            <TopTab.Screen name = 'Setting3' component = {MT3}/>
        </TopTab.Navigator>
    )
}

function MainTabScreen() {
    return(
        <Tab.Navigator
        screenOptions = {({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') 
                    iconName = focused ? 'home': 'home-outline'
                else if (route.name === 'MB2') 
                    iconName = focused ? 'settings' : 'settings-outline'
                else if (route.name === 'MB3') 
                    iconName = focused ? 'list' : 'list-outline'
                else if (route.name === 'MB4') 
                    iconName = focused ? 'heart' : 'heart-outline'
                return <Ionicons name = {iconName} size = {20} color = {color} />
            }
        })}>
            <Tab.Screen name = "Home" component = {HomeScreen} options = {{tabBarColor: 'blue'}}/>
            <Tab.Screen name = "MB2" component = {MB2} options = {{tabBarColor: 'black'}}/>
            <Tab.Screen name = "MB3" component = {MB3} options = {{tabBarColor: 'green'}}/>
            <Tab.Screen name = "MB4" component = {MB4} options = {{tabBarColor: 'red'}}/>
        </Tab.Navigator>
    )
}

export default function AppDrawer() {
  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Home" drawerContent = {props => <DrawerContent {...props}/>}>

        <Drawer.Screen name = "MainTabScreen" component = {HomeStackScreen} options={{headerShown: false}}/>
        <Drawer.Screen name = "Bookmarks" component = {Bookmarks} />
        <Drawer.Screen name = "Notifications" component = {Notifications} />
        <Drawer.Screen name = "Settings" component = {TopTabsNavigator} />
        <Drawer.Screen name = "Support" component = {Support} />

      </Drawer.Navigator>

    </NavigationContainer>
  );
}