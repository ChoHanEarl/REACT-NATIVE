import React from 'react'
import User from './components/User'
import styled from 'styled-components'
import UserContext, { UserProvider, UserConsumer } from './contexts/User'
import Input from './components/Input'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemedComponent from './components/ThemedComponent'
import { CartProvider } from './contexts/CartContext'
import CartScreen from './components/CartScreen'
import { UserProvider2 } from './contexts/UserContext'
import HomeScreen from './components/HomeScreen'

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`
const App = () => {
    return(
        // <UserProvider>
        //     <Container>
        //         <User />
        //         <Input />
        //     </Container>
        // </UserProvider>
        // <ThemeProvider>
        //     <ThemedComponent />
        // </ThemeProvider>
        // <CartProvider>
        //         <CartScreen />
        // </CartProvider>
        <UserProvider2>
            <HomeScreen />
        </UserProvider2>
    )
}

export default App