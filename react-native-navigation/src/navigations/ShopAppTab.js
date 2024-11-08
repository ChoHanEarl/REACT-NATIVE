import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Cart, Profile } from '../screens/ShopAppScreen'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const TabIcon = ({name, size, color}) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} />
}

const Tab = createBottomTabNavigator()

const ShopAppTabNavigator = ({name, size, color}) => {
    return(
        <Tab.Navigator
            // initialRouteName='Home'
            screenOptions={({route}) => ({
                tabBarIcon: props => {
                    let name = ''
                    if(route.name === 'Home') name='home'
                    else if(route.name === 'Cart') name='cart'
                    else name='profile'
                    return TabIcon({...props, name})
                },
                tabBarStyle:{
                    borderTopColor: '#ffffff',
                    borderTopWidth: 2
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'green'
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Inbox',
                    tabBarIcon: props =>
                        TabIcon({
                            ...props, name: props.focused ? 'home' : 'home-outline'
                        })
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: props =>
                        TabIcon({
                            ...props, name: props.focused ? 'cart' : 'cart-outline'
                        })
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: props =>
                        TabIcon({
                            ...props, name: props.focused ? 'account' : 'account-outline'
                        })
                }}
            />
        </Tab.Navigator>
    )
}

export default ShopAppTabNavigator


