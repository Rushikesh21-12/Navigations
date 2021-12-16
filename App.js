import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SettingScreen from "./src/screens/SettingScreen";
import UserData from "./src/screens/UserData";

function LogoTitle() {
  return (
    <View style = {{flexDirection: "row", alignItems: "center"}}>
      
      <Image
        style = {{ width: 30, height: 30, marginRight: 20 }}
        source = {{uri: ('https://reactjs.org/logo-og.png')}}
      />
      <Text>Home Screen</Text>
    </View>
    
  );
}

export default function APP(){

  const Stack = createNativeStackNavigator();
  
  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName = 'Home'
        screenOptions = {{
          headerStyle: {
            backgroundColor: 'yellow'
          },
          headerTintColor: 'green',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'red'
          } 
        }}
      >

        <Stack.Screen
          name = 'Home'
          component = {HomeScreen}
          options = {{ 
            // headerRight: () => (
            //  <TouchableOpacity onPress = {() => alert('HRT Pressed!')}>
            //    <Text>HRT</Text>
            //  </TouchableOpacity>
            // ),
            headerTitle: (props) => <LogoTitle {...props} />
          }}
        />

        <Stack.Screen 
          name = 'Profile'
          component = {ProfileScreen} 
          options = {{
            title: 'Profile',
            headerStyle: {
              backgroundColor: 'yellow'
            },
            headerTintColor: 'green',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'red'
            }  
          }}
        />

        <Stack.Screen
          name = 'Setting'
          component = {SettingScreen}
        />

        <Stack.Screen
          name = 'UserData'
          component = {UserData}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
