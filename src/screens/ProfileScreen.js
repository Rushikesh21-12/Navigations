import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileScreen({navigation}){
    return(
        <View style = {styles.container}>
            <Text style = {styles.textStyle}>Profile Screen</Text>
            <TouchableOpacity onPress = {() => navigation.navigate('Home')}>
            <Text style = {{color: 'blue'}}>Click here to open Home Screen</Text>
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