import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function BottomTab2({navigation}) {
    return (
        <View style = {styles.container}>
            <Text style = {{ fontSize: 35}}>Bottom Tab 2 Screen</Text>
            <Ionicons name = 'list' size = {50} color = 'black' />

            <Button title = 'Go to Tab 1' onPress = {() => navigation.navigate('BottomTab1')}/>
            <Button title = 'Got to tab 3' onPress = {() => navigation.navigate('BottomTab3')}/>
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
