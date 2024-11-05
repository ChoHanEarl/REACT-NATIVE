import React from 'react'
import User from './components/User'
import styled from 'styled-components'

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`
const App = () => {
    return(
        <Container>
            <User />
        </Container>
    )
}

export default App