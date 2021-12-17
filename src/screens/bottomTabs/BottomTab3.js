import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function BottomTab3({navigation}) {
    return (
        <View style = {styles.container}>
            <Text style = {{ fontSize: 35}}>Bottom Tab 3 Screen</Text>
            <Ionicons name = 'settings' size = {50} color = 'black' />

            <Button title = 'Got to List' onPress = {() => navigation.navigate('BottomTab2')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
