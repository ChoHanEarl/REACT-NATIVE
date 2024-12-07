import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './navigations/Stack'
import BookStackNavigation from './navigations/BookStack'
import UserStackNavigation from './navigations/UserStack'
import TabNavigator from './navigations/Tab'
import ShopAppTabNavigator from './navigations/ShopAppTab'
import ChatTabNavigator from './navigations/ChatTab'
import DrawerNavigation from './navigations/Drawer'
// const Container = styled.View`
//     flex: 1;
//     background-color: #ffffff;
//     justify-content: center;
//     align-items: center;
// `

const App = () => {
    return(
        <NavigationContainer>
            <DrawerNavigation />
        </NavigationContainer>
    )
}

export default App