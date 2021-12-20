import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Notifications({navigation}) {
    return (
        <View>
            <Text>Notifications</Text>
            <Button title = 'Open Draawer' onPress = {() => navigation.openDrawer()}/>
            <Button title = 'Toggle Draawer' onPress = {() => navigation.toggleDrawer()}/>
        </View>
    )
}
