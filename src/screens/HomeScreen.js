import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

export default function HomeScreen({navigation, route}){

    const [homeFirstName, setHomeFirstName] = useState('Rushi')
    const [homeLastName, setHomeLastName] = useState('Solanki')

    const [userName, setUserName] = useState('Not Registered')

    useEffect(() => {
        setUserName(route.params?.userName)
        navigation.setOptions({
            headerRight: () => (
              <Text>{userName}</Text>
            ),
        });
    })

    return(
        <View style = {styles.container}>

            <TouchableOpacity onPress = {() => {navigation.navigate('UserData', {userName : userName})}}>

                <Text style = {{color: 'blue'}}>Registration</Text>

            </TouchableOpacity>

            <Text style = {styles.textStyle}>Home Screen</Text>

            <Text>ProfileName : {route.params?.profileName}</Text>

            <TouchableOpacity onPress = {() => {
                navigation.navigate('Profile', { 
                    homeFirstName : homeFirstName, 
                    homeLastName : homeLastName
                })
            }}>

                <Text style = {{color: 'blue'}}>Click here to open Profile Screen</Text>

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    textStyle: {
        fontSize: 40
    }
})