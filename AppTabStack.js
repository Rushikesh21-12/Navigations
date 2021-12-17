import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import BottomTab1 from './src/screens/bottomTabs/BottomTab1'
import BottomTab2 from './src/screens/bottomTabs/BottomTab2'
import BottomTab3 from './src/screens/bottomTabs/BottomTab3'

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AppTabStack() {

    const HomeStack = createNativeStackNavigator()
    function HomeStackScreen() {
        return (
          <HomeStack.Navigator>
            <HomeStack.Screen name = "BottomTab1" component = {BottomTab1} options={{headerShown: false}} />
            <HomeStack.Screen name = "BottomTab2" component = {BottomTab2} options={{headerShown: false}}/>
          </HomeStack.Navigator>
        );
    }

    const SettingsStack = createNativeStackNavigator()
    function SettingsStackScreen() {
        return (
          <SettingsStack.Navigator>
            <SettingsStack.Screen name = "BottomTab3" component = {BottomTab3} options={{headerShown: false}}/>
            <SettingsStack.Screen name = "BottomTab2" component = {BottomTab2} options={{headerShown: false}}/>
          </SettingsStack.Navigator>
        );
    }

    const Tab = createBottomTabNavigator()

    return (
        <NavigationContainer
            
        >
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
    
                        if (route.name === 'Home') {
                            iconName = focused ? 'home': 'home-outline'
                        } else if (route.name === 'Setting') {
                            iconName = focused ? 'settings' : 'settings-outline'
                        }
    
                        // You can return any component that you like here!
                        return <Ionicons name = {iconName} size = {size} color = {color} />
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'black',
                    headerShown: false
                })}
            >
                <Tab.Screen
                    name = 'Home' 
                    component = {HomeStackScreen}
                />

                <Tab.Screen
                    name = 'Setting'
                    component = {SettingsStackScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
