import React from 'react'
import { View, Text, Button } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
    align-items: 'center'
    justify-contents: 'flex-start'
`

const Body = styled.Text`
    font-size: 20px
`

const handlePress = () => {
    
}

const Calculator = () => {
    return(
        <Container>
            <Body>Enter numbers and select operation</Body>
            <View>
                <Button type="plus" onPress={handlePress}/>
            </View>
        </Container>
    )
}

export default Calculator