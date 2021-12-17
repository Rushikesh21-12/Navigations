import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

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
            <Icon name="home" size={24} color="black" />

            <TouchableOpacity onPress = {() => {navigation.navigate('UserData', {userName : userName})}}>
                <Text style = {styles.textStyle}>Registration</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {
                navigation.navigate('Profile', { 
                    homeFirstName : homeFirstName, 
                    homeLastName : homeLastName
                })
            }}>
                <Text style = {styles.textStyle}>Go to Profile Screen</Text>
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
        fontSize: 30,
        color: 'blue'
    }
})