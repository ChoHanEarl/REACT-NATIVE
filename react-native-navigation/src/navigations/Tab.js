import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Mail, Meet, Settings } from '../screens/TabScreen'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const TabIcon = ({name, size, color}) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} />
}

//1. Tab네비게이션 생성
const Tab = createBottomTabNavigator();

const TabNavigator = ({name, size, color}) => {
    return(
        <Tab.Navigator 
            initialRouteName='Settings'
            screenOptions={({route}) => ({
                tabBarIcon: props => {
                    let name = ''
                    if(route.name === 'Mail') name='email'
                    else if(route.name === 'Meet') name='video'
                    else name='cog'
                    return TabIcon({...props, name})
                },
                // tabBarLabelPosition: 'beside-icon', //글씨를 아이콘 옆에 나타나게 함
                tabBarShowLabel: false, //아이콘만 나타남(글씨 X)
                tabBarStyle:{
                    backgroundColor: '#54b7f9',
                    borderTopColor: '#ffffff',
                    borderTopWidth: 2 //상단 두께
                },
                tabBarActiveTintColor: '#ffffff', //선택(클릭)하면 흰색으로 바뀜
                tabBarInactiveTintColor: '#0b92e9' //선택되지 않은 아이콘 색상 지정
            })}
        >
            <Tab.Screen 
                name="Mail" 
                component={Mail} 
                options={{
                    tabBarLabel: 'Inbox',
                    tabBarIcon: props =>
                        TabIcon({
                            ...props, name: props.focused ? 'email' : 'email-outline'
                        })
                }}
                // options={{
                //     tabBarIcon: props => TabIcon({...props, name: 'email'})
                // }}
            />
            <Tab.Screen 
                name="Meet" 
                component={Meet}
                options={{
                    tabBarIcon: props =>
                        TabIcon({
                            ...props, name: props.focused ? 'video' : 'video-outline'
                        })
                }} 
                // options={{
                //     tabBarIcon: props => TabIcon({...props, name: 'video'})
                // }}
            />
            <Tab.Screen 
                name="Settings" 
                component={Settings}
                options={{
                    tabBarIcon: props =>
                        TabIcon({
                            ...props, name: props.focused ? 'cog' : 'cog-outline'
                        })
                }}
                // options={{
                //     tabBarIcon: props => TabIcon({...props, name: 'cog'})
                // }} 
            />
        </Tab.Navigator>
    )
}

export default TabNavigator