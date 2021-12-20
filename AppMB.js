import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MB1 from './src/screens/materialBottomTabs/MB1';
import MB2 from './src/screens/materialBottomTabs/MB2';
import MB3 from './src/screens/materialBottomTabs/MB3';
import MB4 from './src/screens/materialBottomTabs/MB4';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

export default function AppMB() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions = {({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
    
                        if (route.name === 'MB1') 
                            iconName = focused ? 'home': 'home-outline'
                        else if (route.name === 'MB2') 
                            iconName = focused ? 'settings' : 'settings-outline'
                        else if (route.name === 'MB3') 
                            iconName = focused ? 'list' : 'list-outline'
                        else if (route.name === 'MB4') 
                            iconName = focused ? 'heart' : 'heart-outline'
                        return <Ionicons name = {iconName} size = {20} color = {color} />
                    }
                })}
            >
                <Tab.Screen name = "MB1" component = {MB1} options = {{tabBarColor: 'blue'}}/>
                <Tab.Screen name = "MB2" component = {MB2} options = {{tabBarColor: 'black'}}/>
                <Tab.Screen name = "MB3" component = {MB3} options = {{tabBarColor: 'green'}}/>
                <Tab.Screen name = "MB4" component = {MB4} options = {{tabBarColor: 'red'}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}