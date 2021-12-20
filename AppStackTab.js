import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import BottomTab1 from './src/screens/bottomTabs/BottomTab1'
import BottomTab2 from './src/screens/bottomTabs/BottomTab2'
import BottomTab3 from './src/screens/bottomTabs/BottomTab3'

import Ionicons from 'react-native-vector-icons/Ionicons'

export default function AppStackTab() {

    const HomeTab = createBottomTabNavigator()

    function HomeTabScreen() {
        return (
            <HomeTab.Navigator
                screenOptions = {({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'BottomTab1') 
                            iconName = focused ? 'home': 'home-outline'
                        else if (route.name === 'BottomTab3') 
                            iconName = focused ? 'settings' : 'settings-outline'
                        
                        return <Ionicons name = {iconName} size = {size} color = {color} />
                    },
                
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'black',
                    headerShown: false
                })}
            >
                <HomeTab.Screen name = "BottomTab1" component = {BottomTab1}/>
                <HomeTab.Screen name = "BottomTab3" component = {BottomTab3}/>
            </HomeTab.Navigator>
        );
    }

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen
                    name = 'Home' 
                    component = {HomeTabScreen}
                />

                <Stack.Screen
                    name = 'Profile'
                    component = {BottomTab2}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
