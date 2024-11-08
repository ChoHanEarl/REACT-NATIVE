import React, { useState } from 'react'
import { Button, Text, ScrollView } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
    flex: 1;
    background-color: black;
    justify-content: center;
    align-items: center;
`

const StyledText = styled.Text`
    font-size: 30px;
    color: white;
`

export const Home = () => {
    return(
        <Container>
            <StyledText>Welcome to ShopApp</StyledText>
        </Container>
    )
}

export const Cart = () => {
    const [item, setItem] = useState([])
    return(
        <Container>
            <StyledText>Your cart is empty</StyledText>
            <Button title="Add Item" onPress={() => {
                setItem([...item, <Text style={{fontSize:20, color: '#ffffff'}}>Item Added in Cart</Text>])
            }}/>
                {item.length !== 0 &&(item.map(item=>(
                    <Text>{item}</Text>        
                )))}
        </Container>
    )
}

export const Profile = () => {
    return(
        <Container>
            <StyledText>Your Profile</StyledText>
        </Container>
    )
}