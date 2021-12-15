import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

export default function APP(){

  const Stack = createNativeStackNavigator();
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>

        <Stack.Screen
          name = 'Home'
          component = {HomeScreen}
          options = {{ 
            title: 'Home Screen', 
            // headerRight: () => (
            //  <TouchableOpacity onPress = {() => alert('HRT Pressed!')}>
            //    <Text>HRT</Text>
            //  </TouchableOpacity>
            // ),
          }}
        />

        <Stack.Screen 
          name = 'Profile'
          component = {ProfileScreen} 
          options = {{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
