import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";



export default function HomeScreen({navigation}){

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button title = 'HB' onPress={() => alert('Button Pressed!!')} />
          ),
        });
      }, [navigation]);

    return(
        <View style = {styles.container}>
            <Text style = {styles.textStyle}>Home Screen</Text>
            <TouchableOpacity onPress = {() => navigation.navigate('Profile')}>
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