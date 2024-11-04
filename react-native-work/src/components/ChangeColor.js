import React, { useState } from 'react'
import styled from 'styled-components/native'

const AppContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ color }) => color || '#ffffff'};
`

const ChangeColorButton = styled.Pressable`
    padding: 16px;
    background-color: #3498db;
    border-radius: 8px;
`

const ButtonText = styled.Text`
    color: white;
    font-size: 18px
    font-weight: bold;
`

const ChangeColor = () => {
    const [bgColor, setBgColor] = useState('#ffffff')

    const handleChangeColor = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        setBgColor(randomColor)
    };

    return (
        <AppContainer color={bgColor}>
            <ChangeColorButton onPress={handleChangeColor}>
                <ButtonText>Color Change</ButtonText>
            </ChangeColorButton>
        </AppContainer>
    );
};

export default ChangeColor
