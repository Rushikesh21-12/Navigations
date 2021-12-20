import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Caption, Drawer, Switch, Title } from "react-native-paper";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";


export default function DrawerContent(props){

    const [isDark, setIsDark] = useState(false)

    const toggleTheme = () => {
        setIsDark(!isDark)
    }

    return(
        <View style = {{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style = {{flexDirection: "row", alignItems: "center"}}>
                    <View style = {{marginLeft: 10}}>
                        <Avatar.Image source = {{uri: 'https://i.postimg.cc/TYNx4qkz/default-profile.png'}} size = {50}/>
                    </View>
                    
                    <View style = {{marginHorizontal: 20}}>
                        <Title>Rushi Solanki</Title>
                        <Caption style = {{bottom: 5}}>@_rushyu_21</Caption>
                    </View>
                </View>

                <Drawer.Section>
                    <DrawerItem
                        icon = {({color, size}) => (<Ionicons name = "home-outline" size = {size} color = {color} />)}
                        label = 'Home'
                        onPress = {() => props.navigation.navigate('MainTabScreen')}
                    />
                    <DrawerItem
                        icon = {({color, size}) => (<Ionicons name = "bookmarks-outline" size = {size} color = {color} />)}
                        label = 'Bookmarks'
                        onPress = {() => props.navigation.navigate('Bookmarks')}
                    />
                    <DrawerItem
                        icon = {({color, size}) => (<Ionicons name = "notifications-outline" size = {size} color = {color} />)}
                        label = 'Notification'
                        onPress = {() => props.navigation.navigate('Notifications')}
                    />
                    <DrawerItem
                        icon = {({color, size}) => (<Ionicons name = "settings-outline" size = {size} color = {color} />)}
                        label = 'Settings'
                        onPress = {() => props.navigation.navigate('Settings')}
                    />
                    <DrawerItem
                        icon = {({color, size}) => (<Ionicons name = "person-outline" size = {size} color = {color} />)}
                        label = 'Support'
                        onPress = {() => props.navigation.navigate('Support')}
                    />

                    <DrawerItem
                        label = 'Toggle Drawer'
                        onPress = {() => props.navigation.toggleDrawer()}
                    />

                    <DrawerItem
                        label = 'Close Drawer'
                        onPress = {() => props.navigation.closeDrawer()}
                    />
                  
                </Drawer.Section>

                <Drawer.Section title = "Preference">
                    <TouchableOpacity onPress = {() => {toggleTheme()}}>
                        <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                            <Text style = {{marginLeft: 15}}>Dark Theme</Text>
                            <Switch style = {{marginRight: 10}} value = {isDark}/>
                        </View>
                    </TouchableOpacity>
                </Drawer.Section>
            </DrawerContentScrollView>

            <Drawer.Section>
                <DrawerItem
                    icon = {({color, size}) => (<Ionicons name = "exit-outline" size = {size} color = {color} />)}
                    label = {'Sign Out'}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({

})