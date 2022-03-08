import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import BottomTab1 from './src/screens/bottomTabs/BottomTab1'
import BottomTab2 from './src/screens/bottomTabs/BottomTab2'
import BottomTab3 from './src/screens/bottomTabs/BottomTab3'

import Ionicons from 'react-native-vector-icons/Ionicons';


export default function AppBottomTab() {

    const Tab = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'BottomTab1') 
                            iconName = focused ? 'home': 'home-outline'
                        else if (route.name === 'BottomTab2') 
                            iconName = focused ? 'list-circle' : 'list-circle-outline'
                        else if (route.name === 'BottomTab3') 
                            iconName = focused ? 'settings' : 'settings-outline'

                        return <Ionicons name = {iconName} size = {size} color = {color} />
                    },
                    
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'black',
                    headerShown: false
                })}
            >

                <Tab.Screen
                    name = 'BottomTab1'
                    component = {BottomTab1}
                    options = {{ tabBarBadge: 5}}
                />

                <Tab.Screen
                    name = 'BottomTab2'
                    component = {BottomTab2}
                />

                <Tab.Screen
                    name = 'BottomTab3'
                    component = {BottomTab3}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}
///////