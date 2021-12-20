import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BottomTab1({navigation}) {
    return (
        <View style = {styles.container}>
            <Text style = {{ fontSize: 35}}>Bottom Tab 1 Screen</Text>
            <Ionicons name = 'home' size = {50} color = 'black' />

            <Button title = 'Go to List' onPress = {() => navigation.navigate('BottomTab2')}/>
            <Button title = 'Go to profile stack' onPress = {() => navigation.navigate('Profile')}/>
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