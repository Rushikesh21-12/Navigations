import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function UserData({navigation, route}){

    const {userName} = route.params

    return(
        <View style = {styles.container}>
            
            <Text>Registration</Text>

            <Text>{userName}</Text>

            <TextInput
                placeholder = "Enter your name"
                onChangeText = {(value) => navigation.setParams({userName: value})}
            />

            <Button
                title = 'Register'
                onPress = {() => navigation.navigate({
                    name: 'HomeScreen',
                    params: {userName: userName},
                    merge: true
                })}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})