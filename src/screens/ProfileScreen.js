import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileScreen({navigation, route}){

    const [profileName, setProfileName] = useState('ProfileRushi')
    const [propSentToSetting, setPropSentToSetting] = useState('Prop profile and setting')

    const {homeFirstName, homeLastName} = route.params

    return(
        <View style = {styles.container}>
            <Text style = {styles.textStyle}>Profile Screen</Text>

            <Text>HomeFirstName : {JSON.stringify(homeFirstName)}</Text>
            <Text>HomeLsatName : {JSON.stringify(homeLastName)}</Text>

            <TouchableOpacity onPress = {() => {
                navigation.navigate({
                    name : 'Home', 
                    params : {profileName : profileName},
                    merge : true
                })
            }}
            >
                <Text style = {{color: 'blue'}}>Click here to open Home Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {
                navigation.navigate('Profile', {
                    homeFirstName: 'NavigateRushi',
                    homeLastName: 'NavigateSolanki'
                })
            }}
            >
                <Text style = {{color: 'blue'}}>Go to profile screen again with navigate</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {
                navigation.push('Profile', {
                    homeFirstName: 'AgainPushRushi',
                    homeLastName : 'AgainPushSolanki'
                })
            }}
            >
                <Text style = {{color: 'blue'}}>Go to profile screen again with push</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.goBack()}>
                <Text style = {{color: 'blue'}}>Go back</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.popToTop()}>
                <Text style = {{color: 'blue'}}>Pop to top</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {
                navigation.navigate('Setting', { 
                    homeFirstName: 'One'
                })
            }}>

                <Text style = {{color: 'blue'}}>Click here to open Setting Screen</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {
                navigation.navigate('Home', {
                    screen: 'Setting',
                    params : {propSentToSetting : 'abc'}
                })
            }}>
                <Text style = {{color: 'blue'}}>Go to Home and send prop to settings</Text>
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