import React from 'react'
import { View, Text, Button } from 'react-native'

export default function MT1({navigation}) {
    return (
        <View>
            <Text>MT1</Text>
            <Button title = 'Setting3' onPress = {() => navigation.navigate('Setting3')}/>
        </View>
    )
}
