import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MT1 from './src/screens/materialTopTab/MT!';
import MT2 from './src/screens/materialTopTab/MT2';
import MT3 from './src/screens/materialTopTab/MT3';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export default function AppMT() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                // screenOptions = {({ route }) => ({
                //     tabBarIcon: ({ focused, color, size }) => {
                //         let iconName;
    
                //         if (route.name === 'MB1') 
                //             iconName = focused ? 'home': 'home-outline'
                //         else if (route.name === 'MB2') 
                //             iconName = focused ? 'settings' : 'settings-outline'
                //         else if (route.name === 'MB3') 
                //             iconName = focused ? 'list' : 'list-outline'
                //         else if (route.name === 'MB4') 
                //             iconName = focused ? 'heart' : 'heart-outline'
                //         return <Ionicons name = {iconName} size = {20} color = {color} />
                //     }
                // })}
            >
                <Tab.Screen name = "MT1" component = {MT1} />
                <Tab.Screen name = "MT2" component = {MT2} />
                <Tab.Screen name = "MT3" component = {MT3} />              
            </Tab.Navigator>
        </NavigationContainer>
    )
}

