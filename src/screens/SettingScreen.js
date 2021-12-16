import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function SettingScreen({navigation, route}){

    const {homeFirstName} = route.params


    return(
        <View style = {styles.container}>
            <Text>Setting Screen</Text>

            <Text>Prop From Home : {JSON.stringify(homeFirstName)}</Text>

            <TouchableOpacity onPress = {() =>{
                navigation.navigate('Home')
            }}>
                <Text style = {styles.textStyle}>Got to Home Screen</Text>
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
        color: 'blue',
        fontSize: 16
    }
})