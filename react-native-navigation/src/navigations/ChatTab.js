import React from 'react'
import { FriendScreen, SettingsScreen } from '../screens/ChatScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ChatStackNavigator from './ChatStack'

const TabIcon = ({name, size, color}) => {
    return <MaterialCommunityIcons name={name} size={24} color={color} />
}

const ChatTab = createBottomTabNavigator()

const ChatTabNavigator = ({name, size, color}) => {
    return(
        <ChatTab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: props => {
                    let name = ''
                    if(route.name === 'Friends') name='friends'
                    else if(route.name ==='Chat') name='chat'
                    else name='settings'
                }
            })}
        >
            <ChatTab.Screen 
                name="Friends"
                component={FriendScreen}
                options={{
                    tabBarLabel: 'Friends',
                    tabBarIcon: props =>
                        TabIcon({
                            ...props, name: props.focused ? 'account' : 'account-outline'
                        })
                }}
            />  
            <ChatTab.Screen
                name="Chat"
                component={ChatStackNavigator}
                options={{
                    tabBarLabel: 'Inbox',
                    tabBarIcon: props =>
                        TabIcon({
                            ...props, name: props.focused ? 'chat' : 'chat-outline'
                        })
                }}
            />
            <ChatTab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Inbox',
                    tabBarIcon: props =>
                        TabIcon({
                            ...props, name: props.focused ? 'cog' : 'cog-outline'
                        })
                }}
            />
        </ChatTab.Navigator>
    )
}

export default ChatTabNavigator